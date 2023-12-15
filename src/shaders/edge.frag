#version 300 es
// #extension GL_EXT_frag_depth : enable
precision highp float;

in float selected;
in float isTarget;
// in float isSource;
in float fog;
in vec4 color;
// in vec4 position;
in float emphasis;
in float size;
in float offsetRadius2D;
// flat in vec2 edgeDirection;
flat in float edgeLength;
flat in float edgeLength2D;
flat in vec2 sourcePosition2D;
flat in vec2 targetPosition2D;
in float y;
in float v;

flat in float sourceSize;
flat in float targetSize;

out vec4 fragColor;

const float PI = 3.1415926535897932384626433832795;
const float freq = 1.0;

uniform float edgeFrequency;
uniform float edgePulseSpeed;
uniform float edgeWaveSpeed;
uniform float edgeOvershoot;

uniform float time;
uniform float devicePixelRatio;
uniform sampler2D nodeDepthTexture;


#include "bump.glsl"


float wave(float t, float freq){ return pow(sin(t * freq * PI), 2.0); }
void main() {
  // paramaterize the edge in screen space
  float u_2D = length(gl_FragCoord.xy/devicePixelRatio - sourcePosition2D)/edgeLength2D;
  fragColor = color;
  
  float u_3D = isTarget;
  
  // softness
  fragColor.a *= mix(bump(v, 2.0*(1.0 - fog), 1.0), 1.0, fog);

  // end bumps
  float u_hybrid = mix(u_2D, u_3D, 0.5);
  float endBumpsMellow = 
    bump(u_hybrid,       1.0, 0.5) +
    bump(u_hybrid - 1.0, 1.0, 0.5);
    
  float endBumpsFirm = 
    bump(u_hybrid,       1.0, 0.1) +
    bump(u_hybrid - 1.0, 1.0, 0.1);

  // more end bumps
  float otherEndBumps = 
    bump(u_3D      , 1.0, offsetRadius2D/edgeLength) +
    bump(u_3D - 1.0, 1.0, offsetRadius2D/edgeLength);

  // waves
  // when we're zoomed out, keep the frequency consistent with the visual edge length
  float frequency = edgeLength2D * 1.0 * edgeFrequency * sourceSize;
  float waveSpeed = 4.0 * edgeWaveSpeed / edgeLength2D;
  float waves = mix(
    1.0,
    wave(u_2D - time * waveSpeed, frequency), 
    mix(0.5, 1.0, emphasis) // waves more pronounced for emphasized edges
  );

  // wave packets
  float highFrequency = edgeLength/4.0 * edgeFrequency;
  float pulseSpeed = 20.0/edgeLength * edgePulseSpeed;
  float pulse = pow(wave(u_2D - time * pulseSpeed, 1.0), edgeLength2D/5.0);
  
  // golden pulse
  fragColor.rgb = mix(fragColor.rgb, vec3(1.0, 1.0, 0.0), mix(0.0, pulse, 0.1));
  
  // dashed lines
  fragColor.a *= mix(1.0, waves, 1.0-pulse);
  
  // add bumps
  fragColor.a *= bump(
    v, 
    1.0, 
    (pulse * mix(0.2, 0.4, selected) * wave(u_3D, highFrequency)) + 0.6
  );
  
  // fragColor.rgb = mix(fragColor.rgb, vec3(1.0, 0.0, 0.0), y);
  // fragColor.a = y;
  
  // emphasize selected edges
  fragColor.a *= mix(0.4, 1.0, selected);
  
  // fade ends of edges near nodes
  fragColor.a *= mix(1.0, 0.0, mix(endBumpsMellow, endBumpsFirm, pulse));

  // strictly fade ends of edges using `u` coordinate with bump
  fragColor.a *= bump(u_3D-0.5, 2.0, edgeOvershoot);

  // check the depth of the nodes at this same fragment coordinate
  float nodeDepth = texelFetch(nodeDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
  // float nodeDepth = texture(nodeDepthTexture, gl_FragCoord.xy).r;
  gl_FragDepth = max(gl_FragCoord.z, nodeDepth) - 0.0001;


  // debugging parameters
  // fragColor = vec4(y+0.5, 0,0, 1);
  // fragColor = vec4(u, 0,0, u);

  // fragColor = vec4(gl_FragDepth, 0,0,1);
  // fragColor = vec4(nodeDepth, 0, 0, 1);
  // gl_FragDepth = -1.0;

  // override
  // fragColor = vec4(1,0,0,1);
}
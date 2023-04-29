#version 300 es
precision highp float;

in float selected;
in float isTarget;
// in float isSource;

in vec4 color;
// in vec4 position;
in float emphasis;
in float size;
// flat in vec2 edgeDirection;
flat in float edgeLength;
flat in float edgeLength2D;
flat in vec2 sourcePosition2D;
in float y;

out vec4 fragColor;

const float PI = 3.1415926535897932384626433832795;
const float freq = 1.0;

uniform float time;
uniform sampler2D nodeDepthTexture;


#include "bump.glsl"


float wave(float t, float freq){ return pow(sin(t * freq * PI), 2.0); }
void main() {
  // paramaterize the edge in screen space
  float u_2D = length(gl_FragCoord.xy - sourcePosition2D)/edgeLength2D;
  fragColor = color;
  
  float u_3D = isTarget;
  
  // softness
  fragColor.a *= mix(1.0, bump(y, 1.0, 1.0), 0.5);

  // end bumps
  float u_hybrid = mix(u_2D, u_3D, 0.5);
  float endBumps = 
    bump(u_hybrid, 4.0, 1000.0/edgeLength * size) +
    bump(u_hybrid - 1.0, 4.0, 1000.0/edgeLength * size);

  // more end bumps
  float otherEndBumps = 
    bump(u_3D      , 2.0*edgeLength, 1000.0/edgeLength * size) +
    bump(u_3D - 1.0, 2.0*edgeLength, 1000.0/edgeLength * size);

  // waves
  // when we're zoomed out, keep the frequency consistent with the visual edge length
  float frequency = edgeLength2D / 4.0;
  float waveSpeed = 8.0;
  float waves = mix(
    1.0,
    wave(u_2D + time/frequency * waveSpeed, frequency), 
    mix(0.7, 1.0, emphasis) // waves more pronounced for emphasized edges
  );

  // wave packets
  float highFrequency = edgeLength/4.0;
  float pulseSpeed = 20.0/edgeLength;
  float pulse = pow(wave(u_3D + time * pulseSpeed, 1.0), edgeLength2D);
  
  // golden pulse
  fragColor.rgb = mix(fragColor.rgb, vec3(1.0, 1.0, 0.0), mix(0.0, pulse, 0.1));
  
  // dashed lines
  fragColor.a *= mix(1.0, waves, 1.0-pulse);
  
  // add bumps
  fragColor.a *= bump(
    y, 
    1.0, 
    (pulse * 0.4 * wave(u_3D, highFrequency) + 0.1 + otherEndBumps)
  );
  
  // fragColor.a *= bump(y, 1.0, (1.0 - bump(u_2D - 0.5, 40.0, 1.0)));

  fragColor.a *= mix(0.1, 1.0, selected);
  
  // fade ends of edges near nodes
  fragColor.a *= (1.0 - endBumps);

  // check the depth of the nodes at this same fragment coordinate
  float nodeDepth = texelFetch(nodeDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
  gl_FragDepth = max(gl_FragCoord.z, nodeDepth) - 0.02;

  // bring ends up in depth
  // gl_FragDepth -= (0.001 * depthBumps);

  // nevermind can't do that because it messes up the depth test
  
  // too bad the size is so non-linear :D
  // fragColor.a *= (1.0 - bump(u_3D      , 1.0, 5.0*size));
  // fragColor.a *= (1.0 - bump(u_3D - 1.0, 1.0, 5.0*size));

  // soften edges near nodes
  // fragColor.a *= mix(1.0, bump(u-0.5, 5.0, 1.0), (1.0 - emphasis)*0.8);

  // add a little triangle
  // fragColor.a = min(1.0-triangle/3.0, fragColor.a);
  

  // debugging parameters
  // fragColor = vec4(y+0.5, 0,0, 1);
  // fragColor = vec4(u, 0,0, u);

  // fragColor = vec4(gl_FragDepth, 0,0,1);
  // gl_FragDepth = -1.0;
}
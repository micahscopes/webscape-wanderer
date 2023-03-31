#version 300 es
precision highp float;

in vec4 color;
in vec2 edgeDirection;
in float edgeLength;
in float isTarget;
out vec4 fragColor;
in float y;

const float PI = 3.1415926535897932384626433832795;
const float freq = 1.0;

uniform float time;

#include "bump.glsl"

float wave(float t, float freq){ return pow(sin(t * freq * PI), 2.0); }
void main() {
  float u = isTarget;
  float w = dot(gl_FragCoord.xy, edgeDirection)/u;
  // wave = 1.0 - wave*0.5;

  fragColor = color;
  fragColor *= bump(y, 4.0, sin(u*PI));
  // fragColor.a *= wave(t, 4.0);
  fragColor.a *= wave(u + time/4.0, 20.0);
  fragColor.a *= bump(u-0.5, 7.0, 1.0);
}
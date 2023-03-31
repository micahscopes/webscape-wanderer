#version 300 es
precision highp float;

in vec4 color;
in vec2 edgeDirection;
in float edgeLength;
in float isSource;
out vec4 fragColor;
in float y;

const float freq = 1.0;

#include "bump.glsl"

void main() {
  float t = isSource;

  fragColor = color;
  // fragColor *= bump(y, 2.0, 1.0);
  fragColor *= 1.0;
    // pow(sin(t * freq * edgeLength), 2.0);
    // sin(gl_FragCoord.x/10.0) * edgeDirection.x +
    // cos(gl_FragCoord.y/10.0) * edgeDirection.y);
  // fragColor = vec4(texture(positionTexture, vec2(0.2)).xyz, 1.0);
  // fragColor = texture(positionTexture, gl_FragCoord.xy);
  // fragColor.a = 1.0;
  // fragColor = vec4(gl_FragCoord.xy, 0.0, 1.0);
}
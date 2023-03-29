#version 300 es
precision highp float;
in vec4 color;
in float radius;
out vec4 fragColor;
uniform sampler2D positionTexture;

void main() {
  fragColor = color;
  // fragColor = vec4(texture(positionTexture, vec2(0.2)).xyz, 1.0);
  // fragColor = texture(positionTexture, gl_FragCoord.xy);
  fragColor.a = 1.0;
  // fragColor = vec4(gl_FragCoord.xy, 0.0, 1.0);
}
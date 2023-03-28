#version 300 es
precision lowp float;
flat in vec4 color;
in vec3 normal;

in vec3 position;
out vec4 fragColor;

void main() {
  // simple lighting
  // use the normal to calculate the light direction
  vec3 lightDirection = normalize(vec3(0.0, 0.0, 1.0));
  float light = dot(normal, lightDirection);
  // use the light to calculate the color

  // fragColor = vec4(normal, 1.0);
  fragColor = vec4(color.xyz*light, 1.0);
}
#version 300 es
precision lowp float;
flat in vec4 color;
flat in vec3 position;
out vec4 fragColor;

void main() {
  float radius = 1.0;
  vec2 position2D = gl_PointCoord - vec2(0.5); // center point coordinate

  float r = length(position2D); // distance from center
  if (r > 0.5) discard; // discard points outside the sphere

  float z = sqrt(1.0 - pow(2.0 * r, 2.0)); // calculate z value for sphere

  fragColor = color; // set the color
  fragColor.rgb *= 5.0*smoothstep(radius - 0.4, radius + 0.8, z); // fade out the edges of the sphere

  // fragColor.a = mix(fragColor.a, 1.0, 0.5) * (position.z + 2.0)/2.0; // fade out the edges of the sphere
  // fragColor.a *= smoothstep(radius - 0.2, radius + 0.2, z); // fade out the edges of the sphere

  // fragColor = color;
}
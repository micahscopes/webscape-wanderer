vec3 desaturate(vec3 color, float amount) {
  float average = (color.r + color.g + color.b) / 3.0;
  return mix(color, vec3(average), amount);
}
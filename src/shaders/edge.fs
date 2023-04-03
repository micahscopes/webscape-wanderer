#version 300 es
precision highp float;

in vec4 color;
in vec4 position;
flat in vec2 edgeDirection;
flat in float edgeLength;
flat in float edgeLength2D;
in float isTarget;
in float isSource;
in float size;
out vec4 fragColor;
in float y;
in float v;

const float PI = 3.1415926535897932384626433832795;
const float freq = 1.0;

uniform float time;

#include "bump.glsl"
float sdEgg( in vec2 p, in float ra, in float rb )
{
    const float k = sqrt(3.0);
    p.x = abs(p.x);
    float r = ra - rb;
    return ((p.y<0.0)       ? length(vec2(p.x,  p.y    )) - r :
            (k*(p.x+r)<p.y) ? length(vec2(p.x,  p.y-k*r)) :
                              length(vec2(p.x+r,p.y    )) - 2.0*r) - rb;
}

float sdEquilateralTriangle( in vec2 p )
{
    const float k = sqrt(3.0);
    p.x = abs(p.x) - 1.0;
    p.y = p.y + 1.0/k;
    if( p.x+k*p.y>0.0 ) p = vec2(p.x-k*p.y,-k*p.x-p.y)/2.0;
    p.x -= clamp( p.x, -2.0, 0.0 );
    return -length(p)*sign(p.y);
}

float wave(float t, float freq){ return pow(sin(t * freq * PI), 2.0); }
void main() {
  float u = isTarget;
  // float w = dot(gl_FragCoord.xy, edgeDirection)/u;
  
  // float d = sdEgg(vec2(y*4.0, (isSource-0.5)*edgeLength2D*40.0), 0.5, 0.0);
  float d = sdEquilateralTriangle(vec2(y*4.0, (isSource-0.5)*edgeLength2D*10.0/size));
  float triangle = d < 0.0 ? 1.0 : 0.0;

  fragColor = color;
  // fragColor *= max(
  //   (4.0 + bump(y, 1.0, sin(u*PI)))/5.0,
  //   triangle
  // );

  fragColor.a *= wave(u + time/20.0, 50.0);
  // fragColor.a *= mix(1.0, bump(u-0.5, 5.0, 1.0), 0.8);

  fragColor.a = min(1.0-triangle/3.0, fragColor.a);
  
  // fragColor.a*=0.75;
  
  // add fog using the z-buffer
  // parameters to control the fog:
  
  fragColor.rgb *= mix(1.0, bump(position.x/position.w, 2.0, 1.0), 0.5);

  // debug y parameter
  // fragColor = vec4(y+0.5, 0,0, 1);
}
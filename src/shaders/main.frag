#version 430 core

out vec4 frag_color;

uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform vec3 u_color;
uniform bool u_darken;
uniform float t;

bool is_close(float v, float p, float dist)
{
    return abs(p - v) < dist;
}

float rand(vec2 uv){
    return fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
	float random = rand(gl_FragCoord.xy / u_resolution.xy);
	if(u_darken)
	{
		if(is_close(gl_FragCoord.x, u_mouse.x, 5))
		{
			frag_color = vec4(0.8, 0.3, 0.2, mod(t*random, 1.0));
		}
		else
		{
			frag_color = vec4(u_color * 0.5, 1.0);
		}
	}
	else
	{
		frag_color = vec4(u_color, 1.0);
	}
}


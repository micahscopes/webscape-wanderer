fn lms2rgb(lms : vec3<f32>) -> vec3<f32> {

    // let lms2rgb_mat = mat3x3<f32>(
    //     vec3<f32>(2.85847e+0, -1.62879e+0, -2.48910e-2),
    //     vec3<f32>(-2.10182e-1,  1.15820e+0,  3.24281e-4),
    //     vec3<f32>(-4.18120e-2, -1.18169e-1,  1.06867e+0)
    // );

    let lms2rgb_mat = mat3x3<f32>(
        vec3<f32>( 0.0809444479,  -0.0102485335,  -0.000365296938),
        vec3<f32>(-0.13050440,     0.0540193266,  -0.00412161469),
        vec3<f32>( 0.116721066,   -0.113614708,    0.693511405)
    );

    return lms2rgb_mat * lms;
}

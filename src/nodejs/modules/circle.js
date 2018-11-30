const { PI, pow } = Math;

exports.area = (r) => PI * pow(r, 2);

exports.circumference = (r) => 2 * PI * r;

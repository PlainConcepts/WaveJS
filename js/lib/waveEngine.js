/*
 * 3D ENGINE - MATRIX
 *
 * Copyright (c) 2012 Plain Concepts (http://www.plainconcepts.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/
 */

/**
 * Constans to generate colors strings.
 * @type {String}
 */
var rgba = 'rgba(',
    rgb = 'rgb(',
    comma = ',',
    close = ')';

/**
 * Create an instance of Matrix 4x4
 * @return {Matrix}
 * @this {Matrix}
 * @constructor
 */
function Matrix() {
    this.position = arguments;
    /**
     * M11 = position[0]
     * M12 = position[1]
     * M13 = position[2]
     * M14 = position[3]
     * M21 = position[4]
     * M22 = position[5]
     * M23 = position[6]
     * M24 = position[7]
     * M31 = position[8]
     * M32 = position[9]
     * M33 = position[10]
     * M34 = position[11]
     * M41 = position[12]
     * M42 = position[13]
     * M43 = position[14]
     * M44 = position[15]
     */
    return this;
}

/**
 * Assing Identity Matrix to itself
 * @this {Matrix}
 */
Matrix.prototype.MatrixIdentity = function () {
    var position = this.position;
    position[0] = 1;
    position[1] = 0;
    position[2] = 0;
    position[3] = 0;
    position[4] = 0;
    position[5] = 1;
    position[6] = 0;
    position[7] = 0;
    position[8] = 0;
    position[9] = 0;
    position[10] = 1;
    position[11] = 0;
    position[12] = 0;
    position[13] = 0;
    position[14] = 0;
    position[15] = 1;
};

/**
 * Create a translation matrix.
 * @param {Array(3)} vector3 The new position.
 * @this {Matrix}
 * @constructor
 */
Matrix.prototype.CreateTranslation = function (vector3) {
    var position = this.position;
    position[0] = 1;
    position[1] = 0;
    position[2] = 0;
    position[3] = 0;
    position[4] = 0;
    position[5] = 1;
    position[6] = 0;
    position[7] = 0;
    position[8] = 0;
    position[9] = 0;
    position[10] = 1;
    position[11] = 0;
    position[12] = vector3[0];
    position[13] = vector3[1];
    position[14] = vector3[2];
    position[15] = 1;
};

/**
 * Create Scale Matrix
 * @param {number} xScale The scale in x-axis
 * @param {number} yScale The scale in y-axis
 * @param {number} zScale The scale in z-axis
 * @this {Matrix}
 * @constructor
 */
Matrix.prototype.CreateScale = function (xScale, yScale, zScale) {
    var position = this.position;
    position[0] = xScale;
    position[1] = 0;
    position[2] = 0;
    position[3] = 0;
    position[4] = 0;
    position[5] = yScale;
    position[6] = 0;
    position[7] = 0;
    position[8] = 0;
    position[9] = 0;
    position[10] = zScale;
    position[11] = 0;
    position[12] = 0;
    position[13] = 0;
    position[14] = 0;
    position[15] = 1;
};

/**
 * Create Rotation Matrix in X-axis
 * @param {number} radians The rotations in radians
 * @this {Matrix}
 * @constructor
 */
Matrix.prototype.CreateRotationX = function (radians) {
    var num2 = Math.cos(radians);
    var num = Math.sin(radians);
    var position = this.position;
    position[0] = 1;
    position[1] = 0;
    position[2] = 0;
    position[3] = 0;
    position[4] = 0;
    position[5] = num2;
    position[6] = num;
    position[7] = 0;
    position[8] = 0;
    position[9] = -num;
    position[10] = num2;
    position[11] = 0;
    position[12] = 0;
    position[13] = 0;
    position[14] = 0;
    position[15] = 1;
};

/**
 * Create Rotation Matrix in Y-axis
 * @param {number} radians The rotations in radians
 * @this {Matrix}
 * @constructor
 */
Matrix.prototype.CreateRotationY = function (radians) {
    var num2 = Math.cos(radians);
    var num = Math.sin(radians);
    var position = this.position;
    position[0] = num2;
    position[1] = 0;
    position[2] = -num;
    position[3] = 0;
    position[4] = 0;
    position[5] = 1;
    position[6] = 0;
    position[7] = 0;
    position[8] = num;
    position[9] = 0;
    position[10] = num2;
    position[11] = 0;
    position[12] = 0;
    position[13] = 0;
    position[14] = 0;
    position[15] = 1;
};

/**
 * Create Rotation Matrix in Z-axis
 * @param {number} radians The rotations in radians
 * @this {Matrix}
 * @constructor
 */
Matrix.prototype.CreateRotationZ = function (radians) {
    var num2 = Math.cos(radians);
    var num = Math.sin(radians);
    var position = this.position;
    position[0] = num2;
    position[1] = num;
    position[2] = 0;
    position[3] = 0;
    position[4] = -num;
    position[5] = num2;
    position[6] = 0;
    position[7] = 0;
    position[8] = 0;
    position[9] = 0;
    position[10] = 1;
    position[11] = 0;
    position[12] = 0;
    position[13] = 0;
    position[14] = 0;
    position[15] = 1;
};

/**
 * Create a Shadow Matrix
 * @param {Array(3)} plane Plane where Shadow will be projected
 * @param {Array(3)} light Light position
 * @param {number} d distance to plane.
 * @return {Matrix}
 */
function CreateShadowMatrix(plane, light, d) {
    var matrix = new Matrix();
    var num = ((plane[0] * light[0]) + (plane[1] * light[1])) + (plane[2] * light[2]);
    var num5 = -plane[0];
    var num4 = -plane[1];
    var num3 = -plane[2];
    var num2 = -d;
    var position = matrix.position;
    position[0] = (num5 * light[0]) + num;
    position[1] = num5 * light[1];
    position[2] = num5 * light[2];
    position[3] = 0;
    position[4] = num4 * light[0];
    position[5] = (num4 * light[1]) + num;
    position[6] = num4 * light[2];
    position[7] = 0;
    position[8] = num3 * light[0];
    position[9] = num3 * light[1];
    position[10] = (num3 * light[2]) + num;
    position[11] = 0;
    position[12] = num2 * light[0];
    position[13] = num2 * light[1];
    position[14] = num2 * light[2];
    position[15] = num;
    return matrix;
}

/**
 * Genearte Perspective Fiel Of View Matrix.
 * @param {number} fieldOfView
 * @param {number} aspectRatio
 * @param {number} nearPlaneDistance
 * @param {number} farPlaneDistance
 * @return {Matrix}
 */
function CreatePerspectiveFieldOfView(fieldOfView, aspectRatio, nearPlaneDistance, farPlaneDistance) {
    var matrix = new Matrix();
    var num = 1 / Math.tan(fieldOfView * 0.5);
    var num9 = num / aspectRatio;
    var position = matrix.position;
    position[0] = num9;
    position[1] = position[2] = position[3] = 0;
    position[5] = num;
    position[4] = position[6] = position[7] = 0;
    position[8] = position[9] = 0;
    position[10] = farPlaneDistance / (nearPlaneDistance - farPlaneDistance);
    position[11] = -1;
    position[12] = position[13] = position[15] = 0;
    position[14] = (nearPlaneDistance * farPlaneDistance) / (nearPlaneDistance - farPlaneDistance);
    return matrix;
}

/**
 * Create View Matrix for the scene.
 * @param {Array(3)} cameraPosition Array with the camera position
 * @param {Array(3)} cameraTarget Array with the target position
 * @param {Array(3)} cameraUpVector Array with the camera's vector up
 * @return {Matrix}
 * @constructor
 */
function CreateLookAt(cameraPosition, cameraTarget, cameraUpVector) {
    var matrix = new Matrix();
    var vector = SubstractV3(cameraPosition, cameraTarget);
    vector.Normalize();
    var vector2 = CrossV3(cameraUpVector, vector);
    vector2.Normalize();
    var vector3 = CrossV3(vector, vector2);
    var position = matrix.position;
    position[0] = vector2[0];
    position[1] = vector3[0];
    position[2] = vector[0];
    position[3] = 0;
    position[4] = vector2[1];
    position[5] = vector3[1];
    position[6] = vector[1];
    position[7] = 0;
    position[8] = vector2[2];
    position[9] = vector3[2];
    position[10] = vector[2];
    position[11] = 0;
    position[12] = -DotV3(vector2, cameraPosition);
    position[13] = -DotV3(vector3, cameraPosition);
    position[14] = -DotV3(vector, cameraPosition);
    position[15] = 1;
    return matrix;
}

/**
 * Invert the Matrix itself
 * @this {Matrix}
 * @constructor
 */
Matrix.prototype.Invert = function () {
    var position = this.position;
    var num5 = position[0];
    var num4 = position[1];
    var num3 = position[2];
    var num2 = position[3];
    var num9 = position[4];
    var num8 = position[5];
    var num7 = position[6];
    var num6 = position[7];
    var num17 = position[8];
    var num16 = position[9];
    var num15 = position[10];
    var num14 = position[11];
    var num13 = position[12];
    var num12 = position[13];
    var num11 = position[14];
    var num10 = position[15];
    var num23 = (num15 * num10) - (num14 * num11);
    var num22 = (num16 * num10) - (num14 * num12);
    var num21 = (num16 * num11) - (num15 * num12);
    var num20 = (num17 * num10) - (num14 * num13);
    var num19 = (num17 * num11) - (num15 * num13);
    var num18 = (num17 * num12) - (num16 * num13);
    var num39 = ((num8 * num23) - (num7 * num22)) + (num6 * num21);
    var num38 = -(((num9 * num23) - (num7 * num20)) + (num6 * num19));
    var num37 = ((num9 * num22) - (num8 * num20)) + (num6 * num18);
    var num36 = -(((num9 * num21) - (num8 * num19)) + (num7 * num18));
    var num = 1 / ((((num5 * num39) + (num4 * num38)) + (num3 * num37)) + (num2 * num36));
    position[0] = num39 * num;
    position[4] = num38 * num;
    position[8] = num37 * num;
    position[12] = num36 * num;
    position[1] = -(((num4 * num23) - (num3 * num22)) + (num2 * num21)) * num;
    position[5] = (((num5 * num23) - (num3 * num20)) + (num2 * num19)) * num;
    position[9] = -(((num5 * num22) - (num4 * num20)) + (num2 * num18)) * num;
    position[13] = (((num5 * num21) - (num4 * num19)) + (num3 * num18)) * num;
    var num35 = (num7 * num10) - (num6 * num11);
    var num34 = (num8 * num10) - (num6 * num12);
    var num33 = (num8 * num11) - (num7 * num12);
    var num32 = (num9 * num10) - (num6 * num13);
    var num31 = (num9 * num11) - (num7 * num13);
    var num30 = (num9 * num12) - (num8 * num13);
    position[2] = (((num4 * num35) - (num3 * num34)) + (num2 * num33)) * num;
    position[6] = -(((num5 * num35) - (num3 * num32)) + (num2 * num31)) * num;
    position[10] = (((num5 * num34) - (num4 * num32)) + (num2 * num30)) * num;
    position[14] = -(((num5 * num33) - (num4 * num31)) + (num3 * num30)) * num;
    var num29 = (num7 * num14) - (num6 * num15);
    var num28 = (num8 * num14) - (num6 * num16);
    var num27 = (num8 * num15) - (num7 * num16);
    var num26 = (num9 * num14) - (num6 * num17);
    var num25 = (num9 * num15) - (num7 * num17);
    var num24 = (num9 * num16) - (num8 * num17);
    position[3] = -(((num4 * num29) - (num3 * num28)) + (num2 * num27)) * num;
    position[7] = (((num5 * num29) - (num3 * num26)) + (num2 * num25)) * num;
    position[11] = -(((num5 * num28) - (num4 * num26)) + (num2 * num24)) * num;
    position[15] = (((num5 * num27) - (num4 * num25)) + (num3 * num24)) * num;
};

/**
 * Create a matrix (4x4) from a Quaternion.
 * @param {Quaternion} quaternion
 * @return {Matrix}
 */
function CreateFromQuaternion(quaternion) {
    var matrix = new Matrix();
    var num9 = quaternion[0] * quaternion[0];
    var num8 = quaternion[1] * quaternion[1];
    var num7 = quaternion[2] * quaternion[2];
    var num6 = quaternion[0] * quaternion[1];
    var num5 = quaternion[2] * quaternion[3];
    var num4 = quaternion[2] * quaternion[0];
    var num3 = quaternion[1] * quaternion[3];
    var num2 = quaternion[1] * quaternion[2];
    var num = quaternion[0] * quaternion[3];
    var position = matrix.position;
    position[0] = 1 - (2 * (num8 + num7));
    position[1] = 2 * (num6 + num5);
    position[2] = 2 * (num4 - num3);
    position[3] = 0;
    position[4] = 2 * (num6 - num5);
    position[5] = 1 - (2 * (num7 + num9));
    position[6] = 2 * (num2 + num);
    position[7] = 0;
    position[8] = 2 * (num4 + num3);
    position[9] = 2 * (num2 - num);
    position[10] = 1 - (2 * (num8 + num9));
    position[11] = 0;
    position[12] = 0;
    position[13] = 0;
    position[14] = 0;
    position[15] = 1;
    return matrix;
}

/**
 * Multiply two matrixs
 * @param {Matrix} matrix1
 * @param {Matrix} matrix2
 * @return {Matrix}
 */
function Multiply(matrix1, matrix2) {
    var matrix = new Matrix();
    var position = matrix.position;
    var position1 = matrix1.position;
    var position2 = matrix2.position;
    position[0] = (((position1[0] * position2[0]) + (position1[1] * position2[4])) + (position1[2] * position2[8])) + (position1[3] * position2[12]);
    position[1] = (((position1[0] * position2[1]) + (position1[1] * position2[5])) + (position1[2] * position2[9])) + (position1[3] * position2[13]);
    position[2] = (((position1[0] * position2[2]) + (position1[1] * position2[6])) + (position1[2] * position2[10])) + (position1[3] * position2[14]);
    position[3] = (((position1[0] * position2[3]) + (position1[1] * position2[7])) + (position1[2] * position2[11])) + (position1[3] * position2[15]);
    position[4] = (((position1[4] * position2[0]) + (position1[5] * position2[4])) + (position1[6] * position2[8])) + (position1[7] * position2[12]);
    position[5] = (((position1[4] * position2[1]) + (position1[5] * position2[5])) + (position1[6] * position2[9])) + (position1[7] * position2[13]);
    position[6] = (((position1[4] * position2[2]) + (position1[5] * position2[6])) + (position1[6] * position2[10])) + (position1[7] * position2[14]);
    position[7] = (((position1[4] * position2[3]) + (position1[5] * position2[7])) + (position1[6] * position2[11])) + (position1[7] * position2[15]);
    position[8] = (((position1[8] * position2[0]) + (position1[9] * position2[4])) + (position1[10] * position2[8])) + (position1[11] * position2[12]);
    position[9] = (((position1[8] * position2[1]) + (position1[9] * position2[5])) + (position1[10] * position2[9])) + (position1[11] * position2[13]);
    position[10] = (((position1[8] * position2[2]) + (position1[9] * position2[6])) + (position1[10] * position2[10])) + (position1[11] * position2[14]);
    position[11] = (((position1[8] * position2[3]) + (position1[9] * position2[7])) + (position1[10] * position2[11])) + (position1[11] * position2[15]);
    position[12] = (((position1[12] * position2[0]) + (position1[13] * position2[4])) + (position1[14] * position2[8])) + (position1[15] * position2[12]);
    position[13] = (((position1[12] * position2[1]) + (position1[13] * position2[5])) + (position1[14] * position2[9])) + (position1[15] * position2[13]);
    position[14] = (((position1[12] * position2[2]) + (position1[13] * position2[6])) + (position1[14] * position2[10])) + (position1[15] * position2[14]);
    position[15] = (((position1[12] * position2[3]) + (position1[13] * position2[7])) + (position1[14] * position2[11])) + (position1[15] * position2[15]);
    return matrix;
}

/**
 * Convert a 3D point in a projected 2D point.
 * @param {Array(4)} pos 3D point to Convert.
 * @param {Matrix} worldviewproj World view projection matrix
 * @param {number} screenWidth Screen width
 * @param {number} screenHeight Screen Height
 * @return {Array(2)}
 */
function Convert(pos, worldviewproj, screenWidth, screenHeight) {
    var vx = pos[0];
    var vy = pos[1];
    var vz = pos[2];
    var vw = pos[3];
    var p = worldviewproj.position;
    var x1 = (((vx * p[0]) + (vy * p[4])) + (vz * p[8])) + (vw * p[12]);
    var y1 = (((vx * p[1]) + (vy * p[5])) + (vz * p[9])) + (vw * p[13]);
    var z1 = (((vx * p[2]) + (vy * p[6])) + (vz * p[10])) + (vw * p[14]);
    var w1 = (((vx * p[3]) + (vy * p[7])) + (vz * p[11])) + (vw * p[15]);
    var position = [x1, y1, z1, w1];

    var x = position[0];
    var y = position[1];
    var w = position[2];
    return [screenWidth * ((x / w) + 1.0) / 2.0, screenHeight * (1.0 - (((y / w) + 1.0) / 2.0))];
}

/**
 * Normalize a vector
 * @this {Array}
 */
Array.prototype.Normalize = function () {
    if (this.length === 2) {
        NormalizeVector2(this);
    }
    else if (this.length === 3) {
        NormalizeVector3(this);
    }
    else if (this.length === 4) {
        NormalizeVector4(this);
    }
};

/**
 * Normalize a vector2
 * @param {Array(2)} value
 */
function NormalizeVector2(value) {
    var num2 = (value[0] * value[0]) + (value[1] * value[1]);
    var num = 1 / (Math.sqrt(num2));
    value[0] *= num;
    value[1] *= num;
}

/**
 * Normalize a vector3
 * @param value
 */
function NormalizeVector3(value) {
    var x = value[0];
    var y = value[1];
    var z = value[2];
    var num2 = ((x * x) + (y * y)) + (z * z);
    var num = 1 / Math.sqrt(num2);

    value[0] = x * num;
    value[1] = y * num;
    value[2] = z * num;
}

/**
 * Normalize a vector4
 * @param value
 */
function NormalizeVector4(value) {
    var x = value[0];
    var y = value[1];
    var z = value[2];
    var w = value[3];
    var num2 = ((x * x) + (y * y)) + (z * z) + (w * w);
    var num = 1 / Math.sqrt(num2);

    value[0] = x * num;
    value[1] = y * num;
    value[2] = z * num;
    value[3] = w * num;
}

/**
 * Invert an array
 * @this {Array(3)};
 * @constructor
 */
Array.prototype.Invert = function () {
    this[0] = -this[0];
    this[1] = -this[1];
    this[2] = -this[2];
};

/**
 * Divide each element of the array(4) by divider
 * @param {number} divider
 * @this {Array}
 */
Array.prototype.Divide = function (divider) {
    var num = 1 / divider;
    this[0] = this[0] * num;
    this[1] = this[1] * num;
    this[2] = this[2] * num;
    this[3] = this[3] * num;
};

/**
 * Adds two arrays.
 * @param {Array(3)}vector1
 * @param {Array(3)}vector2
 * @return {Array(3)}
 */
function PlusV3(vector1, vector2) {
    return [vector1[0] + vector2[0],
        vector1[1] + vector2[1],
        vector1[2] + vector2[2]];
}

/**
 * Substract two arrays
 * @param {Array(3)}vector1
 * @param {Array(3)}vector2
 * @return {Array}
 * @constructor
 */
function SubstractV3(vector1, vector2) {
    return [vector1[0] - vector2[0],
        vector1[1] - vector2[1],
        vector1[2] - vector2[2]];
}

/**
 * Cross product for two Array(3)
 * @param {Array(3)} vector1
 * @param {Array(3)} vector2
 * @return {Array}
 */
function CrossV3(vector1, vector2) {
    var x = (vector1[1] * vector2[2]) - (vector1[2] * vector2[1]);
    var y = (vector1[2] * vector2[0]) - (vector1[0] * vector2[2]);
    var z = (vector1[0] * vector2[1]) - (vector1[1] * vector2[0]);
    return [x, y, z];
}

/**
 * Dot product for two Array(3)
 * @param {Array(3)} vector1
 * @param {Array(3)} vector2
 * @return {number}
 * @constructor
 */
function DotV3(vector1, vector2) {
    return (vector1[0] * vector2[0]) +
        (vector1[1] * vector2[1]) +
        (vector1[2] * vector2[2]);
}

/**
 * Transform a 3D point respect a Transformation Matrix
 * @param {Array(3)} position Point Position
 * @param {Matrix} matrix Transformation Matrix.
 * @return {Array}
 */
function TransformV3Matrix(position, matrix) {
    var p = matrix.position;
    var x = position[0];
    var y = position[1];
    var z = position[2];
    var num3 = (((x * p[0]) + (y * p[4])) + (z * p[8])) + p[12];
    var num2 = (((x * p[1]) + (y * p[5])) + (z * p[9])) + p[13];
    var num = (((x * p[2]) + (y * p[6])) + (z * p[10])) + p[14];
    return [num3, num2, num];
}



function TransformV4Matrix(vector, matrix) {
    var vx = vector[0];
    var vy = vector[1];
    var vz = vector[2];
    var vw = vector[3];
    var p = matrix.position;
    var x = (((vx * p[0]) + (vy * p[4])) + (vz * p[8])) + (vw * p[12]);
    var y = (((vx * p[1]) + (vy * p[5])) + (vz * p[9])) + (vw * p[13]);
    var z = (((vx * p[2]) + (vy * p[6])) + (vz * p[10])) + (vw * p[14]);
    var w = (((vx * p[3]) + (vy * p[7])) + (vz * p[11])) + (vw * p[15]);
    return [x, y, z, w];
}

function Max(value1, value2) {
    return [(value1[0] > value2[0]) ? value1[0] : value2[0],
        (value1[1] > value2[1]) ? value1[1] : value2[1],
        (value1[2] > value2[2]) ? value1[2] : value2[2],
        (value1[3] > value2[3]) ? value1[3] : value2[3]];
}

function Min(value1, value2) {
    return [(value1[0] < value2[0]) ? value1[0] : value2[0],
        (value1[1] < value2[1]) ? value1[1] : value2[1],
        (value1[2] < value2[2]) ? value1[2] : value2[2],
        (value1[3] < value2[3]) ? value1[3] : value2[3]];
}

function SubstractV4(value1, value2) {
    return [value1[0] - value2[0],
        value1[1] - value2[1],
        value1[2] - value2[2],
        value1[3] - value2[3]];
}

function CreateFromYawPitchRoll(yaw, pitch, roll) {
    var quaternion = new Array();
    var num9 = roll * 0.5;
    var num6 = Math.sin(num9);
    var num5 = Math.cos(num9);
    var num8 = pitch * 0.5;
    var num4 = Math.sin(num8);
    var num3 = Math.cos(num8);
    var num7 = yaw * 0.5;
    var num2 = Math.sin(num7);
    var num = Math.cos(num7);
    quaternion[0] = ((num * num4) * num5) + ((num2 * num3) * num6);
    quaternion[1] = ((num2 * num3) * num5) - ((num * num4) * num6);
    quaternion[2] = ((num * num3) * num6) - ((num2 * num4) * num5);
    quaternion[3] = ((num * num3) * num5) + ((num2 * num4) * num6);

    num9 = quaternion[0] * quaternion[0];
    num8 = quaternion[1] * quaternion[1];
    num7 = quaternion[2] * quaternion[2];
    num6 = quaternion[0] * quaternion[1];
    num5 = quaternion[2] * quaternion[3];
    num4 = quaternion[2] * quaternion[0];
    num3 = quaternion[1] * quaternion[3];
    num2 = quaternion[1] * quaternion[2];
    num = quaternion[0] * quaternion[3];

    var matrix = new Matrix();
    var position = matrix.position;
    position[0] = 1 - (2 * (num8 + num7));
    position[1] = 2 * (num6 + num5);
    position[2] = 2 * (num4 - num3);
    position[3] = 0;
    position[4] = 2 * (num6 - num5);
    position[5] = 1 - (2 * (num7 + num9));
    position[6] = 2 * (num2 + num);
    position[7] = 0;
    position[8] = 2 * (num4 + num3);
    position[9] = 2 * (num2 - num);
    position[10] = 1 - (2 * (num8 + num9));
    position[11] = 0;
    position[12] = 0;
    position[13] = 0;
    position[14] = 0;
    position[15] = 1;
    return matrix;
}

/*
 * 3D ENGINE - BOUNDING BOX
 *
 * Copyright (c) 2012 Plain Concepts (http://www.plainconcepts.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/
 */

function BoundingBox() {
    this.min = new Array();
    this.max = new Array();
}

BoundingBox.prototype.Intersects = function (ray) {
    var num = 0;
    var maxValue = Number.MAX_VALUE;
    if (Math.abs(ray.direction[0]) < 1E-06) {
        if ((ray.position[0] < this.min[0]) || (ray.position[0] > this.max[0])) {
            return null;
        }
    }
    else {
        var num11 = 1 / ray.direction[0];
        var num8 = (this.min[0] - ray.position[0]) * num11;
        var num7 = (this.max[0] - ray.position[0]) * num11;
        if (num8 > num7) {
            var num14 = num8;
            num8 = num7;
            num7 = num14;
        }
        num = Math.max(num8, num);
        maxValue = Math.min(num7, maxValue);
        if (num > maxValue) {
            return null;
        }
    }
    if (Math.abs(ray.direction[1]) < 1E-06) {
        if ((ray.position[1] < this.min[1]) || (ray.position[1] > this.max[1])) {
            return null;
        }
    }
    else {
        var num10 = 1 / ray.direction[1];
        var num6 = (this.min[1] - ray.position[1]) * num10;
        var num5 = (this.max[1] - ray.position[1]) * num10;
        if (num6 > num5) {
            var num13 = num6;
            num6 = num5;
            num5 = num13;
        }
        num = Math.max(num6, num);
        maxValue = Math.min(num5, maxValue);
        if (num > maxValue) {
            return null;
        }
    }
    if (Math.abs(ray.direction[2]) < 1E-06) {
        if ((ray.position[2] < this.min[2]) || (ray.position[2] > this.max[2])) {
            return null;
        }
    }
    else {
        var num9 = 1 / ray.direction[2];
        var num4 = (this.min[2] - ray.position[2]) * num9;
        var num3 = (this.max[2] - ray.position[2]) * num9;
        if (num4 > num3) {
            var num12 = num4;
            num4 = num3;
            num3 = num12;
        }
        num = Math.max(num4, num);
        maxValue = Math.min(num3, maxValue);
        if (num > maxValue) {
            return null;
        }
    }
    return num;
};

BoundingBox.prototype.GetConers = function () {
    var min = this.min;
    var max = this.max;
    return [[min[0], max[1], max[2], 1],
        [max[0], max[1], max[2], 1],
        [max[0], min[1], max[2], 1],
        [min[0], min[1], max[2], 1],
        [min[0], max[1], min[2], 1],
        [max[0], max[1], min[2], 1],
        [max[0], min[1], min[2], 1],
        [min[0], min[1], min[2], 1]];
};

/*
 * 3D ENGINE - RAY
 *
 * Copyright (c) 2012 Plain Concepts (http://www.plainconcepts.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/
 */

function Ray(position, direction) {
    this.position = position;
    this.direction = direction;
}

/*
 * 3D ENGINE - CAMERA
 *
 * Copyright (c) 2012 Plain Concepts (http://www.plainconcepts.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/
 */

var EPSILON = 1.401298E-45;
function Camera(width, height) {
    this.cameraPosition = [0, 0, 15];
    this.cameraTarget = [0, 0, 0];
    this.cameraUpVector = [0, 1, 0];
    this.width = width;
    this.height = height;
    this.aspectRatio = this.width / this.height;
    this.view = CreateLookAt(this.cameraPosition, this.cameraTarget, this.cameraUpVector);
    this.projection = CreatePerspectiveFieldOfView(Math.PI / 4, this.aspectRatio, 1, 1000);
    this.viewproj = Multiply(this.view, this.projection);
}

Camera.prototype.GetPosition = function () {
    return this.cameraPosition;
};

Camera.prototype.ChangePerspectiveFieldOfView = function (fieldOfView) {
    this.projection = fieldOfView;
    this.viewproj = Multiply(this.view, this.projection);
};

Camera.prototype.ChangeAspectRatio = function (aspectRatio) {
    this.aspectRatio = aspectRatio;
    this.projection = CreatePerspectiveFieldOfView(Math.PI / 4, this.aspectRatio, 1, 1000);
    this.viewproj = Multiply(this.view, this.projection);
};

Camera.prototype.ChangePerspectiveFieldOfView = function (fieldOfView, aspectRatio, nearPlaneDistance, farPlaneDistance) {
    this.projection = CreatePerspectiveFieldOfView(fieldOfView, aspectRatio, nearPlaneDistance, farPlaneDistance);
    this.viewproj = Multiply(this.view, this.projection);
};

Camera.prototype.ChangeCameraPosition = function (position) {
    this.cameraPosition = position;
    this.ChangeViewProj();
};

Camera.prototype.ChangeCameraTarget = function (target) {
    this.cameraTarget = target;
    this.ChangeViewProj();
};

Camera.prototype.ChangeCameraUpVector = function (upVector) {
    this.cameraUpVector = upVector;
    this.ChangeViewProj();
};

Camera.prototype.ChangeLookAt = function (cameraPosition, cameraTarget, cameraUpVector) {
    this.cameraPosition = cameraPosition;
    this.cameraTarget = cameraTarget;
    this.cameraUpVector = cameraUpVector;
    this.ChangeViewProj();
};

Camera.prototype.ChangeViewProj = function () {
    this.view = CreateLookAt(this.cameraPosition, this.cameraTarget, this.cameraUpVector);
    this.viewproj = Multiply(this.view, this.projection);
};

Camera.prototype.WithinEpsilon = function (a, b) {
    var num = a - b;
    return (-EPSILON <= num) && (num <= EPSILON);
};

Camera.prototype.Unproject = function (source, view, projection, world) {
    var minz = 0;
    var maxz = 1;

    var matrix = Multiply(Multiply(world, view), projection);
    matrix.Invert();
    source[0] = (((source[0]) / (this.width)) * 2) - 1;
    source[1] = -((((source[1]) / (this.height)) * 2) - 1);
    source[2] = (source[2] - minz) / (maxz - minz);
    var vector = TransformV3Matrix(source, matrix);
    var vector4 = [vector[0], vector[1], vector[2], 1];
    var a = (((source[0] * matrix.M14) + (source[1] * matrix.M24)) + (source[2] * matrix.M34)) + matrix.M44;
    if (!this.WithinEpsilon(a, 1)) {
        vector4.Divide(a);
    }
    return vector4;
};

Camera.prototype.RotateCamera = function (anglex, angley, radio) {
    var v = [Math.cos(anglex), Math.sin(angley), Math.sin(anglex) - Math.cos(angley)];

    v.Normalize();

    var position = [v[0] * radio, v[1] * radio, v[2] * radio];
    this.ChangeCameraPosition(position);
};

/*
 * 3D ENGINE - CAMERA
 *
 * Copyright (c) 2012 Plain Concepts (http://www.plainconcepts.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/
 */

function SphereCamera(width, height) {
    this.cameraPosition = [0, 0, 15];
    this.cameraTarget = [0, 0, 0];
    this.cameraUpVector = [0, 1, 0];
    this.size = [width, height];
    this.offset = [0, 0];
    this.aspectRatio = width / height;
    this.view = CreateLookAt(this.cameraPosition, this.cameraTarget, this.cameraUpVector);
    this.projection = CreatePerspectiveFieldOfView(Math.PI / 3, this.aspectRatio, 1, 1000);
    this.viewproj = Multiply(this.view, this.projection);
    this.downPosition = [0, 0, 0];
    this.currentPosition = [0, 0, 0];
    this.radius = 0.9;
    this.qNow = new Quaternion().Identity();
    this.qDown = new Quaternion().Identity();
    this.isDraggin = false;
    this.position = [0, 0, 15];
    this.hasDragged = false;
    this.dragThreshold = 5;
    this.isDragThresholdEnabled = false;
}
SphereCamera.prototype.resetCamera = function () {
    this.qNow = new Quaternion().Identity();
    this.qDown = new Quaternion().Identity();
    this.downPosition = [0, 0, 0];
    this.position = [0, 0, 15];
};

SphereCamera.prototype.ChangeFieldOfView = function (fieldOfView) {
    this.aspectRatio = this.aspectRatio;
    this.projection = CreatePerspectiveFieldOfView(Math.PI / 4, this.aspectRatio, 1, 1000);
    this.viewproj = Multiply(this.view, this.projection);
};

SphereCamera.prototype.ChangeAspectRatio = function (aspectRatio) {
    this.aspectRatio = aspectRatio;
    this.projection = CreatePerspectiveFieldOfView(Math.PI / 4, this.aspectRatio, 1, 1000);
    this.viewproj = Multiply(this.view, this.projection);
};

SphereCamera.prototype.ChangePerspectiveFieldOfView = function (fieldOfView, aspectRatio, nearPlaneDistance, farPlaneDistance) {
    this.projection = CreatePerspectiveFieldOfView(fieldOfView, aspectRatio, nearPlaneDistance, farPlaneDistance);
    this.viewproj = Multiply(this.view, this.projection);
};

SphereCamera.prototype.ChangeCameraPosition = function (position) {
    this.cameraPosition = position;
    this.position = position;
    this.ChangeViewProj();
};

SphereCamera.prototype.ChangeCameraTarget = function (target) {
    this.cameraTarget = target;
    this.ChangeViewProj();
};

SphereCamera.prototype.ChangeCameraUpVector = function (upVector) {
    this.cameraUpVector = upVector;
    this.ChangeViewProj();
};

SphereCamera.prototype.ChangeLookAt = function (cameraPosition, cameraTarget, cameraUpVector) {
    this.cameraPosition = cameraPosition;
    this.cameraTarget = cameraTarget;
    this.cameraUpVector = cameraUpVector;
    this.ChangeViewProj();
};

SphereCamera.prototype.ChangeViewProj = function () {
    this.view = CreateLookAt(this.cameraPosition, this.cameraTarget, this.cameraUpVector);
    this.viewproj = Multiply(this.view, this.projection);
};

SphereCamera.prototype.WithinEpsilon = function (a, b) {
    var num = a - b;
    return (-EPSILON <= num) && (num <= EPSILON);
};

SphereCamera.prototype.Unproject = function (source, view, projection, world) {
    var minz = 0;
    var maxz = 1;

    var matrix = Multiply(Multiply(world, view), projection);
    matrix.Invert();

    source[0] = (((source[0]) / (this.size[0])) * 2) - 1;
    source[1] = -((((source[1]) / (this.size[1])) * 2) - 1);
    source[2] = (source[2] - minz) / (maxz - minz);
    var vector = TransformV3Matrix(source, matrix);
    var vector4 = [vector[0], vector[1], vector[2], 1];
    var position = matrix.position;
    var a = (((source[0] * position[3]) + (source[1] * position[7])) + (source[2] * position[11])) + position[15];
    if (!this.WithinEpsilon(a, 1)) {
        vector4.Divide(a);
    }
    return vector4;
};

SphereCamera.prototype.GetViewMatrix = function () {
    var rot = CreateFromQuaternion(this.qNow);
    rot.Invert();
    this.position = TransformV3Matrix(this.cameraPosition, rot);
    return CreateLookAt(this.position, this.cameraTarget, TransformV3Matrix(this.cameraUpVector, rot));
};

SphereCamera.prototype.GetPosition = function () {
    return this.position;
};

SphereCamera.prototype.ScreenToVector = function (screenX, screenY) {
    var offset = this.offset;
    var size = this.size;
    var radius = this.radius;
    var x = (screenX - offset[0] - size[0] / 2.0) / (radius * size[0] / 2.0);
    var y = (screenY - offset[1] - size[1] / 2.0) / (radius * size[1] / 2.0);

    var z = 0.0;
    var mag = x * x + y * y;

    if (mag > 1.0) {
        var scale = (1.0 / Math.sqrt(mag));
        x *= scale;
        y *= scale;
    }
    else
        z = Math.sqrt(1.0 - mag);

    return [x, -y, z];
};

SphereCamera.prototype.QuatFromBallPoints = function (from, to) {
    var dot = DotV3(from, to);
    var qPart = CrossV3(from, to);
    return [qPart[0], qPart[1], qPart[2], dot];
};



SphereCamera.prototype.OnRotateCamera = function (eventType, position) {
    if (eventType == "mousedown" || eventType == "MSPointerDown" || eventType == "touchdown") {
        this.isDraggin = true;
        this.hasDragged = false;
        this.qDown = [this.qNow[0], this.qNow[1], this.qNow[2], this.qNow[3]];
        this.downPosition = this.ScreenToVector(position.x, position.y);
        this.downPosition2D = position;
    } else if (eventType == "mouseup" || eventType == "MSPointerUp" || eventType == "touchup" || eventType == "mouseout") {
        this.isDraggin = false;
    }

    if ((eventType == "mousemove" || eventType == "MSPointerMove" || eventType == "touchmove") && this.isDraggin) {
        if (this.isDragThresholdEnabled) {
            var diff = { x: this.downPosition2D.x - position.x, y: this.downPosition2D.y - position.y };
            if (Math.abs(diff.x) < this.dragThreshold || Math.abs(diff.y) < this.dragThreshold) {
                this.hasDragged = false;
            }
            else {
                this.hasDragged = true;
            }
        }
        else {
            this.hasDragged = true;
        }
        this.currentPosition2D = position;
        this.currentPosition = this.ScreenToVector(position.x, position.y);
        this.qNow = QuaternionProduct(this.QuatFromBallPoints(this.downPosition, this.currentPosition), this.qDown);
        this.view = this.GetViewMatrix();
        this.viewproj = Multiply(this.view, this.projection);
    }
    return this.isDraggin;
};

function Quaternion(x, y, z, w) {
    this[0] = x;
    this[1] = y;
    this[2] = z;
    this[3] = w;
}

Quaternion.prototype.Identity = function () {
    return new Quaternion(0, 0, 0, 1);

};

function QuaternionProduct(quaternion1, quaternion2) {
    var quaternion = new Quaternion();
    var x = quaternion1[0];
    var y = quaternion1[1];
    var z = quaternion1[2];
    var w = quaternion1[3];
    var num4 = quaternion2[0];
    var num3 = quaternion2[1];
    var num2 = quaternion2[2];
    var num = quaternion2[3];
    var num12 = (y * num2) - (z * num3);
    var num11 = (z * num4) - (x * num2);
    var num10 = (x * num3) - (y * num4);
    var num9 = ((x * num4) + (y * num3)) + (z * num2);
    quaternion[0] = ((x * num) + (num4 * w)) + num12;
    quaternion[1] = ((y * num) + (num3 * w)) + num11;
    quaternion[2] = ((z * num) + (num2 * w)) + num10;
    quaternion[3] = (w * num) - num9;
    return quaternion;
}

/*
 * 3D ENGINE - MODEL
 *
 * Copyright (c) 2012 Plain Concepts (http://www.plainconcepts.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/
 */

function Point3D(x, y, z) {
    this.v3D = [x, y, z, 1];
    this.v2D = [];
}

function Model(id) {
    this.id = id;
    this.vertices = new Array();
    this.index = new Array();
    this.poligons = new Array();
    this.colors = new Array();
    this.position = [0, 0, 0];
    this.rotation = [0, 0, 0];
    this.scale = [1, 1, 1];
    this.backfaceCulling = true;
    this.hasShadow = false;
    var world = new Matrix();
    world.MatrixIdentity();
    this.world = world;
    this.refreshedBoudingBox = false;
    this.boundingBox = new BoundingBox();
    this.debugLines = false;
    this.hasIllumination = false;
    this.color = [0, 0, 0, 1];
    this.borderColor = [0, 0, 0, 1];
}

Model.prototype.ChangeColor = function (fillColor, borderColor) {
    this.color = fillColor;
    this.borderColor = borderColor;
    this.UpdateColor();
};

Model.prototype.UpdateColor = function () {
    var c = this.color;
    var v = this.borderColor;
    this.strokeColor = rgba + v[0]+ comma + v[1]+ comma + v[2] + comma + v[3] + close;
    this.fillColor = rgba + c[0] + comma + c[1] + comma + c[2] + comma + c[3] + close;
};

Model.prototype.AddVertex = function (x, y, z) {
    var position = this.vertices.length;
    this.vertices[position] = new Point3D(x, y, z);
    return position;
};

Model.prototype.AddTriangle = function (p1, p2, p3) {
    var position = this.index.length;
    this.index[position] = p1;
    this.index[position + 1] = p2;
    this.index[position + 2] = p3;
};

Model.prototype.AddPolygon = function (poligon) {
    var position = this.poligons.length;
    var vertices = new Array();
    var l = poligon.length;
    for (var i = 0; i < l; i++) {
        vertices[i] = poligon[i];
    }
    this.poligons[position] = vertices;
};

Model.prototype.AddColor = function (color) {
    var position = this.colors.length;
    this.colors[position] = color;
};

Model.prototype.RefreshWorld = function () {
    var rotationMatrix = CreateFromYawPitchRoll(this.rotation[1], this.rotation[0], this.rotation[2]);
    var scaleMatrix = new Matrix();
    var translationMatrix = new Matrix();
    scaleMatrix.CreateScale(this.scale[0], this.scale[1], this.scale[2]);

    translationMatrix.CreateTranslation(this.position);

    this.world = Multiply(scaleMatrix, translationMatrix);
    this.world = Multiply(rotationMatrix, this.world);
    this.refreshedBoudingBox = false;
};

Model.prototype.ChangePosition = function (x, y, z) {
    this.position[0] = x;
    this.position[1] = y;
    this.position[2] = z;
    this.RefreshWorld();
};

Model.prototype.ChangeRotation = function (x, y, z) {
    this.rotation[0] = x;
    this.rotation[1] = y;
    this.rotation[2] = z;
    this.RefreshWorld();
};

Model.prototype.ChangeScale = function (x, y, z) {
    this.scale[0] = x;
    this.scale[1] = y;
    this.scale[2] = z;
    this.RefreshWorld();
};

Model.prototype.RefreshBoundingBox = function (vectors) {
    if (!this.refreshedBoudingBox) {
        var vector3 = [];
        vector3[0] = Number.MAX_VALUE;
        vector3[1] = Number.MAX_VALUE;
        vector3[2] = Number.MAX_VALUE;

        var vector2 = [];
        vector2[0] = -Number.MAX_VALUE;
        vector2[1] = -Number.MAX_VALUE;
        vector2[2] = -Number.MAX_VALUE;
        var l = vectors.length;
        for (var i = 0; i < l; i++) {
            var vector4 = vectors[i];
            vector3 = Min(vector3, vector4);
            vector2 = Max(vector2, vector4);
        }

        this.boundingBox.min = vector3;
        this.boundingBox.max = vector2;
        this.refreshedBoudingBox = true;
    }
};

Model.prototype.GetDistanceToCamera = function (vector) {
    return Math.sqrt(((vector[0] - this.position[0]) * (vector[0] - this.position[0])) + ((vector[1] - this.position[1]) * (vector[1] - this.position[1])) + ((vector[2] - this.position[2]) * (vector[2] - this.position[2])));
};

function GroupModel(id) {
    this.id = id;
    this.models = new Array();
    var world = new Matrix();
    world.MatrixIdentity();
    this.world = world;
    this.position = [0, 0, 0];
    this.rotation = [0, 0, 0];
    this.scale = [1, 1, 1];
    this.boundingBox = new BoundingBox();
    this.refreshedBoudingBox = false;
}

GroupModel.prototype.AddModel = function (model) {
    this.models[this.models.length] = model;
};

GroupModel.prototype.ChangePosition = function (x, y, z) {
    this.position[0] = x;
    this.position[1] = y;
    this.position[2] = z;
    this.RefreshWorld();
};

GroupModel.prototype.ChangeRotation = function (x, y, z) {
    this.rotation[0] = x;
    this.rotation[1] = y;
    this.rotation[2] = z;
    this.RefreshWorld();
};

GroupModel.prototype.ChangeScale = function (x, y, z) {
    this.scale[0] = x;
    this.scale[1] = y;
    this.scale[2] = z;
    this.RefreshWorld();
};

GroupModel.prototype.RefreshWorld = function () {
    var rotationMatrix = CreateFromYawPitchRoll(this.rotation[1], this.rotation[0], this.rotation[2]);
    var scaleMatrix = new Matrix();
    var translationMatrix = new Matrix();
    scaleMatrix.CreateScale(this.scale[0], this.scale[1], this.scale[2]);

    translationMatrix.CreateTranslation(this.position);

    this.world = Multiply(scaleMatrix, translationMatrix);
    this.world = Multiply(rotationMatrix, this.world);

    var models = this.models;
    var l = models.length;
    for (var i = 0; i < l; i++) {
        models[i].RefreshWorld();
        var world = models[i].world;
        models[i].world = Multiply(models[i].world, this.world);
    }
    this.refreshedBoudingBox = false;
};

GroupModel.prototype.RefreshBoundingBox = function (vectors) {
    if (!this.refreshedBoudingBox) {
        var vector3 = [];
        vector3[0] = Number.MAX_VALUE;
        vector3[1] = Number.MAX_VALUE;
        vector3[2] = Number.MAX_VALUE;

        var vector2 = [];
        vector2[0] = -Number.MAX_VALUE;
        vector2[1] = -Number.MAX_VALUE;
        vector2[2] = -Number.MAX_VALUE;

        var models = this.models;
        var l = vectors.length;
        for (var i = 0; i < l; i++) {
            var vector4 = vectors[i];
            vector3 = Min(vector3, vector4);
            vector2 = Max(vector2, vector4);
        }

        this.boundingBox.min = vector3;
        this.boundingBox.max = vector2;
        this.refreshedBoudingBox = true;
    }
};

GroupModel.prototype.GetDistanceToCamera = function (vector) {
    return Math.sqrt(((vector[0] - this.position[0]) * (vector[0] - this.position[0])) + ((vector[1] - this.position[1]) * (vector[1] - this.position[1])) + ((vector[2] - this.position[2]) * (vector[2] - this.position[2])));
};

/*
 * 3D ENGINE - BOUNDING BOX
 *
 * Copyright (c) 2012 Plain Concepts (http://www.plainconcepts.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/
 */

var svgNS = "http://www.w3.org/2000/svg";

function Scene(canvas) {
    this.models = new Array();
    this.groupModels = new Array();
    this.camera = new Camera(canvas.width, canvas.height);
    this.light = [150, 150, 150];
    this.light.Invert();

    this.ambientColor = [47, 79, 79];
    this.shadowMatrix = CreateShadowMatrix([0, 1, 0], this.light, 0);
    this.light.Normalize();
    this.context = null;
    try {
        this.context = canvas.getContext("2d");
    } catch (e) {
        alert("Canvas not valid");
    }

    this.showDebugLines = false;
    this.width = canvas.width;
    this.height = canvas.height;
    this.POINTS = "POINTS";
    this.WIRE = "WIRE";
    this.SOLID = "SOLID";
}

Scene.prototype.AddCamera = function (camera) {
    this.camera = camera;
};

Scene.prototype.AddModel = function (model) {
    var position = this.models.length;
    this.models[position] = model;
    return position;
};

Scene.prototype.AddGroupModel = function (groupModel) {
    var position = this.groupModels.length;
    this.groupModels[position] = groupModel;
    return position;
};

Scene.prototype.ChangeLight = function (x, y, z) {
    this.light[0] = x;
    this.light[1] = y;
    this.light[2] = z;
    this.light.Invert();

    this.shadowMatrix = CreateShadowMatrix([0, 1, 0], this.light, 0);
    this.light.Normalize();
};

Scene.prototype.RenderDebugLines = function (model) {
    var corners = model.boundingBox.GetConers();
    var vcorners = new Array();
    var l = vcorners.length;
    for (var j = 0; j < l; j++) {
        vcorners[j] = Convert(corners[j], this.camera.viewproj, this.width, this.height);
    }

    this.context.beginPath();
    this.context.strokeStyle = "black";
    this.context.moveTo(vcorners[0][0], vcorners[0][1]);
    this.context.lineTo(vcorners[1][0], vcorners[1][1]);
    this.context.lineTo(vcorners[2][0], vcorners[2][1]);
    this.context.lineTo(vcorners[3][0], vcorners[3][1]);
    this.context.lineTo(vcorners[0][0], vcorners[0][1]);

    this.context.lineTo(vcorners[4][0], vcorners[4][1]);
    this.context.lineTo(vcorners[5][0], vcorners[5][1]);
    this.context.lineTo(vcorners[6][0], vcorners[6][1]);
    this.context.lineTo(vcorners[7][0], vcorners[7][1]);
    this.context.lineTo(vcorners[4][0], vcorners[4][1]);

    this.context.moveTo(vcorners[1][0], vcorners[1][1]);
    this.context.lineTo(vcorners[5][0], vcorners[5][1]);

    this.context.moveTo(vcorners[2][0], vcorners[2][1]);
    this.context.lineTo(vcorners[6][0], vcorners[6][1]);

    this.context.moveTo(vcorners[3][0], vcorners[3][1]);
    this.context.lineTo(vcorners[7][0], vcorners[7][1]);
    this.context.stroke();
    this.context.closePath();
};

function SortModels(preSortModels) {
    var result;
    if (preSortModels.length <= 1) {
        return preSortModels;
    }
    var pivot = Math.floor(preSortModels / 2);
    var less = [];
    var greater = [];
    var pivotElem = preSortModels.splice(pivot, 1);
    for (var x = 0; x < preSortModels.length; x++) {
        if (preSortModels[x].d <= pivotElem[0].d) {
            less.push(preSortModels[x]);
        } else {
            greater.push(preSortModels[x]);
        }
    }
    return [].concat(SortModels(greater), pivotElem, SortModels(less));
}

Scene.prototype.Render = function (type) {
    this.ClearScreen();
    var cp = this.camera.GetPosition();
    var models = this.models;
    var groupModels = this.groupModels;
    var preSortModels = new Array();
    var preSortGroupModels = new Array();
    var sortModels;
    var sortGroupModes;
    var l = models.length;
    for (var i = 0; i < l; i++) {
        preSortModels[i] = { d: (models[i].GetDistanceToCamera(cp) * 1000), model: models[i] };
    }

    l = groupModels.length;
    for (var i = 0; i < l; i++) {
        preSortGroupModels[i] = { d: groupModels[i].GetDistanceToCamera(cp), groupModel: groupModels[i] };
    }

    sortModels = SortModels(preSortModels);
    sortGroupModes = SortModels(preSortGroupModels);

    l = sortModels.length;
    for (var i = 0; i < sortModels.length; i++) {
        var model = sortModels[i].model;
        var worldviewproj = Multiply(model.world, this.camera.viewproj);
        var vertices = new Array();
        var ll = model.vertices.length;
        for (var j = 0; j < ll; j++) {
            vertices[j] = TransformV4Matrix(model.vertices[j].v3D, model.world);
        }

        model.RefreshBoundingBox(vertices);

        if (this.showDebugLines) {
            this.RenderDebugLines(model);
        }
        switch (type) {
            case this.POINTS:
                this.DrawPoints(vertices);
                break;
            case this.WIRE:
                this.context.beginPath();
                this.DrawWire(vertices, model);
                this.context.closePath();
                break;
            case this.SOLID:
                this.DrawShadow(vertices, model);
                this.DrawSolid(vertices, model);
                this.DrawWire(vertices, model);
                break;
            default:
                this.DrawPoints(vertices);
                break;
        }
    }

    l = sortGroupModes.length;
    for (var i = 0; i < l; i++) {
        var groupModel = sortGroupModes[i].groupModel;
        var models = groupModel.models;
        var modelsVertices = new Array();
        var totalVertices = new Array();
        var ll = models.length;
        for (var k = 0; k < ll; k++) {
            var model = models[k];
            var worldviewproj = Multiply(model.world, this.camera.viewproj);
            var vertices = new Array();
            for (var j = 0; j < model.vertices.length; j++) {
                vertices[j] = TransformV4Matrix(model.vertices[j].v3D, model.world);
                totalVertices[totalVertices.length] = vertices[j];
            }
            modelsVertices[k] = vertices;
        }

        groupModel.RefreshBoundingBox(totalVertices);
        if (this.showDebugLines) {
            this.RenderDebugLines(groupModel);
            type = this.WIRE;
        }

        for (var k = 0; k < ll; k++) {
            switch (type) {
                case this.POINTS:
                    this.DrawPoints(vertices);
                    break;
                case this.WIRE:
                    this.context.beginPath();
                    this.context.strokeStyle = "black";
                    this.context.beginPath();
                    this.DrawWire(modelsVertices[k], models[k]);
                    this.context.closePath();
                    break;
                case this.SOLID:
                    this.DrawShadow(modelsVertices[k], models[k]);
                    this.DrawSolid(modelsVertices[k], models[k]);
                    this.DrawWire(modelsVertices[k], models[k]);
                    break;
                default:
                    this.DrawPoints(vertices);
                    break;
            }
        }
    }
};

Scene.prototype.ClearScreen = function () {
    this.context.clearRect(0, 0, this.width, this.height);
};

Scene.prototype.DrawPoints = function (vertices) {
    this.context.beginPath();
    this.context.strokeStyle = "black";
    for (var i = 0; i < vertices.length; i++) {
        this.context.moveTo(vertices[i][0], vertices[i][1]);
        this.context.lineTo(vertices[i][0] + 1, vertices[i][1] + 1);
    }
    this.context.stroke();
    this.context.closePath();
};

Scene.prototype.DrawWire = function (vertices, model) {
    var indexes = model.index;
    var pc = this.camera.GetPosition();
    var borderColor = model.borderColor;
    this.context.strokeStyle = rgba + borderColor[0]+ comma +borderColor[1]+ comma +borderColor[2]+ comma +borderColor[3] + close;
    for (var i = 0; i < indexes.length / 3; i++) {
        var index = i * 3;

        var p1 = vertices[indexes[index]];
        var p2 = vertices[indexes[index + 1]];
        var p3 = vertices[indexes[index + 2]];

        var v1 = SubstractV3(p1, p2);
        var v2 = SubstractV3(p3, p2);

        var n = CrossV3(v1, v2);

        var c = SubstractV3(pc, p1);

        var tita = DotV3(c, n);

        if (!model.backfaceCulling || tita < 0) {
            var vertex1 = Convert(p1, this.camera.viewproj, this.width, this.height);
            var vertex2 = Convert(p2, this.camera.viewproj, this.width, this.height);
            var vertex3 = Convert(p3, this.camera.viewproj, this.width, this.height);
            this.context.moveTo(vertex1[0], vertex1[1]);
            this.context.lineTo(vertex2[0], vertex2[1]);
            this.context.lineTo(vertex3[0], vertex3[1]);
            this.context.lineTo(vertex1[0], vertex1[1]);
        }

    }

    var poligons = model.poligons;
    var l = poligons.length;
    for (var i = 0; i < l; i++) {
        var poligon = poligons[i];
        var index = 0;
        var p1 = vertices[poligon[index]];
        var p2 = vertices[poligon[index + 1]];
        var p3 = vertices[poligon[index + 2]];

        var v1 = SubstractV3(p1, p2);
        var v2 = SubstractV3(p3, p2);

        var n = CrossV3(v1, v2);

        var c = SubstractV3(pc, p1);

        var tita = DotV3(c, n);

        if (!model.backfaceCulling || tita < 0) {
            var orig = Convert(vertices[poligon[0]], this.camera.viewproj, this.width, this.height);
            this.context.moveTo(orig[0], orig[1]);
            var ll = poligon.length;
            for (var j = 1; j < ll; j++) {
                var aux = Convert(vertices[poligon[j]], this.camera.viewproj, this.width, this.height);
                this.context.lineTo(aux[0], aux[1]);
            }
            this.context.lineTo(orig[0], orig[1]);
        }
    }
    this.context.stroke();
};

Scene.prototype.DrawSolid = function (vertices, model) {
    var ambientColor = this.ambientColor;
    var context = this.context;
    var indexes = model.index;
    var pc = this.camera.GetPosition();
    var viewProj = this.camera.viewproj;
    var hasIllumination = model.hasIllumination;
    if (!hasIllumination) {
        this.context.fillStyle = model.fillColor;
        this.context.strokeStyle = model.strokeColor;
    }
    var l = indexes.length / 3;
    var w = this.width;
    var h = this.height;
    for (var i = indexes.length / 3; i--;) {
        //for (var i = 0; i < l; i++) {
        var index = i * 3;

        var p1 = vertices[indexes[index]];
        var p2 = vertices[indexes[index + 1]];
        var p3 = vertices[indexes[index + 2]];

        var v1 = SubstractV3(p1, p2);
        var v2 = SubstractV3(p3, p2);

        var n = CrossV3(v1, v2);
        n.Normalize();
        var c = SubstractV3(pc, p1);

        var tita = DotV3(c, n);

        if (!model.backfaceCulling || tita < 0) {
            if (hasIllumination) {
                var modelColor = model.color;
                var modelColorR = modelColor[0];
                var modelColorG = modelColor[1];
                var modelColorB = modelColor[2];
                var modelColorA = modelColor[3];
                var borderColor = model.borderColor;
                var sat = DotV3(this.light, n);
                if (sat < 0) {
                    sat = 0;
                } else if (sat > 1) {
                    sat = 1;
                }
                var r = sat * modelColorR + this.ambientColor[0];
                var g = sat * modelColorG + this.ambientColor[1];
                var b = sat * modelColorB + this.ambientColor[2];
                /*
                 r = Math.floor(r);
                 g = Math.floor(g);
                 b = Math.floor(b);*/
                r = r|r;
                g = g|g;
                b = b|b;
                var color = rgba + r + comma + g + comma + b + comma;
                this.context.fillStyle = color + modelColorA + close;
                this.context.strokeStyle = color + borderColor[3] + close;
                //this.context.fillStyle = ["rgba(", r, ",", g, ",", b, ",", modelColorA, ")"].join();
                //this.context.strokeStyle = ["rgba(", r, ",", g, ",", b, ",", borderColor[3], ")"].join();
            }
            context.beginPath();

            var vertex1 = Convert(p1, viewProj, w, h);
            var vertex2 = Convert(p2, viewProj, w, h);
            var vertex3 = Convert(p3, viewProj, w, h);
            var v10 = Math.floor(vertex1[0]);
            var v11 = Math.floor(vertex1[1]);
            context.moveTo(v10, v11);
            context.lineTo(Math.floor(vertex2[0]), Math.floor(vertex2[1]));
            context.lineTo(Math.floor(vertex3[0]), Math.floor(vertex3[1]));
            context.lineTo(v10, v11);
            context.closePath();
            context.fill();
        }
    }

    var poligons = model.poligons;
    var l = poligons.length;
    for (var i = poligons.length; i--;) {
        var poligon = poligons[i];
        var index = 0;
        var p1 = vertices[poligon[index]];
        var p2 = vertices[poligon[index + 1]];
        var p3 = vertices[poligon[index + 2]];

        var v1 = SubstractV3(p1, p2);
        var v2 = SubstractV3(p3, p2);

        var n = CrossV3(v1, v2);

        var c = SubstractV3(pc, p1);

        var tita = DotV3(c, n);

        if (!model.backfaceCulling || tita < 0) {
            if (hasIllumination) {
                var sat = DotV3(this.light, n);
                if (sat < 0) {
                    sat = 0;
                } else if (sat > 1) {
                    sat = 1;
                }
                var a = this.ambientColor;
                var r = sat * modelColorR + a[0];
                var g = sat * modelColorG + a[1];
                var b = sat * modelColorB + a[2];

                r = r|r;
                g = g|g;
                b = b|b;

                var color = rgb + r + comma + g + comma + b+ close;
                context.fillStyle = color;
                context.strokeStyle = color;

                //context.fillStyle = ["rgb(", r, ",", g, ",", b, ")"].join();
                //context.strokeStyle = ["rgb(", r, ",", g, ",", b, ")"].join();
            }

            context.beginPath();
            var orig = Convert(vertices[poligon[0]], viewProj, w, h);
            context.moveTo(orig[0], orig[1]);
            var ll = poligon.length;
            for (var j = 1; j < ll; j++) {
                var aux = Convert(vertices[poligon[j]], viewProj, w, h);
                context.lineTo(aux[0], aux[1]);
            }
            context.lineTo(orig[0], orig[1]);
            context.closePath();
            context.fill();
        }
    }
};

Scene.prototype.DrawShadow = function (vertices, model) {
    if (model.hasShadow) {
        var shadowMatrix = Multiply(this.shadowMatrix, this.camera.viewproj);
        this.context.fillStyle = "rgb(0,0,0)";
        var indexes = model.index;
        var pc = this.camera.GetPosition();
        for (var i = 0; i < indexes.length / 3; i++) {
            var index = i * 3;

            var p1 = vertices[indexes[index]];
            var p2 = vertices[indexes[index + 1]];
            var p3 = vertices[indexes[index + 2]];
            this.context.beginPath();

            var vertex1 = Convert(p1, shadowMatrix, this.width, this.height);
            var vertex2 = Convert(p2, shadowMatrix, this.width, this.height);
            var vertex3 = Convert(p3, shadowMatrix, this.width, this.height);
            this.context.moveTo(Math.floor(vertex1[0]), Math.floor(vertex1[1]));
            this.context.lineTo(Math.floor(vertex2[0]), Math.floor(vertex2[1]));
            this.context.lineTo(Math.floor(vertex3[0]), Math.floor(vertex3[1]));
            this.context.lineTo(Math.floor(vertex1[0]), Math.floor(vertex1[1]));
            this.context.closePath();
            this.context.fill();

        }

        var poligons = model.poligons;
        var l = poligons.length;
        for (var i = 0; i < l; i++) {
            var poligon = poligons[i];
            var index = 0;
            var p1 = vertices[poligon[index]];
            var p2 = vertices[poligon[index + 1]];
            var p3 = vertices[poligon[index + 2]];
            this.context.beginPath();
            var orig = Convert(vertices[poligon[0]], shadowMatrix, this.width, this.height);
            this.context.moveTo(orig[0], orig[1]);
            var ll = poligon.length;
            for (var j = 1; j < ll; j++) {
                var aux = Convert(vertices[poligon[j]], shadowMatrix, this.width, this.height);
                this.context.lineTo(aux[0], aux[1]);
            }
            this.context.lineTo(orig[0], orig[1]);
            this.context.closePath();
            this.context.fill();
        }
    }
};

Scene.prototype.GetModelInMap = function (position) {
    var nearSource = [position[0], position[1], 0];
    var farSource = [position[0], position[1], 1];

    var camera = this.camera;

    var identity = new Matrix();
    identity.MatrixIdentity();

    var nearPoint = camera.Unproject(nearSource, camera.view, camera.projection, identity);

    var farPoint = camera.Unproject(farSource, camera.view, camera.projection, identity);

    var direction = SubstractV4(farPoint, nearPoint);

    direction.Normalize();

    var r = new Ray(nearPoint, direction);
    var minDist = Number.MAX_VALUE;
    var dist;
    var found = null;
    var l = this.model.length;
    for (var i = 0; i < l; i++) {
        var model = this.models[i];
        dist = model.boundingBox.Intersects(r);

        if (dist != null) {
            if (dist < minDist) {
                minDist = dist;
                found = model;
            }
        }
    }

    return found;
};

Scene.prototype.GetGroupModelInMap = function (position) {
    var nearSource = [position[0], position[1], 0];
    var farSource = [position[0], position[1], 1];

    var camera = this.camera;

    var identity = new Matrix();
    identity.MatrixIdentity();

    var nearPoint = camera.Unproject(nearSource, camera.view, camera.projection, identity);

    var farPoint = camera.Unproject(farSource, camera.view, camera.projection, identity);

    var direction = SubstractV4(farPoint, nearPoint);

    direction.Normalize();

    var r = new Ray(nearPoint, direction);
    var minDist = Number.MAX_VALUE;
    var dist;
    var found = null;
    var l = this.groupModels.length;
    for (var i = 0; i < l; i++) {
        var model = this.groupModels[i];
        dist = model.boundingBox.Intersects(r);

        if (dist != null) {
            if (dist < minDist) {
                minDist = dist;
                found = model;
            }
        }
    }

    return found;
};

function GetCube() {
    var puzzlecube = new Model();
    puzzlecube.AddVertex(39.3701, -39.3701, 39.3701);
    puzzlecube.AddVertex(39.3701, 39.3701, 39.3701);
    puzzlecube.AddVertex(-39.3701, 39.3701, 39.3701);
    puzzlecube.AddVertex(-39.3701, -39.3701, 39.3701);
    puzzlecube.AddVertex(39.3701, -39.3701, -39.3701);
    puzzlecube.AddVertex(39.3701, 39.3701, -39.3701);
    puzzlecube.AddVertex(-39.3701, -39.3701, -39.3701);
    puzzlecube.AddVertex(-39.3701, 39.3701, -39.3701);
    puzzlecube.AddPolygon([0, 1, 2, 3]);
    puzzlecube.AddPolygon([4, 5, 1, 0]);
    puzzlecube.AddPolygon([6, 7, 5, 4]);
    puzzlecube.AddPolygon([3, 2, 7, 6]);
    puzzlecube.AddPolygon([1, 5, 7, 2]);
    puzzlecube.AddPolygon([4, 0, 3, 6]);
    return puzzlecube;
}
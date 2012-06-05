/*
 * WaveJS
 *
 * Copyright (c) 2012 Plain Concepts (http://www.plainconcepts.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 */
"use strict";
var WaveEngineJS = {

    /**
     * Constants to generate color strings
     * @type {String}
     */
    rgba:'rgba(',
    rgb:'rgb(',
    comma:',',
    close:')',

    /**
     * Constan Epsilon
     * @type {Number}
     */
    EPSILON:1.401298E-45,

    /**
     * Create an instance of a 4x4 Matrix
     * @return {WaveEngineJS.Matrix}
     * @this {WaveEngineJS.Matrix}
     * @constructor
     */
    Matrix:function () {
        var that = this;
        this[0] = 0;
        this[1] = 0;
        this[2] = 0;
        this[3] = 0;
        this[4] = 0;
        this[5] = 0;
        this[6] = 0;
        this[7] = 0;
        this[8] = 0;
        this[9] = 0;
        this[10] = 0;
        this[11] = 0;
        this[12] = 0;
        this[13] = 0;
        this[14] = 0;
        this[15] = 0;

        /**
         * Inverts the Matrix
         * @this {WaveEngineJS.Matrix}
         */
        this.invert = function () {
            var num5 = that[0];
            var num4 = that[1];
            var num3 = that[2];
            var num2 = that[3];
            var num9 = that[4];
            var num8 = that[5];
            var num7 = that[6];
            var num6 = that[7];
            var num17 = that[8];
            var num16 = that[9];
            var num15 = that[10];
            var num14 = that[11];
            var num13 = that[12];
            var num12 = that[13];
            var num11 = that[14];
            var num10 = that[15];
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
            that[0] = num39 * num;
            that[4] = num38 * num;
            that[8] = num37 * num;
            that[12] = num36 * num;
            that[1] = -(((num4 * num23) - (num3 * num22)) + (num2 * num21)) * num;
            that[5] = (((num5 * num23) - (num3 * num20)) + (num2 * num19)) * num;
            that[9] = -(((num5 * num22) - (num4 * num20)) + (num2 * num18)) * num;
            that[13] = (((num5 * num21) - (num4 * num19)) + (num3 * num18)) * num;
            var num35 = (num7 * num10) - (num6 * num11);
            var num34 = (num8 * num10) - (num6 * num12);
            var num33 = (num8 * num11) - (num7 * num12);
            var num32 = (num9 * num10) - (num6 * num13);
            var num31 = (num9 * num11) - (num7 * num13);
            var num30 = (num9 * num12) - (num8 * num13);
            that[2] = (((num4 * num35) - (num3 * num34)) + (num2 * num33)) * num;
            that[6] = -(((num5 * num35) - (num3 * num32)) + (num2 * num31)) * num;
            that[10] = (((num5 * num34) - (num4 * num32)) + (num2 * num30)) * num;
            that[14] = -(((num5 * num33) - (num4 * num31)) + (num3 * num30)) * num;
            var num29 = (num7 * num14) - (num6 * num15);
            var num28 = (num8 * num14) - (num6 * num16);
            var num27 = (num8 * num15) - (num7 * num16);
            var num26 = (num9 * num14) - (num6 * num17);
            var num25 = (num9 * num15) - (num7 * num17);
            var num24 = (num9 * num16) - (num8 * num17);
            that[3] = -(((num4 * num29) - (num3 * num28)) + (num2 * num27)) * num;
            that[7] = (((num5 * num29) - (num3 * num26)) + (num2 * num25)) * num;
            that[11] = -(((num5 * num28) - (num4 * num26)) + (num2 * num24)) * num;
            that[15] = (((num5 * num27) - (num4 * num25)) + (num3 * num24)) * num;
        };

        return this;
    },

    /**
     * Creates a 4x4 Identity Matrix
     * @constructor
     * @return {WaveEngineJS.Matrix}
     */
    MatrixIdentity:function () {
        var matrix = new WaveEngineJS.Matrix();
        matrix[0] = 1;
        matrix[1] = 0;
        matrix[2] = 0;
        matrix[3] = 0;
        matrix[4] = 0;
        matrix[5] = 1;
        matrix[6] = 0;
        matrix[7] = 0;
        matrix[8] = 0;
        matrix[9] = 0;
        matrix[10] = 1;
        matrix[11] = 0;
        matrix[12] = 0;
        matrix[13] = 0;
        matrix[14] = 0;
        matrix[15] = 1;
        return matrix;
    },

    /**
     * Creates a 4x4 Translation Matrix
     * @param {Array} vector3 The new position
     * @constructor
     * @return {WaveEngineJS.Matrix}
     */
    createTranslation:function (vector3) {
        var matrix = new WaveEngineJS.Matrix();
        matrix[0] = 1;
        matrix[1] = 0;
        matrix[2] = 0;
        matrix[3] = 0;
        matrix[4] = 0;
        matrix[5] = 1;
        matrix[6] = 0;
        matrix[7] = 0;
        matrix[8] = 0;
        matrix[9] = 0;
        matrix[10] = 1;
        matrix[11] = 0;
        matrix[12] = vector3[0];
        matrix[13] = vector3[1];
        matrix[14] = vector3[2];
        matrix[15] = 1;
        return matrix;
    },

    /**
     * Creates a 4x4 Scale Matrix
     * @param {number} xScale The scale in x-axis
     * @param {number} yScale The scale in y-axis
     * @param {number} zScale The scale in z-axis
     * @constructor
     * @return {WaveEngineJS.Matrix}
     */
    createScale:function (xScale, yScale, zScale) {
        var matrix = new WaveEngineJS.Matrix();
        matrix[0] = xScale;
        matrix[1] = 0;
        matrix[2] = 0;
        matrix[3] = 0;
        matrix[4] = 0;
        matrix[5] = yScale;
        matrix[6] = 0;
        matrix[7] = 0;
        matrix[8] = 0;
        matrix[9] = 0;
        matrix[10] = zScale;
        matrix[11] = 0;
        matrix[12] = 0;
        matrix[13] = 0;
        matrix[14] = 0;
        matrix[15] = 1;
        return matrix;
    },

    /**
     * Creates a Shadow Matrix
     * @param {Array} plane Plane where the shadow will be projected
     * @param {Array} light Light position
     * @param {Number} d Distance to the plane
     * @return {WaveEngineJS.Matrix}
     */
    createShadowMatrix:function (plane, light, d) {
        var matrix = new WaveEngineJS.Matrix(),
            num = ((plane[0] * light[0]) + (plane[1] * light[1])) + (plane[2] * light[2]),
            num5 = -plane[0],
            num4 = -plane[1],
            num3 = -plane[2],
            num2 = -d;

        matrix[0] = (num5 * light[0]) + num;
        matrix[1] = num5 * light[1];
        matrix[2] = num5 * light[2];
        matrix[3] = 0;
        matrix[4] = num4 * light[0];
        matrix[5] = (num4 * light[1]) + num;
        matrix[6] = num4 * light[2];
        matrix[7] = 0;
        matrix[8] = num3 * light[0];
        matrix[9] = num3 * light[1];
        matrix[10] = (num3 * light[2]) + num;
        matrix[11] = 0;
        matrix[12] = num2 * light[0];
        matrix[13] = num2 * light[1];
        matrix[14] = num2 * light[2];
        matrix[15] = num;
        return matrix;
    },

    /**
     * Generates a Perspective Field Of View Matrix
     * @param {Number} fieldOfView
     * @param {Number} aspectRatio
     * @param {Number} nearPlaneDistance
     * @param {Number} farPlaneDistance
     * @constructor
     * @return {WaveEngineJS.Matrix}
     */
    createPerspectiveFieldOfView:function (fieldOfView, aspectRatio, nearPlaneDistance, farPlaneDistance) {
        var matrix = new WaveEngineJS.Matrix();
        var num = 1 / Math.tan(fieldOfView * 0.5);
        var num9 = num / aspectRatio;
        matrix[0] = num9;
        matrix[1] = matrix[2] = matrix[3] = 0;
        matrix[5] = num;
        matrix[4] = matrix[6] = matrix[7] = 0;
        matrix[8] = matrix[9] = 0;
        matrix[10] = farPlaneDistance / (nearPlaneDistance - farPlaneDistance);
        matrix[11] = -1;
        matrix[12] = matrix[13] = matrix[15] = 0;
        matrix[14] = (nearPlaneDistance * farPlaneDistance) / (nearPlaneDistance - farPlaneDistance);
        return matrix;
    },

    /**
     * Creates a View Matrix for the scene
     * @param {Array} cameraPosition Array with the camera position
     * @param {Array} cameraTarget Array with the target position
     * @param {Array} cameraUpVector Array with the camera's vector up
     * @return {WaveEngineJS.Matrix}
     */
    createLookAt:function (cameraPosition, cameraTarget, cameraUpVector) {
        var matrix = new WaveEngineJS.Matrix();
        var vector = WaveEngineJS.substractV3(cameraPosition, cameraTarget);
        WaveEngineJS.normalize(vector);
        var vector2 = WaveEngineJS.crossV3(cameraUpVector, vector);
        WaveEngineJS.normalize(vector2);
        var vector3 = WaveEngineJS.crossV3(vector, vector2);

        matrix[0] = vector2[0];
        matrix[1] = vector3[0];
        matrix[2] = vector[0];
        matrix[3] = 0;
        matrix[4] = vector2[1];
        matrix[5] = vector3[1];
        matrix[6] = vector[1];
        matrix[7] = 0;
        matrix[8] = vector2[2];
        matrix[9] = vector3[2];
        matrix[10] = vector[2];
        matrix[11] = 0;
        matrix[12] = -WaveEngineJS.dotV3(vector2, cameraPosition);
        matrix[13] = -WaveEngineJS.dotV3(vector3, cameraPosition);
        matrix[14] = -WaveEngineJS.dotV3(vector, cameraPosition);
        matrix[15] = 1;
        return matrix;
    },

    /**
     * Creates a 4x4 Matrix from a Quaternion
     * @param {WaveEngineJS.Quaternion} quaternion
     * @return {WaveEngineJS.Matrix}
     */
    createFromQuaternion:function (quaternion) {
        var matrix = new WaveEngineJS.Matrix();
        var num9 = quaternion[0] * quaternion[0];
        var num8 = quaternion[1] * quaternion[1];
        var num7 = quaternion[2] * quaternion[2];
        var num6 = quaternion[0] * quaternion[1];
        var num5 = quaternion[2] * quaternion[3];
        var num4 = quaternion[2] * quaternion[0];
        var num3 = quaternion[1] * quaternion[3];
        var num2 = quaternion[1] * quaternion[2];
        var num = quaternion[0] * quaternion[3];

        matrix[0] = 1 - (2 * (num8 + num7));
        matrix[1] = 2 * (num6 + num5);
        matrix[2] = 2 * (num4 - num3);
        matrix[3] = 0;
        matrix[4] = 2 * (num6 - num5);
        matrix[5] = 1 - (2 * (num7 + num9));
        matrix[6] = 2 * (num2 + num);
        matrix[7] = 0;
        matrix[8] = 2 * (num4 + num3);
        matrix[9] = 2 * (num2 - num);
        matrix[10] = 1 - (2 * (num8 + num9));
        matrix[11] = 0;
        matrix[12] = 0;
        matrix[13] = 0;
        matrix[14] = 0;
        matrix[15] = 1;
        return matrix;
    },

    /**
     * Multiplies two 4x4 Matrix
     * @param {WaveEngineJS.Matrix} matrix1 4x4 Matrix
     * @param {WaveEngineJS.Matrix} matrix2 4x4 Matrix
     * @return {WaveEngineJS.Matrix}
     */
    multiply:function (matrix1, matrix2) {
        var matrix = new WaveEngineJS.Matrix();
        matrix[0] = (((matrix1[0] * matrix2[0]) + (matrix1[1] * matrix2[4])) + (matrix1[2] * matrix2[8])) + (matrix1[3] * matrix2[12]);
        matrix[1] = (((matrix1[0] * matrix2[1]) + (matrix1[1] * matrix2[5])) + (matrix1[2] * matrix2[9])) + (matrix1[3] * matrix2[13]);
        matrix[2] = (((matrix1[0] * matrix2[2]) + (matrix1[1] * matrix2[6])) + (matrix1[2] * matrix2[10])) + (matrix1[3] * matrix2[14]);
        matrix[3] = (((matrix1[0] * matrix2[3]) + (matrix1[1] * matrix2[7])) + (matrix1[2] * matrix2[11])) + (matrix1[3] * matrix2[15]);
        matrix[4] = (((matrix1[4] * matrix2[0]) + (matrix1[5] * matrix2[4])) + (matrix1[6] * matrix2[8])) + (matrix1[7] * matrix2[12]);
        matrix[5] = (((matrix1[4] * matrix2[1]) + (matrix1[5] * matrix2[5])) + (matrix1[6] * matrix2[9])) + (matrix1[7] * matrix2[13]);
        matrix[6] = (((matrix1[4] * matrix2[2]) + (matrix1[5] * matrix2[6])) + (matrix1[6] * matrix2[10])) + (matrix1[7] * matrix2[14]);
        matrix[7] = (((matrix1[4] * matrix2[3]) + (matrix1[5] * matrix2[7])) + (matrix1[6] * matrix2[11])) + (matrix1[7] * matrix2[15]);
        matrix[8] = (((matrix1[8] * matrix2[0]) + (matrix1[9] * matrix2[4])) + (matrix1[10] * matrix2[8])) + (matrix1[11] * matrix2[12]);
        matrix[9] = (((matrix1[8] * matrix2[1]) + (matrix1[9] * matrix2[5])) + (matrix1[10] * matrix2[9])) + (matrix1[11] * matrix2[13]);
        matrix[10] = (((matrix1[8] * matrix2[2]) + (matrix1[9] * matrix2[6])) + (matrix1[10] * matrix2[10])) + (matrix1[11] * matrix2[14]);
        matrix[11] = (((matrix1[8] * matrix2[3]) + (matrix1[9] * matrix2[7])) + (matrix1[10] * matrix2[11])) + (matrix1[11] * matrix2[15]);
        matrix[12] = (((matrix1[12] * matrix2[0]) + (matrix1[13] * matrix2[4])) + (matrix1[14] * matrix2[8])) + (matrix1[15] * matrix2[12]);
        matrix[13] = (((matrix1[12] * matrix2[1]) + (matrix1[13] * matrix2[5])) + (matrix1[14] * matrix2[9])) + (matrix1[15] * matrix2[13]);
        matrix[14] = (((matrix1[12] * matrix2[2]) + (matrix1[13] * matrix2[6])) + (matrix1[14] * matrix2[10])) + (matrix1[15] * matrix2[14]);
        matrix[15] = (((matrix1[12] * matrix2[3]) + (matrix1[13] * matrix2[7])) + (matrix1[14] * matrix2[11])) + (matrix1[15] * matrix2[15]);
        return matrix;
    },

    /**
     * Converts a 3D point in a projected 2D point
     * @param {Array} pos 3D point to Convert.
     * @param {WaveEngineJS.Matrix} worldviewproj World view projection matrix
     * @param {number} screenWidth Screen width
     * @param {number} screenHeight Screen Height
     * @return {Array}
     */
    convert:function (pos, worldviewproj, screenWidth, screenHeight) {
        var vx = pos[0],
            vy = pos[1],
            vz = pos[2],
            vw = pos[3],
            x1 = (((vx * worldviewproj[0]) + (vy * worldviewproj[4])) + (vz * worldviewproj[8])) + (vw * worldviewproj[12]),
            y1 = (((vx * worldviewproj[1]) + (vy * worldviewproj[5])) + (vz * worldviewproj[9])) + (vw * worldviewproj[13]),
            z1 = (((vx * worldviewproj[2]) + (vy * worldviewproj[6])) + (vz * worldviewproj[10])) + (vw * worldviewproj[14]),
            w1 = (((vx * worldviewproj[3]) + (vy * worldviewproj[7])) + (vz * worldviewproj[11])) + (vw * worldviewproj[15]),
            position = [x1, y1, z1, w1],
            x = position[0],
            y = position[1],
            w = position[2];
        return [screenWidth * ((x / w) + 1.0) / 2.0, screenHeight * (1.0 - (((y / w) + 1.0) / 2.0))];
    },

    /**
     * Normalizes a vector
     */
    normalize:function (vector) {
        if (vector.length === 2) {
            WaveEngineJS.normalizeVector2(vector);
        }
        else if (vector.length === 3) {
            WaveEngineJS.normalizeVector3(vector);
        }
        else if (vector.length === 4) {
            WaveEngineJS.normalizeVector4(vector);
        }
    },

    /**
     * Normalizes a 2D vector
     * @param {Array} value
     */
    normalizeVector2:function (value) {
        var num2 = (value[0] * value[0]) + (value[1] * value[1]),
            num = 1 / (Math.sqrt(num2));
        value[0] *= num;
        value[1] *= num;
    },

    /**
     * Normalizes a 3D vector
     * @param {Array} value
     */
    normalizeVector3:function (value) {
        var x = value[0],
            y = value[1],
            z = value[2],
            num2 = ((x * x) + (y * y)) + (z * z),
            num = 1 / Math.sqrt(num2);

        value[0] = x * num;
        value[1] = y * num;
        value[2] = z * num;
    },

    /**
     * Normalizes a 4D vector
     * @param {Array} value
     */
    normalizeVector4:function (value) {
        var x = value[0],
            y = value[1],
            z = value[2],
            w = value[3],
            num2 = ((x * x) + (y * y)) + (z * z) + (w * w),
            num = 1 / Math.sqrt(num2);

        value[0] = x * num;
        value[1] = y * num;
        value[2] = z * num;
        value[3] = w * num;
    },

    /**
     * Inverts a 3D vector
     * @this {Array};
     */
    invert:function (vector3) {
        vector3[0] = -vector3[0];
        vector3[1] = -vector3[1];
        vector3[2] = -vector3[2];
    },

    /**
     * Divides each element of the 4D vector by divider
     * @param {Array} vector4
     * @param {number} divider
     * @this {Array}
     */
    divide:function (vector4, divider) {
        var num = 1 / divider;
        vector4[0] = vector4[0] * num;
        vector4[1] = vector4[1] * num;
        vector4[2] = vector4[2] * num;
        vector4[3] = vector4[3] * num;
    },

    /**
     * Substracts two 3D vectors
     * @param {Array} vector1 3D vector
     * @param {Array} vector2 3D vector
     * @return {Array}
     * @constructor
     */
    substractV3:function (vector1, vector2) {
        return [vector1[0] - vector2[0],
            vector1[1] - vector2[1],
            vector1[2] - vector2[2]];
    },

    /**
     * Cross product of two 3D vectors
     * @param {Array} vector1
     * @param {Array} vector2
     * @return {Array}
     */
    crossV3:function (vector1, vector2) {
        var x = (vector1[1] * vector2[2]) - (vector1[2] * vector2[1]),
            y = (vector1[2] * vector2[0]) - (vector1[0] * vector2[2]),
            z = (vector1[0] * vector2[1]) - (vector1[1] * vector2[0]);
        return [x, y, z];
    },

    /**
     * Dot product of two 3D vectors
     * @param {Array} vector1
     * @param {Array} vector2
     * @return {Number}
     */
    dotV3:function (vector1, vector2) {
        return (vector1[0] * vector2[0]) +
            (vector1[1] * vector2[1]) +
            (vector1[2] * vector2[2]);
    },

    /**
     * Transforms a 3D point using a Transformation Matrix
     * @param {Array} position Point Position
     * @param {WaveEngineJS.Matrix} matrix Transformation Matrix
     * @return {Array}
     */
    transformV3Matrix:function (position, matrix) {
        var x = position[0],
            y = position[1],
            z = position[2],
            num3 = (((x * matrix[0]) + (y * matrix[4])) + (z * matrix[8])) + matrix[12],
            num2 = (((x * matrix[1]) + (y * matrix[5])) + (z * matrix[9])) + matrix[13],
            num = (((x * matrix[2]) + (y * matrix[6])) + (z * matrix[10])) + matrix[14];
        return [num3, num2, num];
    },

    /**
     * Transforms a 4D point using a Transformation Matrix
     * @param {Array} vector 4D vector
     * @param {WaveEngineJS.Matrix} matrix Transformation Matrix
     * @return {Array}
     */
    transformV4Matrix:function (vector, matrix) {
        var vx = vector[0],
            vy = vector[1],
            vz = vector[2],
            vw = vector[3],
            x = (((vx * matrix[0]) + (vy * matrix[4])) + (vz * matrix[8])) + (vw * matrix[12]),
            y = (((vx * matrix[1]) + (vy * matrix[5])) + (vz * matrix[9])) + (vw * matrix[13]),
            z = (((vx * matrix[2]) + (vy * matrix[6])) + (vz * matrix[10])) + (vw * matrix[14]),
            w = (((vx * matrix[3]) + (vy * matrix[7])) + (vz * matrix[11])) + (vw * matrix[15]);
        return [x, y, z, w];
    },

    /**
     * Calculates the max vector of two vectors (combination of each coordinate)
     * @param {Array} value1 4D vector
     * @param {Array} value2 4D vector
     * @return {Array}
     */
    max:function (value1, value2) {
        return [(value1[0] > value2[0]) ? value1[0] : value2[0],
            (value1[1] > value2[1]) ? value1[1] : value2[1],
            (value1[2] > value2[2]) ? value1[2] : value2[2],
            (value1[3] > value2[3]) ? value1[3] : value2[3]];
    },

    /**
     * Calculates the min vector of two vectors (combination of each coordinate)
     * @param {Array} value1 4D vector
     * @param {Array} value2 4D vector
     * @return {Array}
     */
    min:function (value1, value2) {
        return [(value1[0] < value2[0]) ? value1[0] : value2[0],
            (value1[1] < value2[1]) ? value1[1] : value2[1],
            (value1[2] < value2[2]) ? value1[2] : value2[2],
            (value1[3] < value2[3]) ? value1[3] : value2[3]];
    },

    /**
     * Substracts two 4D vectors
     * @param {Array} value1 4D vector
     * @param {Array} value2 4D vector
     * @return {Array}
     */
    substractV4:function (value1, value2) {
        return [value1[0] - value2[0],
            value1[1] - value2[1],
            value1[2] - value2[2],
            value1[3] - value2[3]];
    },

    /**
     * Creates the rotation matrix from Yaw, Pitch and Roll
     * @param {number} yaw
     * @param {number} pitch
     * @param {number} roll
     * @return {WaveEngineJS.Matrix}
     */
    createFromYawPitchRoll:function (yaw, pitch, roll) {
        var quaternion = [],
            num9 = roll * 0.5,
            num6 = Math.sin(num9),
            num5 = Math.cos(num9),
            num8 = pitch * 0.5,
            num4 = Math.sin(num8),
            num3 = Math.cos(num8),
            num7 = yaw * 0.5,
            num2 = Math.sin(num7),
            num = Math.cos(num7);
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

        var matrix = new WaveEngineJS.Matrix();
        matrix[0] = 1 - (2 * (num8 + num7));
        matrix[1] = 2 * (num6 + num5);
        matrix[2] = 2 * (num4 - num3);
        matrix[3] = 0;
        matrix[4] = 2 * (num6 - num5);
        matrix[5] = 1 - (2 * (num7 + num9));
        matrix[6] = 2 * (num2 + num);
        matrix[7] = 0;
        matrix[8] = 2 * (num4 + num3);
        matrix[9] = 2 * (num2 - num);
        matrix[10] = 1 - (2 * (num8 + num9));
        matrix[11] = 0;
        matrix[12] = 0;
        matrix[13] = 0;
        matrix[14] = 0;
        matrix[15] = 1;
        return matrix;
    },

    /**
     * Bounding Box is a wrapper of a Model where we can detect the click of a mouse
     * @constructor
     */
    BoundingBox:function () {
        var that = this;
        this.min = [];
        this.max = [];

        /**
         * Calculates if a ray intersects with the bounding box
         * @param {WaveEngineJS.ray} ray
         * @return {*}
         */
        this.Intersects = function (ray) {
            var num = 0,
                maxValue = Number.MAX_VALUE;
            if (Math.abs(ray.direction[0]) < 1E-06) {
                if ((ray.position[0] < that.min[0]) || (ray.position[0] > that.max[0])) {
                    return null;
                }
            }
            else {
                var num11 = 1 / ray.direction[0],
                    num8 = (that.min[0] - ray.position[0]) * num11,
                    num7 = (that.max[0] - ray.position[0]) * num11;
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
                if ((ray.position[1] < that.min[1]) || (ray.position[1] > that.max[1])) {
                    return null;
                }
            }
            else {
                var num10 = 1 / ray.direction[1],
                    num6 = (that.min[1] - ray.position[1]) * num10,
                    num5 = (that.max[1] - ray.position[1]) * num10;
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
                if ((ray.position[2] < that.min[2]) || (ray.position[2] > that.max[2])) {
                    return null;
                }
            }
            else {
                var num9 = 1 / ray.direction[2],
                    num4 = (that.min[2] - ray.position[2]) * num9,
                    num3 = (that.max[2] - ray.position[2]) * num9;
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

        /**
         * Returns the bounding box corners
         * @return {Array}
         * @constructor
         */
        this.GetConers = function () {
            var min = that.min,
                max = that.max;
            return [
                [min[0], max[1], max[2], 1],
                [max[0], max[1], max[2], 1],
                [max[0], min[1], max[2], 1],
                [min[0], min[1], max[2], 1],
                [min[0], max[1], min[2], 1],
                [max[0], max[1], min[2], 1],
                [max[0], min[1], min[2], 1],
                [min[0], min[1], min[2], 1]
            ];
        };
    },

    /**
     * Represents a ray fired from a screen point to the scene
     * @param {Array} position 3D vector
     * @param {Array} direction 3D vector
     * @return {WaveEngineJS.ray}
     */
    ray:function (position, direction) {
        this.position = position;
        this.direction = direction;
        return this;
    },

    /**
     * Represents a camera for the scene
     * @param {Number} width Scene width
     * @param {Number} height Scene height
     * @constructor
     */
    Camera:function (width, height) {
        var that = this;
        this.cameraPosition = [0, 0, 15];
        this.cameraTarget = [0, 0, 0];
        this.cameraUpVector = [0, 1, 0];
        this.width = width;
        this.height = height;
        this.aspectRatio = this.width / this.height;
        this.view = WaveEngineJS.createLookAt(this.cameraPosition, this.cameraTarget, this.cameraUpVector);
        this.projection = WaveEngineJS.createPerspectiveFieldOfView(Math.PI / 4, this.aspectRatio, 1, 1000);
        this.viewproj = WaveEngineJS.multiply(this.view, this.projection);

        /**
         * Get the camera position
         * @return {Array}
         */
        this.getPosition = function () {
            return that.cameraPosition;
        };

        /**
         * Changes aspectRatio
         * @param aspectRatio
         */
        this.changeAspectRatio = function (aspectRatio) {
            that.aspectRatio = aspectRatio;
            that.projection = WaveEngineJS.createPerspectiveFieldOfView(Math.PI / 4, that.aspectRatio, 1, 1000);
            that.viewproj = WaveEngineJS.multiply(that.view, that.projection);
        };

        /**
         * Changes the Perspective Field Of View
         * @param {Number} fieldOfView the new fov
         * @param {Number} aspectRatio the new aspectratio
         * @param {Number} nearPlaneDistance the new Near Plane Distance
         * @param {Number} farPlaneDistance the new Far Plane Distance
         */
        this.changePerspectiveFieldOfView = function (fieldOfView, aspectRatio, nearPlaneDistance, farPlaneDistance) {
            that.projection = WaveEngineJS.createPerspectiveFieldOfView(fieldOfView, aspectRatio, nearPlaneDistance, farPlaneDistance);
            that.viewproj = WaveEngineJS.multiply(that.view, that.projection);
        };

        /**
         * Changes the camera position
         * @param {Array} position 3D vector
         */
        this.changeCameraPosition = function (position) {
            that.cameraPosition = position;
            that.changeViewProj();
        };

        /**
         * Changes the camera target
         * @param {Array} target 3D vector
         */
        this.changeCameraTarget = function (target) {
            that.cameraTarget = target;
            that.changeViewProj();
        };

        /**
         * Changes the camera Up Vector
         * @param {Array} upVector 3D vector
         */
        this.changeCameraUpVector = function (upVector) {
            that.cameraUpVector = upVector;
            that.changeViewProj();
        };

        /**
         * Changes the camera LookAt
         * @param {Array} cameraPosition 3D Vector
         * @param {Array} cameraTarget 3D Vector
         * @param {Array} cameraUpVector 3D Vector
         */
        this.changeLookAt = function (cameraPosition, cameraTarget, cameraUpVector) {
            that.cameraPosition = cameraPosition;
            that.cameraTarget = cameraTarget;
            that.cameraUpVector = cameraUpVector;
            that.changeViewProj();
        };

        /**
         * Changes the new View Projection Matrix
         */
        this.changeViewProj = function () {
            that.view = WaveEngineJS.createLookAt(that.cameraPosition, that.cameraTarget, that.cameraUpVector);
            that.viewproj = WaveEngineJS.multiply(that.view, that.projection);
        };

        /**
         * Calculates if a value is into epsilon range
         * @param {Number} a
         * @param {Number} b
         * @return {Boolean}
         */
        this.withinEpsilon = function (a, b) {
            var num = a - b;
            return (-WaveEngineJS.EPSILON <= num) && (num <= WaveEngineJS.EPSILON);
        };

        /**
         * Unprojects a point in the scene
         * @param {Array} source 3D vector
         * @param {WaveEngine3D.Matrix} view View Matrix
         * @param {WaveEngine3D.Matrix} projection Projection Matrix
         * @param {WaveEngine3D.Matrix} world World Matrix
         * @return {Array}
         */
        this.unproject = function (source, view, projection, world) {
            var minz = 0,
                maxz = 1,
                matrix = WaveEngineJS.multiply(WaveEngineJS.multiply(world, view), projection);

            matrix.invert();
            source[0] = (((source[0]) / (that.width)) * 2) - 1;
            source[1] = -((((source[1]) / (that.height)) * 2) - 1);
            source[2] = (source[2] - minz) / (maxz - minz);
            var vector = WaveEngineJS.transformV3Matrix(source, matrix);
            var vector4 = [vector[0], vector[1], vector[2], 1];
            var a = (((source[0] * matrix[3]) + (source[1] * matrix[7])) + (source[2] * matrix[11])) + matrix[15];
            if (!that.withinEpsilon(a, 1)) {
                WaveEngineJS.divide(vector4, a);
            }
            return vector4;
        };
    },

    /**
     * Represents a Sphere Camera
     * @param {Number} width  scene width
     * @param {Number} height scene height
     * @constructor
     */
    SphereCamera:function (width, height) {
        var that = this;
        this.cameraPosition = [0, 0, 15];
        this.cameraTarget = [0, 0, 0];
        this.cameraUpVector = [0, 1, 0];
        this.size = [width, height];
        this.offset = [0, 0];
        this.aspectRatio = width / height;
        this.view = WaveEngineJS.createLookAt(this.cameraPosition, this.cameraTarget, this.cameraUpVector);
        this.projection = WaveEngineJS.createPerspectiveFieldOfView(Math.PI / 3, this.aspectRatio, 1, 1000);
        this.viewproj = WaveEngineJS.multiply(this.view, this.projection);
        this.downPosition = [0, 0, 0];
        this.currentPosition = [0, 0, 0];
        this.radius = 0.9;
        this.qNow = new WaveEngineJS.Quaternion().Identity();
        this.qDown = new WaveEngineJS.Quaternion().Identity();
        this.isDraggin = false;
        this.position = [0, 0, 15];
        this.hasDragged = false;
        this.dragThreshold = 5;
        this.isDragThresholdEnabled = false;

        /**
         * Resets the camera and puts it in its original position
         */
        this.resetCamera = function () {
            that.qNow = new WaveEngineJS.Quaternion().Identity();
            that.qDown = new WaveEngineJS.Quaternion().Identity();
            that.downPosition = [0, 0, 0];
            that.position = [0, 0, 15];
        };

        /**
         * Changes the aspectRatio
         * @param {Number} aspectRatio Scene aspect ratio
         */
        this.changeAspectRatio = function (aspectRatio) {
            that.aspectRatio = aspectRatio;
            that.projection = WaveEngineJS.createPerspectiveFieldOfView(Math.PI / 4, that.aspectRatio, 1, 1000);
            that.viewproj = WaveEngineJS.multiply(that.view, that.projection);
        };

        /**
         * Changes the Perspective Field Of View
         * @param {Number} fieldOfView The new FOV
         * @param {Number} aspectRatio The new Aspect Ratio
         * @param {Number} nearPlaneDistance The new Near Plane Distance
         * @param {Number} farPlaneDistance The new Far Plane Distance
         */
        this.changePerspectiveFieldOfView = function (fieldOfView, aspectRatio, nearPlaneDistance, farPlaneDistance) {
            that.projection = WaveEngineJS.createPerspectiveFieldOfView(fieldOfView, aspectRatio, nearPlaneDistance, farPlaneDistance);
            that.viewproj = WaveEngineJS.multiply(that.view, that.projection);
        };

        /**
         * Changes the camera position
         * @param {Array} position 3D vector
         */
        this.changeCameraPosition = function (position) {
            that.cameraPosition = position;
            that.position = position;
            that.changeViewProj();
        };

        /**
         * Changes the camera target
         * @param {Array} target 3D vector
         */
        this.changeCameraTarget = function (target) {
            that.cameraTarget = target;
            that.changeViewProj();
        };

        /**
         * Changes the camera Up Vector
         * @param {Array} upVector 3D vector
         */
        this.changeCameraUpVector = function (upVector) {
            that.cameraUpVector = upVector;
            that.changeViewProj();
        };

        /**
         * Changes the camera LookAt
         * @param {Array} cameraPosition 3D Vector
         * @param {Array} cameraTarget 3D Vector
         * @param {Array} cameraUpVector 3D Vector
         */
        this.changeLookAt = function (cameraPosition, cameraTarget, cameraUpVector) {
            that.cameraPosition = cameraPosition;
            that.cameraTarget = cameraTarget;
            that.cameraUpVector = cameraUpVector;
            that.changeViewProj();
        };

        /**
         * Changes the new View Projection Matrix
         */
        this.changeViewProj = function () {
            that.view = WaveEngineJS.createLookAt(that.cameraPosition, that.cameraTarget, that.cameraUpVector);
            that.viewproj = WaveEngineJS.multiply(that.view, that.projection);
        };

        /**
         * Calculates if a value is into epsilon range
         * @param {Number} a
         * @param {Number} b
         * @return {Boolean}
         */
        this.withinEpsilon = function (a, b) {
            var num = a - b;
            return (-WaveEngineJS.EPSILON <= num) && (num <= WaveEngineJS.EPSILON);
        };

        /**
         * Unprojects a point in the scene
         * @param {Array} source 3D vector
         * @param {WaveEngine3D.Matrix} view View Matrix
         * @param {WaveEngine3D.Matrix} projection Projection Matrix
         * @param {WaveEngine3D.Matrix} world World Matrix
         * @return {Array}
         */
        this.unproject = function (source, view, projection, world) {
            var minz = 0,
                maxz = 1,
                matrix = WaveEngineJS.multiply(WaveEngineJS.multiply(world, view), projection);

            matrix.invert();

            source[0] = (((source[0]) / (that.size[0])) * 2) - 1;
            source[1] = -((((source[1]) / (that.size[1])) * 2) - 1);
            source[2] = (source[2] - minz) / (maxz - minz);
            var vector = WaveEngineJS.transformV3Matrix(source, matrix);
            var vector4 = [vector[0], vector[1], vector[2], 1];

            var a = (((source[0] * matrix[3]) + (source[1] * matrix[7])) + (source[2] * matrix[11])) + matrix[15];
            if (!that.withinEpsilon(a, 1)) {
                WaveEngineJS.divide(vector4, a);
            }
            return vector4;
        };

        /**
         * Calculates the View Matrix to the rotation
         * @return {WaveEngineJS.Matrix}
         */
        this.getViewMatrix = function () {
            var rot = WaveEngineJS.createFromQuaternion(that.qNow);
            rot.invert();
            that.position = WaveEngineJS.transformV3Matrix(that.cameraPosition, rot);
            return WaveEngineJS.createLookAt(that.position, that.cameraTarget, WaveEngineJS.transformV3Matrix(that.cameraUpVector, rot));
        };

        /**
         * Get the Camera Position
         * @return {Array}
         */
        this.getPosition = function () {
            return that.position;
        };

        /**
         * Transforms a screen position vector to a 3D vector
         * @param {Number} screenX X position in the screen
         * @param {Number} screenY Y position in the screen
         * @return {Array}
         */
        this.screenToVector = function (screenX, screenY) {
            var offset = that.offset;
            var size = that.size;
            var radius = that.radius;
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

        /**
         * Gets a Quaternion from Ball Points
         * @param {Array} from 3D Vector
         * @param {Array} to 3D Vector
         * @return {Array}
         */
        this.quatFromBallPoints = function (from, to) {
            var dot = WaveEngineJS.dotV3(from, to),
                qPart = WaveEngineJS.crossV3(from, to);
            return [qPart[0], qPart[1], qPart[2], dot];
        };

        /**
         * Event handler when moving a camera
         * @param {String} eventType Event type string
         * @param {Array} position 2D Vector
         * @return {Boolean}
         */
        this.onRotateCamera = function (eventType, position) {
            if (eventType == "mousedown" || eventType == "MSPointerDown" || eventType == "touchdown") {
                that.isDraggin = true;
                that.qDown = [that.qNow[0], that.qNow[1], that.qNow[2], that.qNow[3]];
                that.downPosition = that.screenToVector(position.x, position.y);
                that.downPosition2D = position;
            } else if (eventType == "mouseup" || eventType == "MSPointerUp" || eventType == "touchup" || eventType == "mouseout") {
                that.isDraggin = false;
            }

            if ((eventType == "mousemove" || eventType == "MSPointerMove" || eventType == "touchmove") && that.isDraggin) {
                that.currentPosition2D = position;
                that.currentPosition = that.screenToVector(position.x, position.y);
                that.qNow = WaveEngineJS.quaternionProduct(that.quatFromBallPoints(that.downPosition, that.currentPosition), that.qDown);
                that.view = that.getViewMatrix();
                that.viewproj = WaveEngineJS.multiply(that.view, that.projection);
            }
            return that.isDraggin;
        };
    },

    /**
     * Represents a quaternion
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @param {Number} w
     * @constructor
     */
    Quaternion:function (x, y, z, w) {
        this[0] = x;
        this[1] = y;
        this[2] = z;
        this[3] = w;

        /**
         * Get an identity quaternion
         * @return {WaveEngineJS.Quaternion}
         * @constructor
         */
        this.Identity = function () {
            return new WaveEngineJS.Quaternion(0, 0, 0, 1);
        };
    },

    /**
     * Calculates the two quaternion products
     * @param {WaveEngineJS.Quaternion} quaternion1
     * @param {WaveEngineJS.Quaternion} quaternion2
     * @return {WaveEngineJS.Quaternion}
     */
    quaternionProduct:function (quaternion1, quaternion2) {
        var quaternion = new WaveEngineJS.Quaternion(),
            x = quaternion1[0],
            y = quaternion1[1],
            z = quaternion1[2],
            w = quaternion1[3],
            num4 = quaternion2[0],
            num3 = quaternion2[1],
            num2 = quaternion2[2],
            num = quaternion2[3],
            num12 = (y * num2) - (z * num3),
            num11 = (z * num4) - (x * num2),
            num10 = (x * num3) - (y * num4),
            num9 = ((x * num4) + (y * num3)) + (z * num2);
        quaternion[0] = ((x * num) + (num4 * w)) + num12;
        quaternion[1] = ((y * num) + (num3 * w)) + num11;
        quaternion[2] = ((z * num) + (num2 * w)) + num10;
        quaternion[3] = (w * num) - num9;
        return quaternion;
    },

    /**
     * Represents a 3D point in a 4D vector
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @constructor
     */
    Point3D:function (x, y, z) {
        this[0] = x;
        this[1] = y;
        this[2] = z;
        this[3] = 1;
    },

    /**
     * Represents a model in a 3D scene
     * @param {String} id Model ID (optional)
     * @constructor
     */
    Model:function (id) {
        var that = this;
        this.id = id;
        this.vertices = new Array();
        this.index = new Array();
        this.poligons = new Array();
        this.position = [0, 0, 0];
        this.rotation = [0, 0, 0];
        this.scale = [1, 1, 1];
        this.backfaceCulling = true;
        this.hasShadow = false;
        this.world = new WaveEngineJS.MatrixIdentity();
        this.refreshedBoudingBox = false;
        this.BoundingBox = new WaveEngineJS.BoundingBox();
        this.debugLines = false;
        this.hasIllumination = false;
        this.color = [0, 0, 0, 1];
        this.borderColor = [0, 0, 0, 1];

        /**
         * Changes the model color
         * @param {Array} fillColor 3D vector
         * @param {Array} borderColor 3D vector
         */
        this.changeColor = function (fillColor, borderColor) {
            that.color = fillColor;
            that.borderColor = borderColor;
            that.updateColor();
        };

        /**
         * Updates the canvas Stroke and Fills using a rgba color
         */
        this.updateColor = function () {
            var c = that.color,
                v = that.borderColor,
                rgba = WaveEngineJS.rgba,
                comma = WaveEngineJS.comma,
                close = WaveEngineJS.close;
            that.strokeColor = rgba + v[0] + comma + v[1] + comma + v[2] + comma + v[3] + close;
            that.fillColor = rgba + c[0] + comma + c[1] + comma + c[2] + comma + c[3] + close;
        };

        /**
         * Adds a new vertex to the model
         * @param {Number} x
         * @param {Number} y
         * @param {Number} z
         * @return {Number}
         */
        this.addVertex = function (x, y, z) {
            var position = that.vertices.length;
            that.vertices[position] = new WaveEngineJS.Point3D(x, y, z);
            return position;
        };

        /**
         * Adds a new triangle to the model
         * @param {Number} p1 Verex position
         * @param {Number} p2 Verex position
         * @param {Number} p3 Verex position
         */
        this.addTriangle = function (p1, p2, p3) {
            var position = that.index.length;
            that.index[position] = p1;
            that.index[position + 1] = p2;
            that.index[position + 2] = p3;
        };

        /**
         * Adds a new polygon to the model
         * @param {Array} polygon Array whith all vertexs position
         */
        this.addPolygon = function (polygon) {
            var position = that.poligons.length,
                vertices = [],
                l = polygon.length;
            for (var i = 0; i < l; i++) {
                vertices[i] = polygon[i];
            }
            that.poligons[position] = vertices;
        };

        /**
         * Updates the world matrix
         */
        this.refreshWorld = function () {
            var rotationMatrix = WaveEngineJS.createFromYawPitchRoll(that.rotation[1], that.rotation[0], that.rotation[2]),
                scaleMatrix = WaveEngineJS.createScale(that.scale[0], that.scale[1], that.scale[2]),
                translationMatrix = WaveEngineJS.createTranslation(that.position);
            that.world = WaveEngineJS.multiply(scaleMatrix, translationMatrix);
            that.world = WaveEngineJS.multiply(rotationMatrix, that.world);
            that.refreshedBoudingBox = false;
        };

        /**
         * Changes the model position
         * @param {Number} x
         * @param {Number} y
         * @param {Number} z
         */
        this.changePosition = function (x, y, z) {
            that.position[0] = x;
            that.position[1] = y;
            that.position[2] = z;
            that.refreshWorld();
        };

        /**
         * Changes the model rotation
         * @param {Number} x
         * @param {Number} y
         * @param {Number} z
         */
        this.changeRotation = function (x, y, z) {
            that.rotation[0] = x;
            that.rotation[1] = y;
            that.rotation[2] = z;
            that.refreshWorld();
        };

        /**
         * Changes the model Scale
         * @param {Number} x
         * @param {Number} y
         * @param {Number} z
         */
        this.changeScale = function (x, y, z) {
            that.scale[0] = x;
            that.scale[1] = y;
            that.scale[2] = z;
            that.refreshWorld();
        };

        /**
         * Refreshes the bounding box if is necessary
         * @param {Array} vectors 3D vectors array
         */
        this.refreshBoundingBox = function (vectors) {
            if (!that.refreshedBoudingBox) {
                var vector3 = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE];
                var vector2 = [-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE];

                var l = vectors.length;
                for (var i = 0; i < l; i++) {
                    var vector4 = vectors[i];
                    vector3 = WaveEngineJS.min(vector3, vector4);
                    vector2 = WaveEngineJS.max(vector2, vector4);
                }

                that.BoundingBox.min = vector3;
                that.BoundingBox.max = vector2;
                that.refreshedBoudingBox = true;
            }
        };

        /**
         * Get the distance between a vector and a model
         * @param {Array} vector 3D vector with the camera position
         * @return {Number}
         */
        this.getDistanceToCamera = function (vector) {
            return Math.sqrt(((vector[0] - that.position[0]) * (vector[0] - that.position[0])) + ((vector[1] - that.position[1]) * (vector[1] - that.position[1])) + ((vector[2] - that.position[2]) * (vector[2] - that.position[2])));
        };
    },

    /**
     * Represents a set of models
     * @param {string} id Group model ID
     */
    groupModel:function (id) {
        var that = this;
        this.id = id;
        this.models = new Array();
        this.world = new WaveEngineJS.MatrixIdentity();
        this.position = [0, 0, 0];
        this.rotation = [0, 0, 0];
        this.scale = [1, 1, 1];
        this.BoundingBox = new WaveEngineJS.BoundingBox();
        this.refreshedBoudingBox = false;

        /**
         * Adds a new model to the set
         * @param {WaveEngineJS.Model} model
         */
        this.addModel = function (model) {
            that.models[that.models.length] = model;
        };

        /**
         * Changes the group model position
         * @param {Number} x
         * @param {Number} y
         * @param {Number} z
         */
        this.changePosition = function (x, y, z) {
            that.position[0] = x;
            that.position[1] = y;
            that.position[2] = z;
            that.refreshWorld();
        };

        /**
         * Changes the group model rotation
         * @param {Number} x
         * @param {Number} y
         * @param {Number} z
         */
        this.changeRotation = function (x, y, z) {
            that.rotation[0] = x;
            that.rotation[1] = y;
            that.rotation[2] = z;
            that.refreshWorld();
        };

        /**
         * Changes the group model scale
         * @param {Number} x
         * @param {Number} y
         * @param {Number} z
         */
        this.changeScale = function (x, y, z) {
            that.scale[0] = x;
            that.scale[1] = y;
            that.scale[2] = z;
            that.refreshWorld();
        };

        /**
         * Updates the World matrix for the group model and all models in it
         */
        this.refreshWorld = function () {
            var rotationMatrix = WaveEngineJS.createFromYawPitchRoll(that.rotation[1], that.rotation[0], that.rotation[2]),
                scaleMatrix = WaveEngineJS.createScale(that.scale[0], that.scale[1], that.scale[2]),
                translationMatrix = WaveEngineJS.createTranslation(that.position);

            that.world = WaveEngineJS.multiply(scaleMatrix, translationMatrix);
            that.world = WaveEngineJS.multiply(rotationMatrix, that.world);

            var models = that.models,
                l = models.length;
            for (var i = 0; i < l; i++) {
                models[i].refreshWorld();
                var world = models[i].world;
                models[i].world = WaveEngineJS.multiply(world, that.world);
            }
            that.refreshedBoudingBox = false;
        };

        /**
         * Refreshes the group model bounding box if necessary
         * @param {Array} vectors 3D vectors array
         */
        this.refreshBoundingBox = function (vectors) {
            if (!that.refreshedBoudingBox) {
                var vector3 = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE],
                    vector2 = [-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE],
                    l = vectors.length;
                for (var i = 0; i < l; i++) {
                    var vector4 = vectors[i];
                    vector3 = WaveEngineJS.min(vector3, vector4);
                    vector2 = WaveEngineJS.max(vector2, vector4);
                }

                that.BoundingBox.min = vector3;
                that.BoundingBox.max = vector2;
                that.refreshedBoudingBox = true;
            }
        };

        /**
         * Get the distance between a vector and a model
         * @param {Array} vector 3D vector with the camera position
         * @return {Number}
         */
        this.getDistanceToCamera = function (vector) {
            return Math.sqrt(((vector[0] - that.position[0]) * (vector[0] - that.position[0])) + ((vector[1] - that.position[1]) * (vector[1] - that.position[1])) + ((vector[2] - that.position[2]) * (vector[2] - that.position[2])));
        };
    },

    /**
     * Represents a 3D scene
     * @param canvas A HTML Canvas
     * @constructor
     */
    Scene:function (canvas) {
        var that = this,
            rgba = WaveEngineJS.rgba,
            rgb = WaveEngineJS.rgb,
            comma = WaveEngineJS.comma,
            close = WaveEngineJS.close;
        this.models = new Array();
        this.groupModels = new Array();
        this.camera = new WaveEngineJS.Camera(canvas.width, canvas.height);
        this.light = [150, 150, 150];
        WaveEngineJS.invert(this.light);
        this.ambientColor = [47, 79, 79];
        this.shadowMatrix = WaveEngineJS.createShadowMatrix([0, 1, 0], this.light, 0);
        WaveEngineJS.normalize(this.light);
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

        /**
         * Set the scene camera (normal or sphere camera)
         * @param {WaveEngineJS.Camera} camera
         */
        this.addCamera = function (camera) {
            that.camera = camera;
        };

        /**
         * Adds a model to the scene
         * @param {WaveEngineJS.Model} model
         * @return {Number}
         */
        this.addModel = function (model) {
            var position = that.models.length;
            that.models[position] = model;
            return position;
        };

        /**
         * Adds a group model to the scene
         * @param {WaveEngineJS.Model} model
         * @return {Number}
         */
        this.addGroupModel = function (groupModel) {
            var position = that.groupModels.length;
            that.groupModels[position] = groupModel;
            return position;
        };

        /**
         * Changes the light position in the scene
         * @param {Number} x
         * @param {Number} y
         * @param {Number} z
         */
        this.changeLight = function (x, y, z) {
            that.light[0] = x;
            that.light[1] = y;
            that.light[2] = z;
            WaveEngineJS.invert(that.light);
            that.shadowMatrix = WaveEngineJS.createShadowMatrix([0, 1, 0], that.light, 0);
            WaveEngineJS.normalize(that.light);
        };

        /**
         * Draws the bounding box lines
         * @param {WaveEngineJS.Model} model
         */
        this.renderDebugLines = function (model) {
            var corners = model.BoundingBox.GetConers();
            var vcorners = new Array();
            var l = vcorners.length;
            for (var j = 0; j < l; j++) {
                vcorners[j] = WaveEngineJS.convert(corners[j], that.camera.viewproj, that.width, that.height);
            }

            that.context.beginPath();
            that.context.strokeStyle = "black";
            that.context.moveTo(vcorners[0][0], vcorners[0][1]);
            that.context.lineTo(vcorners[1][0], vcorners[1][1]);
            that.context.lineTo(vcorners[2][0], vcorners[2][1]);
            that.context.lineTo(vcorners[3][0], vcorners[3][1]);
            that.context.lineTo(vcorners[0][0], vcorners[0][1]);

            that.context.lineTo(vcorners[4][0], vcorners[4][1]);
            that.context.lineTo(vcorners[5][0], vcorners[5][1]);
            that.context.lineTo(vcorners[6][0], vcorners[6][1]);
            that.context.lineTo(vcorners[7][0], vcorners[7][1]);
            that.context.lineTo(vcorners[4][0], vcorners[4][1]);

            that.context.moveTo(vcorners[1][0], vcorners[1][1]);
            that.context.lineTo(vcorners[5][0], vcorners[5][1]);

            that.context.moveTo(vcorners[2][0], vcorners[2][1]);
            that.context.lineTo(vcorners[6][0], vcorners[6][1]);

            that.context.moveTo(vcorners[3][0], vcorners[3][1]);
            that.context.lineTo(vcorners[7][0], vcorners[7][1]);
            that.context.stroke();
            that.context.closePath();
        };

        /**
         * Draws the scene
         * @param {String} type
         */
        this.render = function (type) {
            that.clearScreen();
            var cp = that.camera.getPosition(),
                models = that.models,
                groupModels = that.groupModels,
                preSortModels = [],
                preSortGroupModels = [],
                sortModels,
                sortGroupModes,
                l = models.length;
            for (var i = 0; i < l; i++) {
                preSortModels[i] = { d:(models[i].getDistanceToCamera(cp) * 1000), model:models[i] };
            }

            l = groupModels.length;
            for (var i = 0; i < l; i++) {
                preSortGroupModels[i] = { d:groupModels[i].getDistanceToCamera(cp), groupModel:groupModels[i] };
            }

            sortModels = WaveEngineJS.sortModels(preSortModels);
            sortGroupModes = WaveEngineJS.sortModels(preSortGroupModels);

            l = sortModels.length;
            for (var i = 0; i < l; i++) {
                var model = sortModels[i].model,
                    vertices = [],
                    ll = model.vertices.length;
                for (var j = 0; j < ll; j++) {
                    vertices[j] = WaveEngineJS.transformV4Matrix(model.vertices[j], model.world);
                }

                model.refreshBoundingBox(vertices);

                if (that.showDebugLines) {
                    that.renderDebugLines(model);
                }
                switch (type) {
                    case that.POINTS:
                        that.drawPoints(vertices);
                        break;
                    case that.WIRE:
                        that.context.beginPath();
                        that.drawWire(vertices, model);
                        that.context.closePath();
                        break;
                    case that.SOLID:
                        that.drawShadow(vertices, model);
                        that.drawSolid(vertices, model);
                        that.drawWire(vertices, model);
                        break;
                    default:
                        that.drawPoints(vertices);
                        break;
                }
            }

            l = sortGroupModes.length;
            for (var i = 0; i < l; i++) {
                var groupModel = sortGroupModes[i].groupModel,
                    models = groupModel.models,
                    modelsVertices = [],
                    totalVertices = [],
                    ll = models.length;
                for (var k = 0; k < ll; k++) {
                    var model = models[k],
                        vertices = [];
                    for (var j = 0; j < model.vertices.length; j++) {
                        vertices[j] = WaveEngineJS.transformV4Matrix(model.vertices[j], model.world);
                        totalVertices[totalVertices.length] = vertices[j];
                    }
                    modelsVertices[k] = vertices;
                }

                groupModel.refreshBoundingBox(totalVertices);
                if (that.showDebugLines) {
                    that.renderDebugLines(groupModel);
                    type = that.WIRE;
                }

                for (var k = 0; k < ll; k++) {
                    switch (type) {
                        case that.POINTS:
                            that.drawPoints(modelsVertices[k]);
                            break;
                        case that.WIRE:
                            that.context.beginPath();
                            that.context.strokeStyle = "black";
                            that.context.beginPath();
                            that.drawWire(modelsVertices[k], models[k]);
                            that.context.closePath();
                            break;
                        case that.SOLID:
                            that.drawShadow(modelsVertices[k], models[k]);
                            that.drawSolid(modelsVertices[k], models[k]);
                            that.drawWire(modelsVertices[k], models[k]);
                            break;
                        default:
                            that.drawPoints(vertices);
                            break;
                    }
                }
            }
        };

        /**
         * Clears the canvas
         */
        this.clearScreen = function () {
            that.context.clearRect(0, 0, that.width, that.height);
        };

        /**
         * Draws only the models vertix
         * @param {Array} vertices Model vertix
         */
        this.drawPoints = function (vertices) {
            that.context.beginPath();
            that.context.strokeStyle = "black";
            for (var i = 0; i < vertices.length; i++) {
                var vertex1 = WaveEngineJS.convert(vertices[i], that.camera.viewproj, that.width, that.height);
                that.context.moveTo(vertex1[0], vertex1[1]);
                that.context.lineTo(vertex1[0] + 1, vertex1[1] + 1);
            }
            that.context.stroke();
            that.context.closePath();
        };

        /**
         * Draws only the models edges
         * @param {Array} vertices Model vertices
         * @param {WaveEngineJS.Model} model
         */
        this.drawWire = function (vertices, model) {
            var indexes = model.index,
                pc = that.camera.getPosition(),
                borderColor = model.borderColor;
            that.context.strokeStyle = rgba + borderColor[0] + comma + borderColor[1] + comma + borderColor[2] + comma + borderColor[3] + close;
            for (var i = 0; i < indexes.length / 3; i++) {
                var index = i * 3,
                    p1 = vertices[indexes[index]],
                    p2 = vertices[indexes[index + 1]],
                    p3 = vertices[indexes[index + 2]],
                    v1 = WaveEngineJS.substractV3(p1, p2),
                    v2 = WaveEngineJS.substractV3(p3, p2),
                    n = WaveEngineJS.crossV3(v1, v2),
                    c = WaveEngineJS.substractV3(pc, p1),
                    tita = WaveEngineJS.dotV3(c, n);

                if (!model.backfaceCulling || tita < 0) {
                    var vertex1 = WaveEngineJS.convert(p1, that.camera.viewproj, that.width, that.height);
                    var vertex2 = WaveEngineJS.convert(p2, that.camera.viewproj, that.width, that.height);
                    var vertex3 = WaveEngineJS.convert(p3, that.camera.viewproj, that.width, that.height);
                    that.context.moveTo(vertex1[0], vertex1[1]);
                    that.context.lineTo(vertex2[0], vertex2[1]);
                    that.context.lineTo(vertex3[0], vertex3[1]);
                    that.context.lineTo(vertex1[0], vertex1[1]);
                }
            }

            var polygons = model.poligons,
                l = polygons.length;
            for (var i = 0; i < l; i++) {
                var polygon = polygons[i],
                    index = 0,
                    p1 = vertices[polygon[index]],
                    p2 = vertices[polygon[index + 1]],
                    p3 = vertices[polygon[index + 2]],
                    v1 = WaveEngineJS.substractV3(p1, p2),
                    v2 = WaveEngineJS.substractV3(p3, p2),
                    n = WaveEngineJS.crossV3(v1, v2),
                    c = WaveEngineJS.substractV3(pc, p1),
                    tita = WaveEngineJS.dotV3(c, n);

                if (!model.backfaceCulling || tita < 0) {
                    var orig = WaveEngineJS.convert(vertices[polygon[0]], that.camera.viewproj, that.width, that.height);
                    that.context.moveTo(orig[0], orig[1]);
                    var ll = polygon.length;
                    for (var j = 1; j < ll; j++) {
                        var aux = WaveEngineJS.convert(vertices[polygon[j]], that.camera.viewproj, that.width, that.height);
                        that.context.lineTo(aux[0], aux[1]);
                    }
                    that.context.lineTo(orig[0], orig[1]);
                }
            }
            that.context.stroke();
        };

        /**
         * Draws a solid model
         * @param {Array} vertices Model vertices
         * @param {WaveEngineJS.Model} model
         */
        this.drawSolid = function (vertices, model) {
            var ambientColor = that.ambientColor,
                context = that.context,
                indexes = model.index,
                pc = that.camera.getPosition(),
                viewProj = that.camera.viewproj,
                hasIllumination = model.hasIllumination;
            if (!hasIllumination) {
                that.context.fillStyle = model.fillColor;
                that.context.strokeStyle = model.strokeColor;
            }

            var w = that.width,
                h = that.height;
            for (var i = indexes.length / 3; i--;) {
                var index = i * 3,
                    p1 = vertices[indexes[index]],
                    p2 = vertices[indexes[index + 1]],
                    p3 = vertices[indexes[index + 2]],
                    v1 = WaveEngineJS.substractV3(p1, p2),
                    v2 = WaveEngineJS.substractV3(p3, p2),
                    n = WaveEngineJS.crossV3(v1, v2);

                WaveEngineJS.normalize(n);

                var c = WaveEngineJS.substractV3(pc, p1);

                var tita = WaveEngineJS.dotV3(c, n);

                if (!model.backfaceCulling || tita < 0) {
                    if (hasIllumination) {
                        var modelColor = model.color,
                            modelColorR = modelColor[0],
                            modelColorG = modelColor[1],
                            modelColorB = modelColor[2],
                            modelColorA = modelColor[3],
                            borderColor = model.borderColor,
                            sat = WaveEngineJS.dotV3(that.light, n);
                        if (sat < 0) {
                            sat = 0;
                        } else if (sat > 1) {
                            sat = 1;
                        }
                        var r = sat * modelColorR + ambientColor[0],
                            g = sat * modelColorG + ambientColor[1],
                            b = sat * modelColorB + ambientColor[2];
                        r = r | r;
                        g = g | g;
                        b = b | b;
                        var color = rgba + r + comma + g + comma + b + comma;
                        that.context.fillStyle = color + modelColorA + close;
                        that.context.strokeStyle = color + borderColor[3] + close;
                    }
                    context.beginPath();

                    var vertex1 = WaveEngineJS.convert(p1, viewProj, w, h),
                        vertex2 = WaveEngineJS.convert(p2, viewProj, w, h),
                        vertex3 = WaveEngineJS.convert(p3, viewProj, w, h),
                        v10 = Math.floor(vertex1[0]),
                        v11 = Math.floor(vertex1[1]);
                    context.moveTo(v10, v11);
                    context.lineTo(Math.floor(vertex2[0]), Math.floor(vertex2[1]));
                    context.lineTo(Math.floor(vertex3[0]), Math.floor(vertex3[1]));
                    context.lineTo(v10, v11);
                    context.closePath();
                    context.fill();
                }
            }

            var polygons = model.poligons;

            for (var i = polygons.length; i--;) {
                var polygon = polygons[i],
                    index = 0,
                    p1 = vertices[polygon[index]],
                    p2 = vertices[polygon[index + 1]],
                    p3 = vertices[polygon[index + 2]],
                    v1 = WaveEngineJS.substractV3(p1, p2),
                    v2 = WaveEngineJS.substractV3(p3, p2),
                    n = WaveEngineJS.crossV3(v1, v2),
                    c = WaveEngineJS.substractV3(pc, p1),
                    tita = WaveEngineJS.dotV3(c, n);

                if (!model.backfaceCulling || tita < 0) {
                    if (hasIllumination) {
                        var sat = WaveEngineJS.dotV3(that.light, n);
                        if (sat < 0) {
                            sat = 0;
                        } else if (sat > 1) {
                            sat = 1;
                        }

                        var r = sat * modelColorR + ambientColor[0],
                            g = sat * modelColorG + ambientColor[1],
                            b = sat * modelColorB + ambientColor[2];

                        r = r | r;
                        g = g | g;
                        b = b | b;

                        var color = rgb + r + comma + g + comma + b + close;
                        context.fillStyle = color;
                        context.strokeStyle = color;
                    }

                    context.beginPath();
                    var orig = WaveEngineJS.convert(vertices[polygon[0]], viewProj, w, h);
                    context.moveTo(orig[0], orig[1]);
                    var ll = polygon.length;
                    for (var j = 1; j < ll; j++) {
                        var aux = WaveEngineJS.convert(vertices[polygon[j]], viewProj, w, h);
                        context.lineTo(aux[0], aux[1]);
                    }
                    context.lineTo(orig[0], orig[1]);
                    context.closePath();
                    context.fill();
                }
            }
        };

        /**
         * Draws the model shadow
         * @param {Array} vertices Model vertices
         * @param {WaveEngineJS.Model} model
         */
        this.drawShadow = function (vertices, model) {
            if (model.hasShadow) {
                var shadowMatrix = WaveEngineJS.multiply(that.shadowMatrix, that.camera.viewproj);
                that.context.fillStyle = "rgb(0,0,0)";
                var indexes = model.index;
                for (var i = 0; i < indexes.length / 3; i++) {
                    var index = i * 3;

                    var p1 = vertices[indexes[index]],
                        p2 = vertices[indexes[index + 1]],
                        p3 = vertices[indexes[index + 2]];
                    that.context.beginPath();

                    var vertex1 = WaveEngineJS.convert(p1, shadowMatrix, that.width, that.height),
                        vertex2 = WaveEngineJS.convert(p2, shadowMatrix, that.width, that.height),
                        vertex3 = WaveEngineJS.convert(p3, shadowMatrix, that.width, that.height);
                    that.context.moveTo(Math.floor(vertex1[0]), Math.floor(vertex1[1]));
                    that.context.lineTo(Math.floor(vertex2[0]), Math.floor(vertex2[1]));
                    that.context.lineTo(Math.floor(vertex3[0]), Math.floor(vertex3[1]));
                    that.context.lineTo(Math.floor(vertex1[0]), Math.floor(vertex1[1]));
                    that.context.closePath();
                    that.context.fill();
                }

                var polygons = model.poligons;
                var l = polygons.length;
                for (var i = 0; i < l; i++) {
                    var polygon = polygons[i],
                        orig = WaveEngineJS.convert(vertices[polygon[0]], shadowMatrix, that.width, that.height);

                    that.context.beginPath();
                    that.context.moveTo(orig[0], orig[1]);
                    var ll = polygon.length;
                    for (var j = 1; j < ll; j++) {
                        var aux = WaveEngineJS.convert(vertices[polygon[j]], shadowMatrix, that.width, that.height);
                        that.context.lineTo(aux[0], aux[1]);
                    }
                    that.context.lineTo(orig[0], orig[1]);
                    that.context.closePath();
                    that.context.fill();
                }
            }
        };

        /**
         * Get the nearest model in a scene from a 2D position
         * @param position
         * @return {*}
         */
        this.getModelInMap = function (position) {
            var nearSource = [position[0], position[1], 0],
                farSource = [position[0], position[1], 1],
                camera = that.camera,
                identity = new WaveEngineJS.MatrixIdentity(),
                nearPoint = camera.unproject(nearSource, camera.view, camera.projection, identity),
                farPoint = camera.unproject(farSource, camera.view, camera.projection, identity),
                direction = WaveEngineJS.substractV4(farPoint, nearPoint);

            WaveEngineJS.normalize(direction);

            var r = new WaveEngineJS.ray(nearPoint, direction),
                minDist = Number.MAX_VALUE,
                dist,
                found = null,
                l = that.model.length;
            for (var i = 0; i < l; i++) {
                var model = that.models[i];
                dist = model.BoundingBox.Intersects(r);

                if (dist != null) {
                    if (dist < minDist) {
                        minDist = dist;
                        found = model;
                    }
                }
            }

            return found;
        };

        /**
         * Get the nearest group model in a scene from a 2D position
         * @param position
         * @return {*}
         */
        this.getGroupModelInMap = function (position) {
            var nearSource = [position[0], position[1], 0],
                farSource = [position[0], position[1], 1],
                camera = that.camera,
                identity = new WaveEngineJS.MatrixIdentity(),
                nearPoint = camera.unproject(nearSource, camera.view, camera.projection, identity),
                farPoint = camera.unproject(farSource, camera.view, camera.projection, identity),
                direction = WaveEngineJS.substractV4(farPoint, nearPoint);

            WaveEngineJS.normalize(direction);

            var r = new WaveEngineJS.ray(nearPoint, direction),
                minDist = Number.MAX_VALUE,
                dist,
                found = null,
                l = that.groupModels.length;
            for (var i = 0; i < l; i++) {
                var model = that.groupModels[i];
                dist = model.BoundingBox.Intersects(r);

                if (dist != null) {
                    if (dist < minDist) {
                        minDist = dist;
                        found = model;
                    }
                }
            }

            return found;
        };
    },

    /**
     * Sorts the models or group models in a z axis
     * @param preSortModels
     * @return {*}
     */
    sortModels:function (preSortModels) {
        if (preSortModels.length <= 1) {
            return preSortModels;
        }
        var pivot = Math.floor(preSortModels / 2),
            less = [],
            greater = [],
            pivotElem = preSortModels.splice(pivot, 1);
        for (var x = 0; x < preSortModels.length; x++) {
            if (preSortModels[x].d <= pivotElem[0].d) {
                less.push(preSortModels[x]);
            } else {
                greater.push(preSortModels[x]);
            }
        }
        return [].concat(WaveEngineJS.sortModels(greater), pivotElem, WaveEngineJS.sortModels(less));
    }
};
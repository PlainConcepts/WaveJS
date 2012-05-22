/*
 * 3D ENGINE - MATRIX
 *
 * Copyright (c) 2012 Plain Concepts (http://www.plainconcepts.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/
 */
"use strict";
var WaveEngineJS = {

    /**
     * Constants to generate colors strings.
     * @type {String}
     */
    rgba:'rgba(',
    rgb:'rgb(',
    comma:',',
    close:')',
    EPSILON:1.401298E-45,
    svgNS:"http://www.w3.org/2000/svg",
    /**
     * Create an instance of Matrix 4x4
     * @return {Matrix}
     * @this {Matrix}
     * @constructor
     */
    Matrix:function () {
        var that = this;
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


        /**
         * Invert the Matrix itself
         * @this {Matrix}
         * @constructor
         */
        this.Invert = function () {
            var num5 = that.position[0];
            var num4 = that.position[1];
            var num3 = that.position[2];
            var num2 = that.position[3];
            var num9 = that.position[4];
            var num8 = that.position[5];
            var num7 = that.position[6];
            var num6 = that.position[7];
            var num17 = that.position[8];
            var num16 = that.position[9];
            var num15 = that.position[10];
            var num14 = that.position[11];
            var num13 = that.position[12];
            var num12 = that.position[13];
            var num11 = that.position[14];
            var num10 = that.position[15];
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
            that.position[0] = num39 * num;
            that.position[4] = num38 * num;
            that.position[8] = num37 * num;
            that.position[12] = num36 * num;
            that.position[1] = -(((num4 * num23) - (num3 * num22)) + (num2 * num21)) * num;
            that.position[5] = (((num5 * num23) - (num3 * num20)) + (num2 * num19)) * num;
            that.position[9] = -(((num5 * num22) - (num4 * num20)) + (num2 * num18)) * num;
            that.position[13] = (((num5 * num21) - (num4 * num19)) + (num3 * num18)) * num;
            var num35 = (num7 * num10) - (num6 * num11);
            var num34 = (num8 * num10) - (num6 * num12);
            var num33 = (num8 * num11) - (num7 * num12);
            var num32 = (num9 * num10) - (num6 * num13);
            var num31 = (num9 * num11) - (num7 * num13);
            var num30 = (num9 * num12) - (num8 * num13);
            that.position[2] = (((num4 * num35) - (num3 * num34)) + (num2 * num33)) * num;
            that.position[6] = -(((num5 * num35) - (num3 * num32)) + (num2 * num31)) * num;
            that.position[10] = (((num5 * num34) - (num4 * num32)) + (num2 * num30)) * num;
            that.position[14] = -(((num5 * num33) - (num4 * num31)) + (num3 * num30)) * num;
            var num29 = (num7 * num14) - (num6 * num15);
            var num28 = (num8 * num14) - (num6 * num16);
            var num27 = (num8 * num15) - (num7 * num16);
            var num26 = (num9 * num14) - (num6 * num17);
            var num25 = (num9 * num15) - (num7 * num17);
            var num24 = (num9 * num16) - (num8 * num17);
            that.position[3] = -(((num4 * num29) - (num3 * num28)) + (num2 * num27)) * num;
            that.position[7] = (((num5 * num29) - (num3 * num26)) + (num2 * num25)) * num;
            that.position[11] = -(((num5 * num28) - (num4 * num26)) + (num2 * num24)) * num;
            that.position[15] = (((num5 * num27) - (num4 * num25)) + (num3 * num24)) * num;
        };

        return this;
    },

    /**
     * Assign Identity Matrix to itself
     * @this {Matrix}
     */
    MatrixIdentity:function () {
        var matrix = new WaveEngineJS.Matrix();
        var position = matrix.position;
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
        return matrix;
    },
    /**
     * Create a translation matrix.
     * @param {Array(3)} vector3 The new position.
     * @this {Matrix}
     * @constructor
     */
    CreateTranslation:function (vector3) {
        var matrix = new WaveEngineJS.Matrix();
        var position = matrix.position;
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
        return matrix;
    },

    /**
     * Create Scale Matrix
     * @param {number} xScale The scale in x-axis
     * @param {number} yScale The scale in y-axis
     * @param {number} zScale The scale in z-axis
     * @this {Matrix}
     * @constructor
     */
    CreateScale:function (xScale, yScale, zScale) {
        var matrix = new WaveEngineJS.Matrix();
        var position = matrix.position;
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
        return matrix;
    },

    /**
     * Create a Shadow Matrix
     * @param {Array(3)} plane Plane where Shadow will be projected
     * @param {Array(3)} light Light position
     * @param {number} d distance to plane.
     * @return {Matrix}
     */
    CreateShadowMatrix:function (plane, light, d) {
        var matrix = new WaveEngineJS.Matrix();
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
    },

    /**
     * Generate Perspective Field Of View Matrix.
     * @param {number} fieldOfView
     * @param {number} aspectRatio
     * @param {number} nearPlaneDistance
     * @param {number} farPlaneDistance
     * @return {Matrix}
     */
    CreatePerspectiveFieldOfView:function (fieldOfView, aspectRatio, nearPlaneDistance, farPlaneDistance) {
        var matrix = new WaveEngineJS.Matrix();
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
    },

    /**
     * Create View Matrix for the scene.
     * @param {Array(3)} cameraPosition Array with the camera position
     * @param {Array(3)} cameraTarget Array with the target position
     * @param {Array(3)} cameraUpVector Array with the camera's vector up
     * @return {Matrix}
     * @constructor
     */
    CreateLookAt:function (cameraPosition, cameraTarget, cameraUpVector) {
        var matrix = new WaveEngineJS.Matrix();
        var vector = WaveEngineJS.SubstractV3(cameraPosition, cameraTarget);
        WaveEngineJS.Normalize(vector);
        var vector2 = WaveEngineJS.CrossV3(cameraUpVector, vector);
        WaveEngineJS.Normalize(vector2);
        var vector3 = WaveEngineJS.CrossV3(vector, vector2);
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
        position[12] = -WaveEngineJS.DotV3(vector2, cameraPosition);
        position[13] = -WaveEngineJS.DotV3(vector3, cameraPosition);
        position[14] = -WaveEngineJS.DotV3(vector, cameraPosition);
        position[15] = 1;
        return matrix;
    },

    /**
     * Create a matrix (4x4) from a Quaternion.
     * @param {Quaternion} quaternion
     * @return {Matrix}
     */
    CreateFromQuaternion:function (quaternion) {
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
    },

    /**
     * Multiply two matrix
     * @param {Matrix} matrix1
     * @param {Matrix} matrix2
     * @return {Matrix}
     */
    Multiply:function (matrix1, matrix2) {
        var matrix = new WaveEngineJS.Matrix();
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
    },

    /**
     * Convert a 3D point in a projected 2D point.
     * @param {Array(4)} pos 3D point to Convert.
     * @param {Matrix} worldviewproj World view projection matrix
     * @param {number} screenWidth Screen width
     * @param {number} screenHeight Screen Height
     * @return {Array(2)}
     */
    Convert:function (pos, worldviewproj, screenWidth, screenHeight) {
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
    },

    /**
     * Normalize a vector
     * @this {Array}
     */
    Normalize:function (vector) {
        if (vector.length === 2) {
            WaveEngineJS.NormalizeVector2(vector);
        }
        else if (vector.length === 3) {
            WaveEngineJS.NormalizeVector3(vector);
        }
        else if (vector.length === 4) {
            WaveEngineJS.NormalizeVector4(vector);
        }
    },

    /**
     * Normalize a vector2
     * @param {Array(2)} value
     */
    NormalizeVector2:function (value) {
        var num2 = (value[0] * value[0]) + (value[1] * value[1]);
        var num = 1 / (Math.sqrt(num2));
        value[0] *= num;
        value[1] *= num;
    },

    /**
     * Normalize a vector3
     * @param value
     */
    NormalizeVector3:function (value) {
        var x = value[0];
        var y = value[1];
        var z = value[2];
        var num2 = ((x * x) + (y * y)) + (z * z);
        var num = 1 / Math.sqrt(num2);

        value[0] = x * num;
        value[1] = y * num;
        value[2] = z * num;
    },

    /**
     * Normalize a vector4
     * @param value
     */
    NormalizeVector4:function (value) {
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
    },

    /**
     * Invert an array
     * @this {Array(3)};
     * @constructor
     */
    Invert:function (vector3) {
        vector3[0] = -vector3[0];
        vector3[1] = -vector3[1];
        vector3[2] = -vector3[2];
    },

    /**
     * Divide each element of the array(4) by divider
     * @param {number} divider
     * @this {Array}
     */
    Divide:function (vector4, divider) {
        var num = 1 / divider;
        vector4[0] = vector4[0] * num;
        vector4[1] = vector4[1] * num;
        vector4[2] = vector4[2] * num;
        vector4[3] = vector4[3] * num;
    },

    /**
     * Substract two arrays
     * @param {Array(3)}vector1
     * @param {Array(3)}vector2
     * @return {Array}
     * @constructor
     */
    SubstractV3:function (vector1, vector2) {
        return [vector1[0] - vector2[0],
            vector1[1] - vector2[1],
            vector1[2] - vector2[2]];
    },

    /**
     * Cross product for two Array(3)
     * @param {Array(3)} vector1
     * @param {Array(3)} vector2
     * @return {Array}
     */
    CrossV3:function (vector1, vector2) {
        var x = (vector1[1] * vector2[2]) - (vector1[2] * vector2[1]);
        var y = (vector1[2] * vector2[0]) - (vector1[0] * vector2[2]);
        var z = (vector1[0] * vector2[1]) - (vector1[1] * vector2[0]);
        return [x, y, z];
    },

    /**
     * Dot product for two Array(3)
     * @param {Array(3)} vector1
     * @param {Array(3)} vector2
     * @return {number}
     * @constructor
     */
    DotV3:function (vector1, vector2) {
        return (vector1[0] * vector2[0]) +
            (vector1[1] * vector2[1]) +
            (vector1[2] * vector2[2]);
    },

    /**
     * Transform a 3D point respect a Transformation Matrix
     * @param {Array(3)} position Point Position
     * @param {Matrix} matrix Transformation Matrix.
     * @return {Array}
     */
    TransformV3Matrix:function (position, matrix) {
        var p = matrix.position;
        var x = position[0];
        var y = position[1];
        var z = position[2];
        var num3 = (((x * p[0]) + (y * p[4])) + (z * p[8])) + p[12];
        var num2 = (((x * p[1]) + (y * p[5])) + (z * p[9])) + p[13];
        var num = (((x * p[2]) + (y * p[6])) + (z * p[10])) + p[14];
        return [num3, num2, num];
    },


    TransformV4Matrix:function (vector, matrix) {
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
    },

    Max:function (value1, value2) {
        return [(value1[0] > value2[0]) ? value1[0] : value2[0],
            (value1[1] > value2[1]) ? value1[1] : value2[1],
            (value1[2] > value2[2]) ? value1[2] : value2[2],
            (value1[3] > value2[3]) ? value1[3] : value2[3]];
    },

    Min:function (value1, value2) {
        return [(value1[0] < value2[0]) ? value1[0] : value2[0],
            (value1[1] < value2[1]) ? value1[1] : value2[1],
            (value1[2] < value2[2]) ? value1[2] : value2[2],
            (value1[3] < value2[3]) ? value1[3] : value2[3]];
    },

    SubstractV4:function (value1, value2) {
        return [value1[0] - value2[0],
            value1[1] - value2[1],
            value1[2] - value2[2],
            value1[3] - value2[3]];
    },

    CreateFromYawPitchRoll:function (yaw, pitch, roll) {
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

        var matrix = new WaveEngineJS.Matrix();
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
    },

    /*
     * 3D ENGINE - BOUNDING BOX
     *
     * Copyright (c) 2012 Plain Concepts (http://www.plainconcepts.com)
     * Dual licensed under the MIT (MIT-LICENSE.txt)
     * and GPL (GPL-LICENSE.txt) licenses.
     *
     * http://docs.jquery.com/
     */

    BoundingBox:function () {
        var that = this;
        this.min = new Array();
        this.max = new Array();

        this.Intersects = function (ray) {
            var num = 0;
            var maxValue = Number.MAX_VALUE;
            if (Math.abs(ray.direction[0]) < 1E-06) {
                if ((ray.position[0] < that.min[0]) || (ray.position[0] > that.max[0])) {
                    return null;
                }
            }
            else {
                var num11 = 1 / ray.direction[0];
                var num8 = (that.min[0] - ray.position[0]) * num11;
                var num7 = (that.max[0] - ray.position[0]) * num11;
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
                var num10 = 1 / ray.direction[1];
                var num6 = (that.min[1] - ray.position[1]) * num10;
                var num5 = (that.max[1] - ray.position[1]) * num10;
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
                var num9 = 1 / ray.direction[2];
                var num4 = (that.min[2] - ray.position[2]) * num9;
                var num3 = (that.max[2] - ray.position[2]) * num9;
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

        this.GetConers = function () {
            var min = that.min;
            var max = that.max;
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


    /*
     * 3D ENGINE - RAY
     *
     * Copyright (c) 2012 Plain Concepts (http://www.plainconcepts.com)
     * Dual licensed under the MIT (MIT-LICENSE.txt)
     * and GPL (GPL-LICENSE.txt) licenses.
     *
     * http://docs.jquery.com/
     */

    Ray:function (position, direction) {
        this.position = position;
        this.direction = direction;
    },

    /*
     * 3D ENGINE - CAMERA
     *
     * Copyright (c) 2012 Plain Concepts (http://www.plainconcepts.com)
     * Dual licensed under the MIT (MIT-LICENSE.txt)
     * and GPL (GPL-LICENSE.txt) licenses.
     *
     * http://docs.jquery.com/
     */


    Camera:function (width, height) {
        var that = this;
        this.cameraPosition = [0, 0, 15];
        this.cameraTarget = [0, 0, 0];
        this.cameraUpVector = [0, 1, 0];
        this.width = width;
        this.height = height;
        this.aspectRatio = this.width / this.height;
        this.view = WaveEngineJS.CreateLookAt(this.cameraPosition, this.cameraTarget, this.cameraUpVector);
        this.projection = WaveEngineJS.CreatePerspectiveFieldOfView(Math.PI / 4, this.aspectRatio, 1, 1000);
        this.viewproj = WaveEngineJS.Multiply(this.view, this.projection);

        this.GetPosition = function () {
            return that.cameraPosition;
        };

        this.ChangePerspectiveFieldOfView = function (fieldOfView) {
            that.projection = fieldOfView;
            that.viewproj = WaveEngineJS.Multiply(that.view, that.projection);
        };

        this.ChangeAspectRatio = function (aspectRatio) {
            that.aspectRatio = aspectRatio;
            that.projection = WaveEngineJS.CreatePerspectiveFieldOfView(Math.PI / 4, that.aspectRatio, 1, 1000);
            that.viewproj = WaveEngineJS.Multiply(that.view, that.projection);
        };

        this.ChangePerspectiveFieldOfView = function (fieldOfView, aspectRatio, nearPlaneDistance, farPlaneDistance) {
            that.projection = WaveEngineJS.CreatePerspectiveFieldOfView(fieldOfView, aspectRatio, nearPlaneDistance, farPlaneDistance);
            that.viewproj = WaveEngineJS.Multiply(that.view, that.projection);
        };

        this.ChangeCameraPosition = function (position) {
            that.cameraPosition = position;
            that.ChangeViewProj();
        };

        this.ChangeCameraTarget = function (target) {
            that.cameraTarget = target;
            that.ChangeViewProj();
        };

        this.ChangeCameraUpVector = function (upVector) {
            that.cameraUpVector = upVector;
            that.ChangeViewProj();
        };

        this.ChangeLookAt = function (cameraPosition, cameraTarget, cameraUpVector) {
            that.cameraPosition = cameraPosition;
            that.cameraTarget = cameraTarget;
            that.cameraUpVector = cameraUpVector;
            that.ChangeViewProj();
        };

        this.ChangeViewProj = function () {
            that.view = WaveEngineJS.CreateLookAt(that.cameraPosition, that.cameraTarget, that.cameraUpVector);
            that.viewproj = WaveEngineJS.Multiply(that.view, that.projection);
        };

        this.WithinEpsilon = function (a, b) {
            var num = a - b;
            return (-WaveEngineJS.EPSILON <= num) && (num <= WaveEngineJS.EPSILON);
        };

        this.Unproject = function (source, view, projection, world) {
            var minz = 0;
            var maxz = 1;

            var matrix = WaveEngineJS.Multiply(WaveEngineJS.Multiply(world, view), projection);
            matrix.Invert();
            source[0] = (((source[0]) / (that.width)) * 2) - 1;
            source[1] = -((((source[1]) / (that.height)) * 2) - 1);
            source[2] = (source[2] - minz) / (maxz - minz);
            var vector = WaveEngineJS.TransformV3Matrix(source, matrix);
            var vector4 = [vector[0], vector[1], vector[2], 1];
            var position = matrix.position;
            var a = (((source[0] * position[3]) + (source[1] * position[7])) + (source[2] * position[11])) + position[15];
            if (!that.WithinEpsilon(a, 1)) {
                WaveEngineJS.Divide(vector4, a);
            }
            return vector4;
        };

        this.RotateCamera = function (anglex, angley, radio) {
            var v = [Math.cos(anglex), Math.sin(angley), Math.sin(anglex) - Math.cos(angley)];
            WaveEngineJS.Normalize(v);

            var position = [v[0] * radio, v[1] * radio, v[2] * radio];
            that.ChangeCameraPosition(position);
        };
    },


    /*
     * 3D ENGINE - CAMERA
     *
     * Copyright (c) 2012 Plain Concepts (http://www.plainconcepts.com)
     * Dual licensed under the MIT (MIT-LICENSE.txt)
     * and GPL (GPL-LICENSE.txt) licenses.
     *
     * http://docs.jquery.com/
     */

    SphereCamera:function (width, height) {
        var that = this;
        this.cameraPosition = [0, 0, 15];
        this.cameraTarget = [0, 0, 0];
        this.cameraUpVector = [0, 1, 0];
        this.size = [width, height];
        this.offset = [0, 0];
        this.aspectRatio = width / height;
        this.view = WaveEngineJS.CreateLookAt(this.cameraPosition, this.cameraTarget, this.cameraUpVector);
        this.projection = WaveEngineJS.CreatePerspectiveFieldOfView(Math.PI / 3, this.aspectRatio, 1, 1000);
        this.viewproj = WaveEngineJS.Multiply(this.view, this.projection);
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

        this.resetCamera = function () {
            that.qNow = new WaveEngineJS.Quaternion().Identity();
            that.qDown = new WaveEngineJS.Quaternion().Identity();
            that.downPosition = [0, 0, 0];
            that.position = [0, 0, 15];
        };

        this.ChangeFieldOfView = function (fieldOfView) {
            that.aspectRatio = that.aspectRatio;
            that.projection = WaveEngineJS.CreatePerspectiveFieldOfView(Math.PI / 4, that.aspectRatio, 1, 1000);
            that.viewproj = WaveEngineJS.Multiply(that.view, that.projection);
        };

        this.ChangeAspectRatio = function (aspectRatio) {
            that.aspectRatio = aspectRatio;
            that.projection = WaveEngineJS.CreatePerspectiveFieldOfView(Math.PI / 4, that.aspectRatio, 1, 1000);
            that.viewproj = WaveEngineJS.Multiply(that.view, that.projection);
        };

        this.ChangePerspectiveFieldOfView = function (fieldOfView, aspectRatio, nearPlaneDistance, farPlaneDistance) {
            that.projection = WaveEngineJS.CreatePerspectiveFieldOfView(fieldOfView, aspectRatio, nearPlaneDistance, farPlaneDistance);
            that.viewproj = WaveEngineJS.Multiply(that.view, that.projection);
        };

        this.ChangeCameraPosition = function (position) {
            that.cameraPosition = position;
            that.position = position;
            that.ChangeViewProj();
        };

        this.ChangeCameraTarget = function (target) {
            that.cameraTarget = target;
            that.ChangeViewProj();
        };

        this.ChangeCameraUpVector = function (upVector) {
            that.cameraUpVector = upVector;
            that.ChangeViewProj();
        };

        this.ChangeLookAt = function (cameraPosition, cameraTarget, cameraUpVector) {
            that.cameraPosition = cameraPosition;
            that.cameraTarget = cameraTarget;
            that.cameraUpVector = cameraUpVector;
            that.ChangeViewProj();
        };

        this.ChangeViewProj = function () {
            that.view = WaveEngineJS.CreateLookAt(that.cameraPosition, that.cameraTarget, that.cameraUpVector);
            that.viewproj = WaveEngineJS.Multiply(that.view, that.projection);
        };

        this.WithinEpsilon = function (a, b) {
            var num = a - b;
            return (-WaveEngineJS.EPSILON <= num) && (num <= WaveEngineJS.EPSILON);
        };

        this.Unproject = function (source, view, projection, world) {
            var minz = 0;
            var maxz = 1;

            var matrix = WaveEngineJS.Multiply(WaveEngineJS.Multiply(world, view), projection);
            matrix.Invert();

            source[0] = (((source[0]) / (that.size[0])) * 2) - 1;
            source[1] = -((((source[1]) / (that.size[1])) * 2) - 1);
            source[2] = (source[2] - minz) / (maxz - minz);
            var vector = WaveEngineJS.TransformV3Matrix(source, matrix);
            var vector4 = [vector[0], vector[1], vector[2], 1];
            var position = matrix.position;
            var a = (((source[0] * position[3]) + (source[1] * position[7])) + (source[2] * position[11])) + position[15];
            if (!that.WithinEpsilon(a, 1)) {
                WaveEngineJS.Divide(vector4, a);
            }
            return vector4;
        };

        this.GetViewMatrix = function () {
            var rot = WaveEngineJS.CreateFromQuaternion(that.qNow);
            rot.Invert();
            that.position = WaveEngineJS.TransformV3Matrix(that.cameraPosition, rot);
            return WaveEngineJS.CreateLookAt(that.position, that.cameraTarget, WaveEngineJS.TransformV3Matrix(that.cameraUpVector, rot));
        };

        this.GetPosition = function () {
            return that.position;
        };

        this.ScreenToVector = function (screenX, screenY) {
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

        this.QuatFromBallPoints = function (from, to) {
            var dot = WaveEngineJS.DotV3(from, to);
            var qPart = WaveEngineJS.CrossV3(from, to);
            return [qPart[0], qPart[1], qPart[2], dot];
        };


        this.OnRotateCamera = function (eventType, position) {
            if (eventType == "mousedown" || eventType == "MSPointerDown" || eventType == "touchdown") {
                that.isDraggin = true;
                that.qDown = [that.qNow[0], that.qNow[1], that.qNow[2], that.qNow[3]];
                that.downPosition = that.ScreenToVector(position.x, position.y);
                that.downPosition2D = position;
            } else if (eventType == "mouseup" || eventType == "MSPointerUp" || eventType == "touchup" || eventType == "mouseout") {
                that.isDraggin = false;
            }

            if ((eventType == "mousemove" || eventType == "MSPointerMove" || eventType == "touchmove") && that.isDraggin) {
                that.currentPosition2D = position;
                that.currentPosition = that.ScreenToVector(position.x, position.y);
                that.qNow = WaveEngineJS.QuaternionProduct(that.QuatFromBallPoints(that.downPosition, that.currentPosition), that.qDown);
                that.view = that.GetViewMatrix();
                that.viewproj = WaveEngineJS.Multiply(that.view, that.projection);
            }
            return that.isDraggin;
        };
    },


    Quaternion:function (x, y, z, w) {
        this[0] = x;
        this[1] = y;
        this[2] = z;
        this[3] = w;

        this.Identity = function () {
            return new WaveEngineJS.Quaternion(0, 0, 0, 1);
        };
    },


    QuaternionProduct:function (quaternion1, quaternion2) {
        var quaternion = new WaveEngineJS.Quaternion();
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
    },

    /*
     * 3D ENGINE - MODEL
     *
     * Copyright (c) 2012 Plain Concepts (http://www.plainconcepts.com)
     * Dual licensed under the MIT (MIT-LICENSE.txt)
     * and GPL (GPL-LICENSE.txt) licenses.
     *
     * http://docs.jquery.com/
     */

    Point3D:function (x, y, z) {
        this.v3D = [x, y, z, 1];
    },

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
        this.boundingBox = new WaveEngineJS.BoundingBox();
        this.debugLines = false;
        this.hasIllumination = false;
        this.color = [0, 0, 0, 1];
        this.borderColor = [0, 0, 0, 1];
        this.ChangeColor = function (fillColor, borderColor) {
            that.color = fillColor;
            that.borderColor = borderColor;
            that.UpdateColor();
        };

        this.UpdateColor = function () {
            var c = that.color;
            var v = that.borderColor;
            var rgba = WaveEngineJS.rgba;
            var comma = WaveEngineJS.comma;
            var close = WaveEngineJS.close;
            that.strokeColor = rgba + v[0] + comma + v[1] + comma + v[2] + comma + v[3] + close;
            that.fillColor = rgba + c[0] + comma + c[1] + comma + c[2] + comma + c[3] + close;
        };

        this.AddVertex = function (x, y, z) {
            var position = that.vertices.length;
            that.vertices[position] = new WaveEngineJS.Point3D(x, y, z);
            return position;
        };

        this.AddTriangle = function (p1, p2, p3) {
            var position = that.index.length;
            that.index[position] = p1;
            that.index[position + 1] = p2;
            that.index[position + 2] = p3;
        };

        this.AddPolygon = function (poligon) {
            var position = that.poligons.length;
            var vertices = new Array();
            var l = poligon.length;
            for (var i = 0; i < l; i++) {
                vertices[i] = poligon[i];
            }
            that.poligons[position] = vertices;
        };

        this.RefreshWorld = function () {
            var rotationMatrix = WaveEngineJS.CreateFromYawPitchRoll(that.rotation[1], that.rotation[0], that.rotation[2]);
            var scaleMatrix = WaveEngineJS.CreateScale(that.scale[0], that.scale[1], that.scale[2]);
            var translationMatrix = WaveEngineJS.CreateTranslation(that.position);
            that.world = WaveEngineJS.Multiply(scaleMatrix, translationMatrix);
            that.world = WaveEngineJS.Multiply(rotationMatrix, that.world);
            that.refreshedBoudingBox = false;
        };

        this.ChangePosition = function (x, y, z) {
            that.position[0] = x;
            that.position[1] = y;
            that.position[2] = z;
            that.RefreshWorld();
        };

        this.ChangeRotation = function (x, y, z) {
            that.rotation[0] = x;
            that.rotation[1] = y;
            that.rotation[2] = z;
            that.RefreshWorld();
        };

        this.ChangeScale = function (x, y, z) {
            that.scale[0] = x;
            that.scale[1] = y;
            that.scale[2] = z;
            that.RefreshWorld();
        };

        this.RefreshBoundingBox = function (vectors) {
            if (!that.refreshedBoudingBox) {
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
                    vector3 = WaveEngineJS.Min(vector3, vector4);
                    vector2 = WaveEngineJS.Max(vector2, vector4);
                }

                that.boundingBox.min = vector3;
                that.boundingBox.max = vector2;
                that.refreshedBoudingBox = true;
            }
        };

        this.GetDistanceToCamera = function (vector) {
            return Math.sqrt(((vector[0] - that.position[0]) * (vector[0] - that.position[0])) + ((vector[1] - that.position[1]) * (vector[1] - that.position[1])) + ((vector[2] - that.position[2]) * (vector[2] - that.position[2])));
        };
    },


    GroupModel:function (id) {
        var that = this;
        this.id = id;
        this.models = new Array();
        this.world = new WaveEngineJS.MatrixIdentity();
        this.position = [0, 0, 0];
        this.rotation = [0, 0, 0];
        this.scale = [1, 1, 1];
        this.boundingBox = new WaveEngineJS.BoundingBox();
        this.refreshedBoudingBox = false;

        this.AddModel = function (model) {
            that.models[that.models.length] = model;
        };

        this.ChangePosition = function (x, y, z) {
            that.position[0] = x;
            that.position[1] = y;
            that.position[2] = z;
            that.RefreshWorld();
        };

        this.ChangeRotation = function (x, y, z) {
            that.rotation[0] = x;
            that.rotation[1] = y;
            that.rotation[2] = z;
            that.RefreshWorld();
        };

        this.ChangeScale = function (x, y, z) {
            that.scale[0] = x;
            that.scale[1] = y;
            that.scale[2] = z;
            that.RefreshWorld();
        };

        this.RefreshWorld = function () {
            var rotationMatrix = WaveEngineJS.CreateFromYawPitchRoll(that.rotation[1], that.rotation[0], that.rotation[2]);
            var scaleMatrix = WaveEngineJS.CreateScale(that.scale[0], that.scale[1], that.scale[2]);
            var translationMatrix = WaveEngineJS.CreateTranslation(that.position);

            that.world = WaveEngineJS.Multiply(scaleMatrix, translationMatrix);
            that.world = WaveEngineJS.Multiply(rotationMatrix, that.world);

            var models = that.models;
            var l = models.length;
            for (var i = 0; i < l; i++) {
                models[i].RefreshWorld();
                var world = models[i].world;
                models[i].world = WaveEngineJS.Multiply(world, that.world);
            }
            that.refreshedBoudingBox = false;
        };

        this.RefreshBoundingBox = function (vectors) {
            if (!that.refreshedBoudingBox) {
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
                    vector3 = WaveEngineJS.Min(vector3, vector4);
                    vector2 = WaveEngineJS.Max(vector2, vector4);
                }

                that.boundingBox.min = vector3;
                that.boundingBox.max = vector2;
                that.refreshedBoudingBox = true;
            }
        };

        this.GetDistanceToCamera = function (vector) {
            return Math.sqrt(((vector[0] - that.position[0]) * (vector[0] - that.position[0])) + ((vector[1] - that.position[1]) * (vector[1] - that.position[1])) + ((vector[2] - that.position[2]) * (vector[2] - that.position[2])));
        };
    },


    /*
     * 3D ENGINE - BOUNDING BOX
     *
     * Copyright (c) 2012 Plain Concepts (http://www.plainconcepts.com)
     * Dual licensed under the MIT (MIT-LICENSE.txt)
     * and GPL (GPL-LICENSE.txt) licenses.
     *
     * http://docs.jquery.com/
     */



    Scene:function (canvas) {
        var that = this;
        var rgba = WaveEngineJS.rgba;
        var rgb = WaveEngineJS.rgb;
        var comma = WaveEngineJS.comma;
        var close = WaveEngineJS.close;
        this.models = new Array();
        this.groupModels = new Array();
        this.camera = new WaveEngineJS.Camera(canvas.width, canvas.height);
        this.light = [150, 150, 150];
        WaveEngineJS.Invert(this.light);
        this.ambientColor = [47, 79, 79];
        this.shadowMatrix = WaveEngineJS.CreateShadowMatrix([0, 1, 0], this.light, 0);
        WaveEngineJS.Normalize(this.light);
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

        this.AddCamera = function (camera) {
            that.camera = camera;
        };

        this.AddModel = function (model) {
            var position = that.models.length;
            that.models[position] = model;
            return position;
        };

        this.AddGroupModel = function (groupModel) {
            var position = that.groupModels.length;
            that.groupModels[position] = groupModel;
            return position;
        };

        this.ChangeLight = function (x, y, z) {
            that.light[0] = x;
            that.light[1] = y;
            that.light[2] = z;
            WaveEngineJS.Invert(that.light);
            that.shadowMatrix = WaveEngineJS.CreateShadowMatrix([0, 1, 0], that.light, 0);
            WaveEngineJS.Normalize(that.light);
        };

        this.RenderDebugLines = function (model) {
            var corners = model.boundingBox.GetConers();
            var vcorners = new Array();
            var l = vcorners.length;
            for (var j = 0; j < l; j++) {
                vcorners[j] = WaveEngineJS.Convert(corners[j], that.camera.viewproj, that.width, that.height);
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

        this.Render = function (type) {
            that.ClearScreen();
            var cp = that.camera.GetPosition();
            var models = that.models;
            var groupModels = that.groupModels;
            var preSortModels = new Array();
            var preSortGroupModels = new Array();
            var sortModels;
            var sortGroupModes;
            var l = models.length;
            for (var i = 0; i < l; i++) {
                preSortModels[i] = { d:(models[i].GetDistanceToCamera(cp) * 1000), model:models[i] };
            }

            l = groupModels.length;
            for (var i = 0; i < l; i++) {
                preSortGroupModels[i] = { d:groupModels[i].GetDistanceToCamera(cp), groupModel:groupModels[i] };
            }

            sortModels = WaveEngineJS.SortModels(preSortModels);
            sortGroupModes = WaveEngineJS.SortModels(preSortGroupModels);

            l = sortModels.length;
            for (var i = 0; i < l; i++) {
                var model = sortModels[i].model;

                var vertices = new Array();
                var ll = model.vertices.length;
                for (var j = 0; j < ll; j++) {
                    vertices[j] = WaveEngineJS.TransformV4Matrix(model.vertices[j].v3D, model.world);
                }

                model.RefreshBoundingBox(vertices);

                if (that.showDebugLines) {
                    that.RenderDebugLines(model);
                }
                switch (type) {
                    case that.POINTS:
                        that.DrawPoints(vertices);
                        break;
                    case that.WIRE:
                        that.context.beginPath();
                        that.DrawWire(vertices, model);
                        that.context.closePath();
                        break;
                    case that.SOLID:
                        that.DrawShadow(vertices, model);
                        that.DrawSolid(vertices, model);
                        that.DrawWire(vertices, model);
                        break;
                    default:
                        that.DrawPoints(vertices);
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
                    var vertices = new Array();
                    for (var j = 0; j < model.vertices.length; j++) {
                        vertices[j] = WaveEngineJS.TransformV4Matrix(model.vertices[j].v3D, model.world);
                        totalVertices[totalVertices.length] = vertices[j];
                    }
                    modelsVertices[k] = vertices;
                }

                groupModel.RefreshBoundingBox(totalVertices);
                if (that.showDebugLines) {
                    that.RenderDebugLines(groupModel);
                    type = that.WIRE;
                }

                for (var k = 0; k < ll; k++) {
                    switch (type) {
                        case that.POINTS:
                            that.DrawPoints(vertices);
                            break;
                        case that.WIRE:
                            that.context.beginPath();
                            that.context.strokeStyle = "black";
                            that.context.beginPath();
                            that.DrawWire(modelsVertices[k], models[k]);
                            that.context.closePath();
                            break;
                        case that.SOLID:
                            that.DrawShadow(modelsVertices[k], models[k]);
                            that.DrawSolid(modelsVertices[k], models[k]);
                            that.DrawWire(modelsVertices[k], models[k]);
                            break;
                        default:
                            that.DrawPoints(vertices);
                            break;
                    }
                }
            }
        };

        this.ClearScreen = function () {
            that.context.clearRect(0, 0, that.width, that.height);
        };

        this.DrawPoints = function (vertices) {
            that.context.beginPath();
            that.context.strokeStyle = "black";
            for (var i = 0; i < vertices.length; i++) {
                that.context.moveTo(vertices[i][0], vertices[i][1]);
                that.context.lineTo(vertices[i][0] + 1, vertices[i][1] + 1);
            }
            that.context.stroke();
            that.context.closePath();
        };

        this.DrawWire = function (vertices, model) {
            var indexes = model.index;
            var pc = that.camera.GetPosition();
            var borderColor = model.borderColor;
            that.context.strokeStyle = rgba + borderColor[0] + comma + borderColor[1] + comma + borderColor[2] + comma + borderColor[3] + close;
            for (var i = 0; i < indexes.length / 3; i++) {
                var index = i * 3;

                var p1 = vertices[indexes[index]];
                var p2 = vertices[indexes[index + 1]];
                var p3 = vertices[indexes[index + 2]];

                var v1 = WaveEngineJS.SubstractV3(p1, p2);
                var v2 = WaveEngineJS.SubstractV3(p3, p2);

                var n = WaveEngineJS.CrossV3(v1, v2);

                var c = WaveEngineJS.SubstractV3(pc, p1);

                var tita = WaveEngineJS.DotV3(c, n);

                if (!model.backfaceCulling || tita < 0) {
                    var vertex1 = WaveEngineJS.Convert(p1, that.camera.viewproj, that.width, that.height);
                    var vertex2 = WaveEngineJS.Convert(p2, that.camera.viewproj, that.width, that.height);
                    var vertex3 = WaveEngineJS.Convert(p3, that.camera.viewproj, that.width, that.height);
                    that.context.moveTo(vertex1[0], vertex1[1]);
                    that.context.lineTo(vertex2[0], vertex2[1]);
                    that.context.lineTo(vertex3[0], vertex3[1]);
                    that.context.lineTo(vertex1[0], vertex1[1]);
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

                var v1 = WaveEngineJS.SubstractV3(p1, p2);
                var v2 = WaveEngineJS.SubstractV3(p3, p2);

                var n = WaveEngineJS.CrossV3(v1, v2);

                var c = WaveEngineJS.SubstractV3(pc, p1);

                var tita = WaveEngineJS.DotV3(c, n);

                if (!model.backfaceCulling || tita < 0) {
                    var orig = WaveEngineJS.Convert(vertices[poligon[0]], that.camera.viewproj, that.width, that.height);
                    that.context.moveTo(orig[0], orig[1]);
                    var ll = poligon.length;
                    for (var j = 1; j < ll; j++) {
                        var aux = WaveEngineJS.Convert(vertices[poligon[j]], that.camera.viewproj, that.width, that.height);
                        that.context.lineTo(aux[0], aux[1]);
                    }
                    that.context.lineTo(orig[0], orig[1]);
                }
            }
            that.context.stroke();
        };

        this.DrawSolid = function (vertices, model) {
            var ambientColor = that.ambientColor;
            var context = that.context;
            var indexes = model.index;
            var pc = that.camera.GetPosition();
            var viewProj = that.camera.viewproj;
            var hasIllumination = model.hasIllumination;
            if (!hasIllumination) {
                that.context.fillStyle = model.fillColor;
                that.context.strokeStyle = model.strokeColor;
            }

            var w = that.width;
            var h = that.height;
            for (var i = indexes.length / 3; i--;) {
                var index = i * 3;

                var p1 = vertices[indexes[index]];
                var p2 = vertices[indexes[index + 1]];
                var p3 = vertices[indexes[index + 2]];

                var v1 = WaveEngineJS.SubstractV3(p1, p2);
                var v2 = WaveEngineJS.SubstractV3(p3, p2);

                var n = WaveEngineJS.CrossV3(v1, v2);
                WaveEngineJS.Normalize(n);
                var c = WaveEngineJS.SubstractV3(pc, p1);

                var tita = WaveEngineJS.DotV3(c, n);

                if (!model.backfaceCulling || tita < 0) {
                    if (hasIllumination) {
                        var modelColor = model.color;
                        var modelColorR = modelColor[0];
                        var modelColorG = modelColor[1];
                        var modelColorB = modelColor[2];
                        var modelColorA = modelColor[3];
                        var borderColor = model.borderColor;
                        var sat = WaveEngineJS.DotV3(that.light, n);
                        if (sat < 0) {
                            sat = 0;
                        } else if (sat > 1) {
                            sat = 1;
                        }
                        var r = sat * modelColorR + ambientColor[0];
                        var g = sat * modelColorG + ambientColor[1];
                        var b = sat * modelColorB + ambientColor[2];
                        r = r | r;
                        g = g | g;
                        b = b | b;
                        var color = rgba + r + comma + g + comma + b + comma;
                        that.context.fillStyle = color + modelColorA + close;
                        that.context.strokeStyle = color + borderColor[3] + close;
                    }
                    context.beginPath();

                    var vertex1 = WaveEngineJS.Convert(p1, viewProj, w, h);
                    var vertex2 = WaveEngineJS.Convert(p2, viewProj, w, h);
                    var vertex3 = WaveEngineJS.Convert(p3, viewProj, w, h);
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

            for (var i = poligons.length; i--;) {
                var poligon = poligons[i];
                var index = 0;
                var p1 = vertices[poligon[index]];
                var p2 = vertices[poligon[index + 1]];
                var p3 = vertices[poligon[index + 2]];

                var v1 = WaveEngineJS.SubstractV3(p1, p2);
                var v2 = WaveEngineJS.SubstractV3(p3, p2);

                var n = WaveEngineJS.CrossV3(v1, v2);

                var c = WaveEngineJS.SubstractV3(pc, p1);

                var tita = WaveEngineJS.DotV3(c, n);

                if (!model.backfaceCulling || tita < 0) {
                    if (hasIllumination) {
                        var sat = WaveEngineJS.DotV3(that.light, n);
                        if (sat < 0) {
                            sat = 0;
                        } else if (sat > 1) {
                            sat = 1;
                        }

                        var r = sat * modelColorR + ambientColor[0];
                        var g = sat * modelColorG + ambientColor[1];
                        var b = sat * modelColorB + ambientColor[2];

                        r = r | r;
                        g = g | g;
                        b = b | b;

                        var color = rgb + r + comma + g + comma + b + close;
                        context.fillStyle = color;
                        context.strokeStyle = color;
                    }

                    context.beginPath();
                    var orig = WaveEngineJS.Convert(vertices[poligon[0]], viewProj, w, h);
                    context.moveTo(orig[0], orig[1]);
                    var ll = poligon.length;
                    for (var j = 1; j < ll; j++) {
                        var aux = WaveEngineJS.Convert(vertices[poligon[j]], viewProj, w, h);
                        context.lineTo(aux[0], aux[1]);
                    }
                    context.lineTo(orig[0], orig[1]);
                    context.closePath();
                    context.fill();
                }
            }
        };

        this.DrawShadow = function (vertices, model) {
            if (model.hasShadow) {
                var shadowMatrix = WaveEngineJS.Multiply(that.shadowMatrix, that.camera.viewproj);
                that.context.fillStyle = "rgb(0,0,0)";
                var indexes = model.index;
                for (var i = 0; i < indexes.length / 3; i++) {
                    var index = i * 3;

                    var p1 = vertices[indexes[index]];
                    var p2 = vertices[indexes[index + 1]];
                    var p3 = vertices[indexes[index + 2]];
                    that.context.beginPath();

                    var vertex1 = WaveEngineJS.Convert(p1, shadowMatrix, that.width, that.height);
                    var vertex2 = WaveEngineJS.Convert(p2, shadowMatrix, that.width, that.height);
                    var vertex3 = WaveEngineJS.Convert(p3, shadowMatrix, that.width, that.height);
                    that.context.moveTo(Math.floor(vertex1[0]), Math.floor(vertex1[1]));
                    that.context.lineTo(Math.floor(vertex2[0]), Math.floor(vertex2[1]));
                    that.context.lineTo(Math.floor(vertex3[0]), Math.floor(vertex3[1]));
                    that.context.lineTo(Math.floor(vertex1[0]), Math.floor(vertex1[1]));
                    that.context.closePath();
                    that.context.fill();
                }

                var poligons = model.poligons;
                var l = poligons.length;
                for (var i = 0; i < l; i++) {
                    var poligon = poligons[i];
                    var orig = WaveEngineJS.Convert(vertices[poligon[0]], shadowMatrix, that.width, that.height);

                    that.context.beginPath();
                    that.context.moveTo(orig[0], orig[1]);
                    var ll = poligon.length;
                    for (var j = 1; j < ll; j++) {
                        var aux = WaveEngineJS.Convert(vertices[poligon[j]], shadowMatrix, that.width, that.height);
                        that.context.lineTo(aux[0], aux[1]);
                    }
                    that.context.lineTo(orig[0], orig[1]);
                    that.context.closePath();
                    that.context.fill();
                }
            }
        };

        this.GetModelInMap = function (position) {
            var nearSource = [position[0], position[1], 0];
            var farSource = [position[0], position[1], 1];
            var camera = that.camera;
            var identity = new WaveEngineJS.MatrixIdentity();
            var nearPoint = camera.Unproject(nearSource, camera.view, camera.projection, identity);
            var farPoint = camera.Unproject(farSource, camera.view, camera.projection, identity);
            var direction = WaveEngineJS.SubstractV4(farPoint, nearPoint);

            WaveEngineJS.Normalize(direction);

            var r = new WaveEngineJS.Ray(nearPoint, direction);
            var minDist = Number.MAX_VALUE;
            var dist;
            var found = null;
            var l = that.model.length;
            for (var i = 0; i < l; i++) {
                var model = that.models[i];
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

        this.GetGroupModelInMap = function (position) {
            var nearSource = [position[0], position[1], 0];
            var farSource = [position[0], position[1], 1];
            var camera = that.camera;
            var identity = new WaveEngineJS.MatrixIdentity();
            var nearPoint = camera.Unproject(nearSource, camera.view, camera.projection, identity);
            var farPoint = camera.Unproject(farSource, camera.view, camera.projection, identity);
            var direction = WaveEngineJS.SubstractV4(farPoint, nearPoint);

            WaveEngineJS.Normalize(direction);

            var r = new WaveEngineJS.Ray(nearPoint, direction);
            var minDist = Number.MAX_VALUE;
            var dist;
            var found = null;
            var l = that.groupModels.length;
            for (var i = 0; i < l; i++) {
                var model = that.groupModels[i];
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
    },


    SortModels:function (preSortModels) {
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
        return [].concat(WaveEngineJS.SortModels(greater), pivotElem, WaveEngineJS.SortModels(less));
    }
};
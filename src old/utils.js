

// function distance (x1, y1, x2, y2) {
//     return Math.sqrt((Math.pow(x2 - x1, 2)) + (Math.pow(y2 - y1, 2)))
// };

// function insidePoly (x, y, vertices) {

//     let j = vertices.length - 1;
//     var odd = 0;

//     for (let i = 0;i < vertices.length;i++) {
//         if ((vertices[i][1] < y && vertices[j][1] >= y || vertices[j][1] < y && vertices[i][1] >= y)
//             && (vertices[i][0] <= x || vertices[j][0] <= x)) {
//             odd ^= (vertices[i][0] + (y - vertices[i][1]) * (vertices[j][0] - vertices[i][0]) / (vertices[j][1] - vertices[i][1])) < x;

//         }

//         // if ((pY[i] < y && pY[j] >= y || pY[j] < y && pY[i] >= y)
//         //     && (pX[i] <= x || pX[j] <= x)) {
//         //     odd ^= (pX[i] + (y - pY[i]) * (pX[j] - pX[i]) / (pY[j] - pY[i])) < x;
//         // }
        
//         j = i;
//     }

//     return !!odd;
// }

// export {
//     distance,
//     insidePoly
// };
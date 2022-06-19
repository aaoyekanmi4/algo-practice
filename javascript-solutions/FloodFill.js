/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {

    const dfs = (image, i, j, startingColor, color) => {
        if (image[i][j] === startingColor) {
            image[i][j] = color
            if (i > 0 && image[i - 1][j] !== color) dfs(image, i - 1, j, startingColor, color)
            if (i < image.length - 1 && image[i + 1][j] !== color) dfs(image, i + 1, j, startingColor, color)
            if (j > 0 && image[i][j - 1] !== color) dfs(image, i, j - 1, startingColor, color)
            if (j < image.length - 1 && image[i][j + 1] !== color) dfs(image, i, j + 1, startingColor, color)
        }
    }

    let startingColor = image[sr][sc]
    if (startingColor !== color) dfs(image, sr, sc, startingColor, color)
    return image

}

const srcFolder = "./assets/";
const destFolder = "./wwwroot/";
const webpackFolder = srcFolder + "webpack/";
module.exports = {
    "srcFolder": srcFolder,
    "src": {
        "styles": srcFolder + "styles/",
        "scripts": srcFolder + "scripts/",
        "images": srcFolder + "images/",
        "fonts": srcFolder + "fonts/"
    },
    "destFolder": destFolder,
    "dest": {
        "styles": destFolder + "styles/",
        "scripts": destFolder + "scripts/",
        "images": destFolder + "images/",
        "fonts": destFolder + "fonts/"
    },
    "webpackFolder": webpackFolder
}

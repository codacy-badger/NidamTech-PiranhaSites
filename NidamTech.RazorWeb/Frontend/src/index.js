import('./base/index.js');

if (document.querySelector("body #nidamtech-theme") > 0) {
    import("./themes/nidamtech-theme/index.js")
} else if (document.querySelector("body #sundhedmedalette-theme") > 0) {
    import("./themes/sundhedmedalette-theme/index.js")
} else {
    import("./themes/default-theme/index.js")
}
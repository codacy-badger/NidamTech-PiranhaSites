import('./base/index.js');

document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("nidamtechtheme") !== null) {
        import(/* webpackChunkName: "nidamtech-theme" */"./themes/nidamtech-theme/index.js")
    } else if (document.getElementById("sundhedmedalettetheme") !== null) {
        import(/* webpackChunkName: "sundhedmedalette-theme" */"./themes/sundhedmedalette-theme/index.js")
    } else {
        import(/* webpackChunkName: "default-theme" */"./themes/default-theme/index.js")
    }
});
import(/*webpackChunkName: "base-styles"*/'./styles/base/base-styles.scss');
if (document.getElementById("nidamtechtheme") !== null) {
    import(/*webpackChunkName: "nidamtech-theme"*/"./styles/themes/nidamtech-theme/nidamtech-theme.scss")
} else if (document.getElementById("sundhedmedalettetheme") !== null) {
    import(/*webpackChunkName: "sundhedmedalette-theme"*/"./styles/themes/sundhedmedalette-theme/sundhedmedalette-theme.scss")
} else {
    import(/*webpackChunkName: "default-theme"*/"./styles/themes/default-theme/default-theme.scss")
}
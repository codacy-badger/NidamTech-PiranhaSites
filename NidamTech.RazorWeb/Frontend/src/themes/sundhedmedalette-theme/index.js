import "./vendors.scss";
import "./fonts/google-fonts.scss";
import "./variables/colors.scss"
import "./shared/*.scss";
import "./regions/*.scss";

if ($('blockquote') > 0) {
    import("./blocks/quote.scss");
}
if ($('.hero') > 0) {
    import("./blocks/hero.scss");
}

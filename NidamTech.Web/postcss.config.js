import precss from "precss";
import autoprefixer from "autoprefixer";

module.exports = {
    plugins: function () {
        return [
            precss,
            autoprefixer
        ];
    }
};
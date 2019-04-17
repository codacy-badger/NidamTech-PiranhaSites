import 'bootstrap'
import '@fortawesome/fontawesome-free'

import './base/index.js'

if ($("body #nidamtech-theme") > 0) {
    import("./themes/nidamtech-theme/index.js")
} else if ($("body #sundhedmedalette-theme") > 0) {
    import("./themes/sundhedmedalette-theme/index.js")
} else {
    import("./themes/default-theme/index.js")
}
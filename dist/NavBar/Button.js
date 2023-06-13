import React from "react";
import Link from "next/link";
function Button(param) {
    var href = param.href, appendClassName = param.appendClassName, displayText = param.displayText;
    return /*#__PURE__*/ React.createElement(Link, {
        href: href,
        className: "text-lg font-bold rounded-md px-6 py-1 ".concat(appendClassName !== null && appendClassName !== void 0 ? appendClassName : "")
    }, displayText);
}
export default Button;

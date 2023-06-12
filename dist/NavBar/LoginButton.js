import React from "react";
import Link from "next/link";
function LoginButton(param) {
    var href = param.href, appendClassName = param.appendClassName, displayText = param.displayText;
    return /*#__PURE__*/ React.createElement(Link, {
        href: href,
        className: "text-lg font-bold rounded-md px-6 py-1 absolute right-5 top-1/2 -translate-y-1/2 ".concat(appendClassName !== null && appendClassName !== void 0 ? appendClassName : "")
    }, displayText);
}
export default LoginButton;

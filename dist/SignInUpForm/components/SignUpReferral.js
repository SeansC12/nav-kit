import React from "react";
import Link from "next/link";
function SignUpReferral() {
    return /*#__PURE__*/ React.createElement("div", {
        className: "text-sm font-light text-white"
    }, "Don’t have an account yet? ", /*#__PURE__*/ React.createElement(Link, {
        href: "/signup",
        className: "font-medium hover:underline"
    }, "Sign up"));
}
export default SignUpReferral;

import React from "react";
function HeaderText(param) {
    var header = param.header;
    return /*#__PURE__*/ React.createElement("h1", {
        className: "text-xl font-bold leading-tight tracking-tight text-primary-blue md:text-2xl"
    }, header);
}
export default HeaderText;

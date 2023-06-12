import React from "react";
function NavBarWrapper(param) {
    var appendClassName = param.appendClassName, children = param.children;
    return /*#__PURE__*/ React.createElement("div", {
        className: "p-2 w-full h-[10vh] relative ".concat(appendClassName !== null && appendClassName !== void 0 ? appendClassName : "")
    }, children);
}
export default NavBarWrapper;

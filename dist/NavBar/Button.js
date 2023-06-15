import React from "react";
import Link from "next/link";
function Button(param) {
    var href = param.href, appendClassName = param.appendClassName, displayText = param.displayText, horizontalPosition = param.horizontalPosition, _param_flexMode = param.flexMode, flexMode = _param_flexMode === void 0 ? false : _param_flexMode;
    var determineClassNameBasedOnPosition = function determineClassNameBasedOnPosition(horizontalPosition) {
        switch(horizontalPosition){
            case "left":
                return "left-5";
            case "right":
                return "right-5";
            case "center":
                return "left-1/2 -translate-x-1/2";
            case "nil":
                return "";
            default:
                return "";
        }
    };
    return /*#__PURE__*/ React.createElement(Link, {
        href: href,
        className: "text-lg font-bold rounded-md px-6 py-1 ".concat(!flexMode && "absolute right-5 top-1/2 -translate-y-1/2", " ").concat(determineClassNameBasedOnPosition(horizontalPosition), " ").concat(appendClassName !== null && appendClassName !== void 0 ? appendClassName : "")
    }, displayText);
}
export default Button;

import React from "react";
function HorizontalFlexButtonWrapper(param) {
    var children = param.children, appendClassName = param.appendClassName, horizontalPosition = param.horizontalPosition;
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
    return /*#__PURE__*/ React.createElement("div", {
        className: "absolute top-1/2 -translate-y-1/2 flex items-center justify-center flex-row gap-2 ".concat(determineClassNameBasedOnPosition(horizontalPosition), " ").concat(appendClassName !== null && appendClassName !== void 0 ? appendClassName : "")
    }, children);
}
export default HorizontalFlexButtonWrapper;

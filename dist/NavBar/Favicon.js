import React from "react";
import Image from "next/image";
function Favicon(param) {
    var src = param.src, width = param.width, height = param.height, appendClassName = param.appendClassName, horizontalPosition = param.horizontalPosition;
    var determineClassNameBasedOnPosition = function determineClassNameBasedOnPosition(horizontalPosition) {
        switch(horizontalPosition){
            case "left":
                return "left-5";
            case "right":
                return "right-5";
            case "center":
                return "left-1/2 -translate-x-1/2";
            default:
                return "left-5";
        }
    };
    return /*#__PURE__*/ React.createElement(Image, {
        className: "absolute top-1/2 -translate-y-1/2 ".concat(determineClassNameBasedOnPosition(horizontalPosition), " ").concat(appendClassName !== null && appendClassName !== void 0 ? appendClassName : ""),
        src: src,
        width: width,
        height: height
    });
}
export default Favicon;

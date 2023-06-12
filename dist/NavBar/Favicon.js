import React from "react";
import Image from "next/image";
function Favicon(param) {
    var src = param.src, width = param.width, height = param.height, appendClassName = param.appendClassName;
    return /*#__PURE__*/ React.createElement(Image, {
        className: "absolute top-1/2 -translate-y-1/2 left-5 ".concat(appendClassName),
        src: src,
        width: width,
        height: height
    });
}
export default Favicon;

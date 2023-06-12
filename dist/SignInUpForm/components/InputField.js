import React from "react";
function InputField(param) {
    var label = param.label, placeholder = param.placeholder, type = param.type, setState = param.setState;
    return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("label", {
        className: "block mb-2 text-sm font-medium text-primary-blue"
    }, label), /*#__PURE__*/ React.createElement("input", {
        onChange: function(e) {
            return setState(e.target.value);
        },
        autoComplete: "on",
        type: type,
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-xs sm:text-sm rounded-lg block w-full p-2.5",
        placeholder: placeholder,
        required: ""
    }));
}
export default InputField;

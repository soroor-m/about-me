"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
var react_1 = __importDefault(require("react"));
var notFoundImage_webp_1 = __importDefault(require("../../images/notFoundImage.webp"));
var Section_1 = require("../../utils/Section/Section");
var NotFound_module_scss_1 = __importDefault(require("./NotFound.module.scss"));
var NotFound = function () {
    return (react_1.default.createElement("div", { className: NotFound_module_scss_1.default.notFound },
        react_1.default.createElement(Section_1.Section, { heading: "404 Not Found" },
            react_1.default.createElement("p", null, "The page you are looking for does not exist!"),
            react_1.default.createElement("img", { src: notFoundImage_webp_1.default, alt: "404 Not Found" }))));
};
exports.NotFound = NotFound;
//# sourceMappingURL=NotFound.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavBar = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var NavBar_module_scss_1 = __importDefault(require("./NavBar.module.scss"));
var NavBar = function () {
    return (react_1.default.createElement("nav", { className: NavBar_module_scss_1.default.nav },
        react_1.default.createElement("ul", null,
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/cv" }, "CV")),
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/bookshelf" }, "Bookshelf")),
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/hobbies" }, "Hobbies")),
            react_1.default.createElement("li", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/contact" }, "Contact")))));
};
exports.NavBar = NavBar;
//# sourceMappingURL=NavBar.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var pages_1 = require("./pages");
var App_module_scss_1 = __importDefault(require("./App.module.scss"));
function App() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(pages_1.NavBarPage, null),
            react_1.default.createElement("div", { className: App_module_scss_1.default.app },
                react_1.default.createElement(react_router_dom_1.Routes, null,
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(pages_1.NavBarPage, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { index: true, element: react_1.default.createElement(pages_1.HomePage, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "cv", element: react_1.default.createElement(pages_1.CVPage, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "bookshelf", element: react_1.default.createElement(pages_1.BookshelfPage, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "hobbies", element: react_1.default.createElement(pages_1.HobbiesPage, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "contact", element: react_1.default.createElement(pages_1.ContactPage, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "*", element: react_1.default.createElement(pages_1.NotFoundPage, null) }))))));
}
exports.default = App;
//# sourceMappingURL=App.js.map
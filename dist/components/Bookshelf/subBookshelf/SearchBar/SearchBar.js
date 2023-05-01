"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBar = void 0;
var react_1 = __importDefault(require("react"));
var SearchBar_module_scss_1 = __importDefault(require("./SearchBar.module.scss"));
var SearchBar = function (_a) {
    var query = _a.query, handleQueryChange = _a.handleQueryChange;
    var handleEnterKeyDown = function (e) {
        var key = e.key;
        if (key === "enter") {
            e.preventDefault();
        }
    };
    return (react_1.default.createElement("div", { className: SearchBar_module_scss_1.default.searchBar },
        react_1.default.createElement("form", { role: "search" },
            react_1.default.createElement("input", { type: "search", placeholder: "search...", value: query, onChange: handleQueryChange, onKeyDown: handleEnterKeyDown }))));
};
exports.SearchBar = SearchBar;
//# sourceMappingURL=SearchBar.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortDropdowns = void 0;
var react_1 = __importDefault(require("react"));
var SortDropDowns_module_scss_1 = __importDefault(require("./SortDropDowns.module.scss"));
var SortDropdowns = function (_a) {
    var sortCriteria = _a.sortCriteria, sortOrder = _a.sortOrder, handleSortCriteriaChange = _a.handleSortCriteriaChange, handleSortOrderChange = _a.handleSortOrderChange;
    return (react_1.default.createElement("div", { className: SortDropDowns_module_scss_1.default.sortDropdowns },
        react_1.default.createElement("label", { htmlFor: "sortCriteria" }, "Sort by:"),
        react_1.default.createElement("select", { id: "sortCriteria", value: sortCriteria, onChange: handleSortCriteriaChange },
            react_1.default.createElement("option", { value: "title" }, "Title"),
            react_1.default.createElement("option", { value: "author" }, "Author")),
        react_1.default.createElement("label", { htmlFor: "sortOrder" }, "Order:"),
        react_1.default.createElement("select", { id: "sortOrder", value: sortOrder, onChange: handleSortOrderChange },
            react_1.default.createElement("option", { value: "asc" }, "(A-Z)"),
            react_1.default.createElement("option", { value: "desc" }, "(Z-A)"))));
};
exports.SortDropdowns = SortDropdowns;
//# sourceMappingURL=SortDropdowns.js.map
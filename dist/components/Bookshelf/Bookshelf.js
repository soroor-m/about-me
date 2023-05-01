"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bookshelf = void 0;
var react_1 = __importStar(require("react"));
var bookData_json_1 = __importDefault(require("../../bookData.json"));
var SortDropdowns_1 = require("./subBookshelf/SortDropDowns/SortDropdowns");
var SearchBar_1 = require("./subBookshelf/SearchBar/SearchBar");
var Bookshelf_module_scss_1 = __importDefault(require("./Bookshelf.module.scss"));
var Bookshelf = function () {
    var _a = (0, react_1.useState)("title"), sortCriteria = _a[0], setSortCriteria = _a[1];
    var _b = (0, react_1.useState)("asc"), sortOrder = _b[0], setSortOrder = _b[1];
    var _c = (0, react_1.useState)(""), query = _c[0], setQuery = _c[1];
    var bookList = bookData_json_1.default.books;
    var handleSortCriteriaChange = function (event) {
        setSortCriteria(event.target.value);
    };
    var handleSortOrderChange = function (event) {
        setSortOrder(event.target.value);
    };
    var handleQueryChange = function (event) {
        setQuery(event.target.value);
    };
    var sortedBookList = __spreadArray([], bookList, true).filter(function (book) {
        return book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase());
    })
        .sort(function (a, b) {
        var compareResult = sortCriteria === "title" ? a.title.localeCompare(b.title) : a.author.localeCompare(b.author);
        return sortOrder === "asc" ? compareResult : -compareResult;
    });
    return (react_1.default.createElement("div", { className: Bookshelf_module_scss_1.default.bookshelf },
        react_1.default.createElement("h2", null, "My Bookshelf"),
        react_1.default.createElement("div", { className: Bookshelf_module_scss_1.default.header },
            react_1.default.createElement(SearchBar_1.SearchBar, { query: query, handleQueryChange: handleQueryChange }),
            react_1.default.createElement(SortDropdowns_1.SortDropdowns, { sortCriteria: sortCriteria, sortOrder: sortOrder, handleSortCriteriaChange: handleSortCriteriaChange, handleSortOrderChange: handleSortOrderChange })),
        react_1.default.createElement("table", null,
            react_1.default.createElement("thead", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("th", null, "ID"),
                    react_1.default.createElement("th", null, "Title"),
                    react_1.default.createElement("th", null, "Author"))),
            react_1.default.createElement("tbody", null, sortedBookList.map(function (book, index) { return (react_1.default.createElement("tr", { key: index },
                react_1.default.createElement("td", null, book.id),
                react_1.default.createElement("td", null, book.title),
                react_1.default.createElement("td", null, book.author))); })))));
};
exports.Bookshelf = Bookshelf;
//# sourceMappingURL=Bookshelf.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
var react_1 = __importDefault(require("react"));
var Section_module_scss_1 = __importDefault(require("./Section.module.scss"));
var Section = function (_a) {
    var heading = _a.heading, children = _a.children;
    return (react_1.default.createElement("section", { className: Section_module_scss_1.default.section },
        react_1.default.createElement("h3", null, heading),
        children));
};
exports.Section = Section;
//# sourceMappingURL=Section.js.map
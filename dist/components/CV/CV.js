"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CV = void 0;
var react_1 = __importDefault(require("react"));
var Section_1 = require("../../utils/Section/Section");
var CV_module_scss_1 = __importDefault(require("./CV.module.scss"));
var CV = function () {
    return (react_1.default.createElement("div", { className: CV_module_scss_1.default.cv },
        react_1.default.createElement("h2", null, "Curriculum Vitae"),
        react_1.default.createElement(Section_1.Section, { heading: "Personal Information" },
            react_1.default.createElement("p", null, "Name: S M"),
            react_1.default.createElement("p", null, "Email: sm@gmail.com"),
            react_1.default.createElement("p", null, "Phone: (+31)0682222222"),
            react_1.default.createElement("p", null, "Location: Amsterdam, The Netherlands")),
        react_1.default.createElement(Section_1.Section, { heading: "Profile" },
            react_1.default.createElement("p", null, "Currently living in Amsterdam. After obtaining a master degree in Private Law, I took the decision to change my path towards tech as I was always interested in this field. I undertook a web development course which covered all the fundamental full-stack JavaScript skills, put in practice with a 6-months internship as a full-stack developer. My educations and work experiences in various fields have strengthened my career backbone.")),
        react_1.default.createElement(Section_1.Section, { heading: "Skills" },
            react_1.default.createElement("ul", null,
                react_1.default.createElement("li", null, "JavaScript"),
                react_1.default.createElement("li", null, "TypeScript"),
                react_1.default.createElement("li", null, "React"),
                react_1.default.createElement("li", null, "Express and Node.js"),
                react_1.default.createElement("li", null, "SQL databases"),
                react_1.default.createElement("li", null, "Jest/ Mocha / Test Driven Development"),
                react_1.default.createElement("li", null, "HTML5 / CSS / SCSS / Sass"),
                react_1.default.createElement("li", null, "Linux / Terminal"),
                react_1.default.createElement("li", null, "Git / Github"),
                react_1.default.createElement("li", null, "REST API"))),
        react_1.default.createElement(Section_1.Section, { heading: "Experience" },
            react_1.default.createElement("p", null, "Full-Stack Web Developer Internship, Naduvi, Amsterdam, Netherlands")),
        react_1.default.createElement(Section_1.Section, { heading: "Education" },
            react_1.default.createElement("ul", null,
                react_1.default.createElement("li", null, "Web development Online Certification, Codecademy"),
                react_1.default.createElement("li", null, "Master of Private Law, Azad University, Sanandaj, Iran"),
                react_1.default.createElement("li", null, "Bachelor of Law, Azad University, Sanandaj, Iran"),
                react_1.default.createElement("li", null, "Diploma Certification in English Language, Aram Language Learning Academy, Sanandaj, Iran"))),
        react_1.default.createElement(Section_1.Section, { heading: "Other Professional Experiences" },
            react_1.default.createElement("ul", null,
                react_1.default.createElement("li", null, "English Teacher, Aram Language Learning Academy, Sanandaj, Iran"),
                react_1.default.createElement("li", null, "Volunteer Administrative Assistant, TELLSI Kurdistan, Sanandaj, Iran"),
                react_1.default.createElement("li", null, "Volunteer Administrative Assistant, TELLSI Kurdistan, Sanandaj, Iran"))),
        react_1.default.createElement(Section_1.Section, { heading: "Languages" },
            react_1.default.createElement("ul", null,
                react_1.default.createElement("li", null, "English"),
                react_1.default.createElement("li", null, "Kurdish"),
                react_1.default.createElement("li", null, "Persian")))));
};
exports.CV = CV;
//# sourceMappingURL=CV.js.map
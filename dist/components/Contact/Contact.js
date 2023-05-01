"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
var react_1 = __importDefault(require("react"));
var Section_1 = require("../../utils/Section/Section");
var Contact = function () {
    return (react_1.default.createElement(Section_1.Section, { heading: "Contact Information" },
        react_1.default.createElement("p", null, "Thank you for visiting my website! If you have any questions or would like to connect with me, please feel free to reach out using one of the following methods:"),
        react_1.default.createElement("ul", null,
            react_1.default.createElement("li", null, "Email: sm@gmail.com"),
            react_1.default.createElement("li", null, "Phone: (+31)0682222222"),
            react_1.default.createElement("li", null, "LinkedIn: https://www.linkedin.com/in/s-m/")),
        react_1.default.createElement("p", null, "I'm always happy to hear from people who share my interests or have opportunities to collaborate on interesting projects. Whether you're looking to network, learn more about my background and experiences, or just say hello, I look forward to hearing from you!")));
};
exports.Contact = Contact;
//# sourceMappingURL=Contact.js.map
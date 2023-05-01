"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hobbies = void 0;
var react_1 = __importDefault(require("react"));
var Section_1 = require("../../utils/Section/Section");
var Hobbies_module_scss_1 = __importDefault(require("./Hobbies.module.scss"));
var Hobbies = function () {
    return (react_1.default.createElement("div", { className: Hobbies_module_scss_1.default.hobbies },
        react_1.default.createElement("h2", null, "My Hobbies"),
        react_1.default.createElement(Section_1.Section, null,
            react_1.default.createElement("p", null, "When I'm not working, I enjoy spending my time pursuing various interests and hobbies. Some of my favorite pastimes include reading, watching movies, playing squash, visiting museums, strolling in the city, and occasionally hanging out with friends."),
            react_1.default.createElement("ul", null,
                react_1.default.createElement("li", null, "Reading is one of my favorite ways to relax and escape into different worlds. I try to read a variety of genres, but so far my favorite is fantasy."),
                react_1.default.createElement("li", null, "I also love watching movies, whether it's a classic film or the latest blockbuster release. There's something about immersing myself in a good story that I find incredibly satisfying."),
                react_1.default.createElement("li", null, "Playing squash is another hobby I enjoy, as it allows me to stay active and competitive while having fun. It's a great way to relieve stress and get some exercise, and I always feel energized after a good game."),
                react_1.default.createElement("li", null, "Visiting museums is another interest of mine, as I find it fascinating to learn about art, history, and culture through exhibits and displays. I enjoy exploring new museums and galleries, and am always impressed by the creativity and talent on display."),
                react_1.default.createElement("li", null, "Strolling in the city is another way I like to spend my free time. Whether it's exploring a new neighborhood or just taking a leisurely walk through a familiar area, I love the sense of discovery that comes with exploring a city on foot."),
                react_1.default.createElement("li", null, "Lastly, I sometimes like to hang out with friends, whether it's grabbing a cup of coffee or trying out a new restaurant. Spending time with people I care about is important to me, and I enjoy catching up and making memories with those closest to me.")),
            react_1.default.createElement("p", null, "I hope you enjoyed learning a little bit about my hobbies, and feel free to reach out if you share any of these interests or have any recommendations for new activities to try!"))));
};
exports.Hobbies = Hobbies;
//# sourceMappingURL=Hobbies.js.map
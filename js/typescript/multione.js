"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.jump = void 0;
class jump {
    static hop() {
        console.log("hop");
    }
    hop() {
        console.log("hop!");
    }
}
exports.jump = jump;
class run {
    static sprint(speed) {
        return `I run at ${speed} mph!`;
    }
}
exports.run = run;
//jump.hop();

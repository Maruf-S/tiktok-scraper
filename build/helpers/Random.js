"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeid = (len) => {
    let text = '';
    const char_list = '0123456789';
    for (let i = 0; i < len; i += 1) {
        text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
};
exports.makeidHex = (len) => {
    let text = '';
    const char_list = '0123456789abcdef';
    for (let i = 0; i < len; i += 1) {
        text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
};

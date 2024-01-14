"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.numeralToNumber = void 0;
const words_to_numbers_1 = __importDefault(require("words-to-numbers"));
const numeralToNumber = (str) => {
    const numericValue = (0, words_to_numbers_1.default)(str);
    // console.log('Input:', str);
    // console.log('Numeric Value:', numericValue);
    if (typeof numericValue === 'number') {
        return numericValue;
    }
    if (numericValue === null) {
        return NaN;
    }
    //the string passed cannot be converted to a number then NaN should be returned.
    const notNumber = parseFloat(numericValue);
    // console.log('Number:', notNumber);
    return isNaN(notNumber) ? NaN : notNumber;
};
exports.numeralToNumber = numeralToNumber;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
exports.CourseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    professor: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    happy: {
        type: Number,
        required: true,
    },
    sad: {
        type: Number,
        required: true,
    },
    angry: {
        type: Number,
        required: true,
    },
    everydayStudy: {
        type: Number,
        required: true,
    },
    midtermStudy: {
        type: Number,
        required: true,
    },
    finalStudy: {
        type: Number,
        required: true,
    },
});
//# sourceMappingURL=Course.js.map
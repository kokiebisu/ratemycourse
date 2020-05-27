"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseController = void 0;
const mongoose = __importStar(require("mongoose"));
const Course_1 = require("../models/Course");
const courseDummyData_1 = require("../data/courseDummyData");
const CourseModel = mongoose.model('Course', Course_1.CourseSchema);
class CourseController {
    constructor() {
        this.dummyData = courseDummyData_1.data;
        /**
         * Adds new student to model
         * @param {Request} req
         * @param {Response} res
         */
        this.addNewCourse = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let newCourse = new CourseModel(req.body);
            try {
                const data = yield newCourse.save();
                return res.json(data);
            }
            catch (err) {
                return res.send(err);
            }
        });
        /**
         * Get all available courses
         * @param req
         * @param res
         */
        this.getCourses = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield CourseModel.find({});
                return res.json(data);
            }
            catch (err) {
                return res.send(err);
            }
        });
        /**
         * Retrieves courses based on the given id
         * @param req
         * @param res
         */
        this.getCourseById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield CourseModel.findById(req.params.courseId);
                return res.json(data);
            }
            catch (err) {
                return res.send(err);
            }
        });
        /**
         * Updates the course document based on the given content
         * @param req
         * @param res
         */
        this.updateCourseById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield CourseModel.findOneAndUpdate({ _id: req.params.courseId }, req.body, { new: true });
                return res.json(data);
            }
            catch (err) {
                return res.send(err);
            }
        });
        /**
         * Deletes the course based on the given id
         * @param req
         * @param res
         */
        this.deleteCourseById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield CourseModel.findOneAndRemove({
                    _id: req.params.courseId,
                });
                return res.json(data);
            }
            catch (err) {
                return res.send(err);
            }
        });
        /**
         * Seeds dummy documents to the collection to start off
         * @param req
         * @param res
         * @param data
         */
        this.seedDummyData = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield CourseModel.collection.insert(this.dummyData);
                return res.json({
                    message: `Successfully sent ${this.dummyData.length} sample documents`,
                });
            }
            catch (err) {
                return res.send(err);
            }
        });
    }
}
exports.CourseController = CourseController;
//# sourceMappingURL=courseController.js.map
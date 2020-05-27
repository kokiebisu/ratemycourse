"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const courseController_1 = require("../controllers/courseController");
class Routes {
    constructor() {
        this.courseController = new courseController_1.CourseController();
    }
    routes(app) {
        app
            .route('/api/courses')
            .get(this.courseController.getCourses)
            .post(this.courseController.addNewCourse);
        app
            .route('/api/courses/:courseId')
            .get(this.courseController.getCourseById)
            .put(this.courseController.updateCourseById)
            .delete(this.courseController.deleteCourseById);
        app.route('/api/dummy').get(this.courseController.seedDummyData);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=index.js.map
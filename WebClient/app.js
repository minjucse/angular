var app;
(function (app) {
    var Student = /** @class */ (function () {
        function Student() {
        }
        Student.prototype.getInfo = function () {
            return this.name + " " + this.phone;
        };
        return Student;
    }());
    app.Student = Student;
    var DepartmentController = /** @class */ (function () {
        function DepartmentController() {
            var self = this;
            self.student = new Student();
        }
        return DepartmentController;
    }());
    app.DepartmentController = DepartmentController;
})(app || (app = {}));
//# sourceMappingURL=app.js.map
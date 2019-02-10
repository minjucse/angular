var App;
(function (App) {
    var Student = /** @class */ (function () {
        function Student() {
        }
        Student.prototype.getInfo = function () {
            return this.name + " " + this.phone;
        };
        return Student;
    }());
    App.Student = Student;
    var DepartmentController = /** @class */ (function () {
        function DepartmentController() {
            var self = this;
            self.student = new Student();
        }
        DepartmentController.prototype.display = function () {
            this.information = this.student.getInfo();
        };
        return DepartmentController;
    }());
    App.DepartmentController = DepartmentController;
    angular.module('app').controller("DepartmentController", (DepartmentController));
})(App || (App = {}));
//# sourceMappingURL=DepartmentController.js.map
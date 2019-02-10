var App;
(function (App) {
    var DepartmentController = /** @class */ (function () {
        function DepartmentController(departmentService) {
            var self = this;
            self.department = new App.Department();
            self.departmentService = departmentService;
            console.log("I am in Department");
        }
        DepartmentController.prototype.save = function () {
            this.departmentService.departments.push(this.department);
            this.department = new App.Department();
        };
        DepartmentController.prototype.reset = function () {
            this.department = new App.Department();
        };
        DepartmentController.$inject = ["DepartmentService"];
        return DepartmentController;
    }());
    App.DepartmentController = DepartmentController;
    angular.module('app').controller("DepartmentController", (DepartmentController));
    var DepartmentsController = /** @class */ (function () {
        function DepartmentsController(departmentService) {
            var self = this;
            self.departmentService = departmentService;
            self.departments = self.departmentService.departments;
            console.log("I am in Departments");
        }
        DepartmentsController.$inject = ["DepartmentService"];
        return DepartmentsController;
    }());
    App.DepartmentsController = DepartmentsController;
    angular.module('app').controller("DepartmentsController", (DepartmentsController));
})(App || (App = {}));
//# sourceMappingURL=DepartmentController.js.map
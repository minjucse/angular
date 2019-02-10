var App;
(function (App) {
    var DepartmentService = /** @class */ (function () {
        function DepartmentService() {
            this.departments = [];
            console.log("Initiating Department Service");
        }
        return DepartmentService;
    }());
    App.DepartmentService = DepartmentService;
    angular.module('app').service("DepartmentService", (DepartmentService));
})(App || (App = {}));
//# sourceMappingURL=DepartmentService.js.map
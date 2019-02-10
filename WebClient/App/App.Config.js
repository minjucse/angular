var App;
(function (App) {
    var app = angular.module('app', ["ui.router"]);
    var Configuration = /** @class */ (function () {
        function Configuration(stateProvider, urlRouterProvider) {
            urlRouterProvider.otherwise("/");
            stateProvider
                .state("root", {
                abstract: true,
                url: "",
                template: "<div ui-view class=\"container-fluid slide\"></div>"
            })
                .state("root.home", {
                url: "/",
                templateUrl: "partials/home/home.tpl.html",
                controller: "HomeController",
                controllerAs: "vm"
            })
                .state("root.department", {
                url: "/department",
                templateUrl: "partials/department/department-entry.tpl.html",
                controller: "DepartmentController",
                controllerAs: "vm"
            })
                .state("root.departments", {
                url: "/departments",
                templateUrl: "partials/department/department-list.tpl.html",
                controller: "DepartmentsController",
                controllerAs: "vm"
            });
        }
        Configuration.$inject = ["$stateProvider", "$urlRouterProvider"];
        return Configuration;
    }());
    App.Configuration = Configuration;
    angular.module("app").config(Configuration);
})(App || (App = {}));
//# sourceMappingURL=App.Config.js.map
var App;
(function (App) {
    var HomeController = /** @class */ (function () {
        function HomeController() {
            console.log("I am in home controller");
            this.now = new Date().toString();
        }
        return HomeController;
    }());
    angular.module("app").controller("HomeController", (HomeController));
})(App || (App = {}));
//# sourceMappingURL=HomeController.js.map
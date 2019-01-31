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
})(app || (app = {}));
//# sourceMappingURL=app.js.map
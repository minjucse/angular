module App {
    export class Student {
        name: string;
        phone: string;

        getInfo(): string {
            return this.name + " " + this.phone;
        }
    }

    export class DepartmentController {
        student: Student;
        information: string;

        constructor() {
            let self = this;
            self.student = new Student();
        }

        display(): void {
            this.information = this.student.getInfo();
        }
    }

    angular.module('app').controller("DepartmentController", (DepartmentController) as any);
}
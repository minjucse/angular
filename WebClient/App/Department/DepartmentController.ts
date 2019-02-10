module App {
    
    export class DepartmentController {

        department: Department;
        departmentService: DepartmentService;

        static $inject = ["DepartmentService"];

        constructor(departmentService: DepartmentService) {

            let self = this;

            self.department = new Department();
            self.departmentService = departmentService;

          console.log("I am in Department");  
        }

        save() :void {
            this.departmentService.departments.push(this.department);
            this.department = new Department();
        }

        reset(): void {

            this.department = new Department();
        }
        
    }

    angular.module('app').controller("DepartmentController", (DepartmentController) as any);

    export class DepartmentsController {

        departments: Department[];
        departmentService: DepartmentService;

        static $inject = ["DepartmentService"];

        constructor(departmentService: DepartmentService) {

            let self = this;

            self.departmentService = departmentService;
            self.departments = self.departmentService.departments;

            console.log("I am in Departments");  
        }

    }

    angular.module('app').controller("DepartmentsController", (DepartmentsController) as any);
}
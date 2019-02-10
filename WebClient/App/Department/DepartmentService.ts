module App {
    export class DepartmentService {
       
        departments: Department[]; 
      
        constructor() {
            this.departments = [];
            console.log("Initiating Department Service");
        }
    }

    angular.module('app').service("DepartmentService", (DepartmentService) as any);
}
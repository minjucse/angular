
module app {
    export class Student {
        name: string;
        phone: string;

        getInfo(): string {
            return this.name + " " + this.phone;
        }
    }
}
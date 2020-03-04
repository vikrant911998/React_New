// class Student {
//   private id: number;
//   private name: string;
//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }
//   show(): void {
//     console.log(this.id, this.name);
//   }
// }
var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    Student.prototype.show = function () {
        console.log(this.id, this.name);
    };
    return Student;
}());
var obj = new Student(101, "Vikrant");
// obj.name = "Hello";
obj.show();
console.log(obj.name);
// obj.id = -1241;
// console.log(obj.id);

// class Account {
//   constructor(protected aid: number, protected aname: string) {}
//   show(): void {
//     console.log(this.id, this.name);
//   }
// }
// class SavingAccount extends Account {
//   constructor(id: number, name: string) {
//     super(id, name);
//   }
//   display(): void {
//     console.log(this.aid, this.aname);
//   }
// }
// var obj = new SavingAccount(102, "Vikrant");
// obj.display();
// obj.show();
// console.log(obj);
var obj = {
    id: 101,
    name: "Vikrant",
    show: function () {
        console.log(this.age);
    }
};
obj.show();

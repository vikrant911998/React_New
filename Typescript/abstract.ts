abstract class Account {
  //   show(): void {
  //     console.log("Show of Account");
  //   }
  //   display(): void;
  abstract show(): void; //abstract method declaration
  abstract show1(): void;
}

class SavingAccount extends Account {
  show(): void {
    console.log("Show of Saving");
  }
  show1(): void {
    console.log("Show of Saving");
  }
}

var obj = new SavingAccount();
obj.show();

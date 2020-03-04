// abstract class ->non-abstract method +abstract methods
//interface -> abstract method;

interface Database {
  create_record(): void;
  delete_record(): void;
}

class OracleDB implements Database {
  create_record(): void {}
  delete_record(): void {}
}

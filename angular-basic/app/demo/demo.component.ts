import { OnInit, Component } from "@angular/core";

@Component({
  selector: "app-demo",
  //   template: "<h1>Hello From Demo</h1>"
  templateUrl: "./demo.component.html"
})
export class DemoComponent implements OnInit {
  id: number = 10;
  show: boolean = false;
  sname: string = "Vikrant";
  ngOnInit() {}

  toggle() {
    this.show = !this.show;
  }
}

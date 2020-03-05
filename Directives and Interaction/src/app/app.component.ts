import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { BasicComponent } from "./basic/basic.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  // template: "<h1>Hello World</h1>",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = "basic-practice";
  address: string;

  onReceiveAddress(eventdata: any): void {
    console.log(eventdata);
    this.address = eventdata;
  }
}

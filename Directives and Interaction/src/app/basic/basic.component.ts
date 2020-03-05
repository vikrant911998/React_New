import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "app-basic",
  templateUrl: "./basic.component.html",
  styleUrls: ["./basic.component.css"]
})
export class BasicComponent implements OnInit {
  //Parent To child Data Transfer
  // @Input("titleText") title: string;
  // address: string;
  // //Child to Parent Data Transfer
  // @Output() sendAddress: EventEmitter<any> = new EventEmitter<any>();
  // defaultWidth: string;
  // defaultStyle: string;
  // isGreen: any;
  // valueAdd: any;
  // arr: Array<number> = [12, 24, 34, 67];
  arr: Array<object> = [
    { id: 101, name: "Vikrant" },
    { id: 102, name: "rahul" }
  ];

  constructor() {
    // this.valueAdd = "Hello";
    // this.isGreen = 12;
    // this.defaultStyle = "dashed";
    // this.defaultWidth = "20px";
    // this.sendAddress;
  }

  ngOnInit() {}

  // sendData(address: HTMLInputElement): void {
  //   console.log(address.value);
  //   this.address = address.value;
  //   this.sendAddress.emit(this.address);
  // }
}

import { Directive, OnInit, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[firstDirective]"
})
export class FirstDirective implements OnInit {
  constructor(public tag: ElementRef, public render: Renderer2) {}
  ngOnInit(): void {
    console.log(this.tag.nativeElement);
    // this.tag.nativeElement.style.color = "red";
    // this.tag.nativeElement.style.fontFamily = "Helvetica";
    this.render.addClass(this.tag.nativeElement, "special");
    this.render.addClass(this.tag.nativeElement, "bdr");
    this.render.removeClass(this.tag.nativeElement, "bdr");
  }
}

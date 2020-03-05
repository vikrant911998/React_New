import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { BasicComponent } from "./basic/basic.component";
import { FirstDirective } from "./first.directive";

@NgModule({
  declarations: [AppComponent, DemoComponent, BasicComponent, FirstDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  // exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

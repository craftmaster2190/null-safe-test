import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StringPipe } from "./string.pipe";
import { FalseyValuePipe } from './falsey-value.pipe';
import { AndJoinPipe } from './and-join.pipe';

@NgModule({
  declarations: [AppComponent, StringPipe, FalseyValuePipe, AndJoinPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

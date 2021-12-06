import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PicachuComponent } from './picachu/picachu.component';
import { PikachuService } from './pikachu.service';

@NgModule({
  declarations: [
    AppComponent,
    PicachuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PikachuService],
  bootstrap: [AppComponent]
})
export class AppModule { }

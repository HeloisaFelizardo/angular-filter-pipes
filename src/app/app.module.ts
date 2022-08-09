import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrecoComponent } from './preco/preco.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    PrecoComponent,
    DataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

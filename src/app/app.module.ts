import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClienteComponent } from './clientes.component';
import { ContentComponent } from './content.component';
import { ResaltadorDirective } from './resaltar.directive';

@NgModule({
  declarations: [
    AppComponent,ClienteComponent,ContentComponent,ResaltadorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

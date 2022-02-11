import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataGeneratorService } from './services/data-generatro.service';
import { MockDataGenerator } from './services/mock-data-generator.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DataGeneratorService,
    MockDataGenerator,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

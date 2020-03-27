import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { MaterialModule } from './material.module';

import { CivilizationsComponent } from './civilizations/civilizations.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CivilizationsComponent
  ],
  entryComponents: [FormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [MaterialModule
    
  ],
  providers: [DataService,
  /*{
    //provide:HTTP_INTERCEPTORS,
    //useClass:JwtInterceptor,
    //multi:true
  },
  {
    //provide:HTTP_INTERCEPTORS,
    //useClass:ErrorInterceptor,
    //multi:true
  }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }


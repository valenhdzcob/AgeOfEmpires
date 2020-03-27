import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { MaterialModule } from './material.module';

import { CivilizationsComponent } from './civilizations/civilizations.component';

import { CivilizationsService } from './services/civilizations.service';
import { UnitsComponent } from './units/units.component';
import { TechnologyComponent } from './technology/technology.component';
import { StructureComponent } from './structure/structure.component'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CivilizationsComponent,
    UnitsComponent,
    TechnologyComponent,
    StructureComponent
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
  providers: [CivilizationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { MaterialModule } from './material.module';

import { CivilizationsComponent } from './civilizations/civilizations.component';

import { CivilizationsService } from './services/civilizations.service';
import { UnitsComponent } from './units/units.component';
import { TechnologyComponent } from './technology/technology.component';
import { StructureComponent } from './structure/structure.component';
import { CivsDetailsComponent } from './civs-details/civs-details.component';
import { SusDetailsComponent } from './sus-details/sus-details.component'
import { StructureService } from './services/structure.service';
import { TechDetailsComponent } from './tech-details/tech-details.component';
import { UnitDetailsComponent } from './unit-details/unit-details.component';
import { UnitsService } from './services/units.service';
import { TechnologyService } from './services/technology.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CivilizationsComponent,
    UnitsComponent,
    TechnologyComponent,
    StructureComponent,
    CivsDetailsComponent,
    SusDetailsComponent,
    TechDetailsComponent,
    UnitDetailsComponent
  ],
  entryComponents: [FormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    CommonModule
  ],
  exports: [MaterialModule
    
  ],
  providers: [CivilizationsService,StructureService,UnitsService,TechnologyService],
  bootstrap: [AppComponent]
})
export class AppModule { }


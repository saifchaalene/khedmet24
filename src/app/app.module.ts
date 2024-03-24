import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './FrontOffice/header/header.component';
import { FootorComponent } from './FrontOffice/footor/footor.component';
import { TemplateFrontComponent } from './FrontOffice/template-front/template-front.component';
import { AppRoutingModule } from './app.routing.module';
import { FooterBackComponent } from './BackOffice/footer-back/footer-back.component';
import { TemplateBackComponent } from './BackOffice/template-back/template-back.component';
import { HeadBackComponent } from './BackOffice/head-back/head-back.component';
import { SubmitPropertyComponent } from './Components/Pages/Carpooling/submit-property/submit-property.component';
//import { CarpoolingAskComponent } from './Components/Pages/Carpooling/carpooling-ask/carpooling-ask.component';



import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { AddPropertyStepsComponent } from './Components/Pages/Carpooling/widgets/add-property-steps/add-property-steps.component';

import { PropertyGalleryComponent } from './Components/Pages/Carpooling/widgets/property-gallery/property-gallery.component';
import { PropertyConfirmationComponent } from './Components/Pages/Carpooling/widgets/property-confirmation/property-confirmation.component';
import { PropertyGeneralDetailsComponent } from './Components/Pages/Carpooling/widgets/property-general-details/property-general-details.component';
import { PropertyAddressDetailsComponent } from './Components/Pages/Carpooling/widgets/property-address-details/property-address-details.component';
import { FeatherIconsComponent } from './shared/ui/feather-icons/feather-icons.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
//import { NgxDropzoneLabelModule } from 'ngx-dropzone';
import { CommonAgencyComponent } from './Components/Pages/Carpooling/common-agency/common-agency.component';
import { AgentListComponent } from './Components/Pages/Carpooling/agent-list/agent-list.component';
import { AgencyAgentsComponent } from './Components/Pages/Carpooling/agency-agents/agency-agents.component';
import { AdvanceFilterComponent } from './Components/Pages/Carpooling/advance-filter/advance-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FootorComponent,
    TemplateFrontComponent,
FooterBackComponent,
TemplateBackComponent,

//CarpoolingAskComponent,
HeadBackComponent,


    FootorComponent,
HeaderComponent,
  

SubmitPropertyComponent,
   
    AddPropertyStepsComponent,
    PropertyGeneralDetailsComponent,
    PropertyAddressDetailsComponent,
    PropertyGalleryComponent,
    PropertyConfirmationComponent,
    FeatherIconsComponent,

    AgentListComponent,
    CommonAgencyComponent,
    AgencyAgentsComponent,
    AdvanceFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    CommonModule,
  
   
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

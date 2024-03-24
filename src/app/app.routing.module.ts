import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TemplateFrontComponent } from './FrontOffice/template-front/template-front.component';
import { TemplateBackComponent } from './BackOffice/template-back/template-back.component';
import { SubmitPropertyComponent } from './Components/Pages/Carpooling/submit-property/submit-property.component';
//import { CarpoolingAskComponent } from './Components/Pages/Carpooling/carpooling-ask/carpooling-ask.component';
import { AgentListComponent } from './Components/Pages/Carpooling/agent-list/agent-list.component';


const routes: Routes = [
  {path:"admin",component:TemplateBackComponent},


    {path:"",component:TemplateFrontComponent},
    { 
      path: 'Carpooling', 
      children: [
        { path: 'addC', component: SubmitPropertyComponent },
        { path: 'askC', component: AgentListComponent }
      
  
      ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }

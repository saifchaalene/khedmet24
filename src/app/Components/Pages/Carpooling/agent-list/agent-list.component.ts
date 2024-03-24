import { Component } from '@angular/core';
import { agencyAgent ,propertyDetailsData } from 'src/app/shared/interface/property';
//import { PropertyService } from 'src/app/shared/services/property.service';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.scss'],
})
export class AgentListComponent {

  public themeLogo = 'assets/images/logo/2.png';
  public footerLogo = 'assets/images/logo/footer-logo.png';
  public bgImage = 'assets/images/inner-background.jpg';
  public title = 'Agent List';
  public parent = 'Home';
  public child = 'Agent List';

  public agentsData: agencyAgent[]=[];
  //public propertyData: propertyDetailsData=;

  public theme_default3 = '#ff5c41';
  public theme_default4 = '#ff8c41';

  constructor() {}

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-default', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default3', this.theme_default3);
    document.documentElement.style.setProperty('--theme-default4', this.theme_default4);

    
/*
    this.propertyService.propertyDetailsData().subscribe((response) => {
      this.propertyData = response;
    });*/
  }

  ngOnDestroy(): void {
    document.documentElement.style.removeProperty('--theme-default');
    document.documentElement.style.removeProperty('--theme-default3');
    document.documentElement.style.removeProperty('--theme-default4');
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
//import { Options } from 'ngx-slider-v2';
import { agencyParams, areaFilter, bathParams, bedParams, categoryParams, img, priceFilter, roomsParams, statusParams } from '../../../../shared/interface/property';

import { CarpoolingPreferences } from 'src/app/models/modelSM/CarpoolingPreferenes';
import { CarpoolingService } from 'src/app/services/servicesSM/carpooling.service';
@Component({
  selector: 'app-advance-filter',
  templateUrl: './advance-filter.component.html',
  styleUrls: ['./advance-filter.component.scss'],
})

export class AdvanceFilterComponent {
  carpoolingPreferences: CarpoolingPreferences = {};
 floors: number=0 ;
  getlocation : String='' ;
nbplaces : number=0;
carpoolingtype:String='';
chaufage:boolean = false;
climatise:boolean =false;
radionopen:boolean=false;
smoking :boolean=false;
desc:String='';
  constructor(private carpoolingService: CarpoolingService) { }
  ngOnInit(): void {

  }
  addPreferces(userId: number, budget: number, getlocation :String, nbplaces : number,carpoolingType:String ,chaufage : boolean,radionopen : boolean,smoking : boolean,climatise : boolean,desc:String): void {
    this.carpoolingPreferences.budget = budget;
    this.carpoolingPreferences.nbPlaces=nbplaces;
    this.carpoolingPreferences.carpoolingType= carpoolingType;
    this.carpoolingPreferences.chauffage=chaufage;
    this.carpoolingPreferences.climatise=climatise;
 
    this.carpoolingPreferences.smoking=smoking;
    this.carpoolingPreferences.radioon="0";
if( radionopen==true){
  this.carpoolingPreferences.radioon="1";
}

  if ( typeof getlocation== "string" && typeof desc=="string"){
    this.carpoolingPreferences.description="rFA";
    this.carpoolingPreferences.description=desc;
    this.carpoolingPreferences.location = getlocation;
  }
    console.log('chofage:', chaufage); 
    console.log('Floors:', this.floors);
    console.log('Carpoling Preferences:', this.carpoolingPreferences);
    this.carpoolingService.addPrefernces(userId, this.carpoolingPreferences).subscribe(
      (addedReq) => {
        console.log('New Preference added:', addedReq);
      },
      (error) => {
        console.error('Error adding Preference:', error);
      }
    );
  }
}
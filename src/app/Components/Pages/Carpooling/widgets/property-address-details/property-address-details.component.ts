import { Component, EventEmitter, Output, Input, AfterViewInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { CarpoolingOffer } from 'src/app/models/modelSM/CarpoolingOffer';
import { CarpoolingService } from 'src/app/services/servicesSM/carpooling.service';
//import { Input, OnInit } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { Marker, marker, CircleMarker } from 'leaflet';
import * as L from 'leaflet';
import axios from 'axios';
@Component({
  selector: 'app-property-address-details',
  templateUrl: './property-address-details.component.html',
  styleUrls: ['./property-address-details.component.scss'],
})
export class PropertyAddressDetailsComponent {
  marker: Marker<any> | null = null;


  @Input() activeCoo: CarpoolingOffer={};
csaif:CarpoolingOffer={};
@Output() activeCOO = new EventEmitter<CarpoolingOffer>();
  @Output() activeSteps = new EventEmitter<number>();
  @Output() activeIds = new EventEmitter<number>();
  public activeStep: number = 2;
  public validate: boolean = false;
  loc: string = ''; 
  delegation : string ='';
  code:number=0;
   

  public myForm = new FormGroup({
    address: new FormControl('', Validators.required),
    pin_code: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{4}$'),
      Validators.minLength(4),
      Validators.maxLength(4),
    ]),
   
    landmark: new FormControl('', Validators.required),
  });

  



  constructor( private elementRef: ElementRef, @Inject(PLATFORM_ID) private platformId: Object, private carpoolingService: CarpoolingService) { }
    
  
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('leaflet').then(() => {
        const map = L.map(this.elementRef.nativeElement.querySelector('#map')).setView([36.7, 10], 13);

        L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
          maxZoom: 20,
          attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        map.on('click', async (e: any) => {
          const latlng = e.latlng;
          console.log(latlng);

          if (this.marker) {
            map.removeLayer(this.marker);
          }

          this.marker = marker([latlng.lat, latlng.lng]).addTo(map).bindPopup(`Latitude: ${latlng.lat}, Longitude: ${latlng.lng}`);

          // Reverse geocoding to get country name
          try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${latlng.lat}&lon=${latlng.lng}&format=json`);
            const address = response.data.address;
            const country = address.country;
            const state = address.state || address.province || address.county; 
            const codepost = address.postcode;
            const county = address.county;
            const sta = address.state_district;
             this.loc=county;
this.delegation=sta;
             this.code=codepost;
            console.log("ffff", address)
                  
            console.log("Country:", sta);
          
          } catch (error) {
            console.error('Error fetching address:', error);
          }
        });

       
      }).catch(error => {
        console.error('Error loading Leaflet', error);
      });
    }
  }

  
  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }
  next(myForm: FormGroup,loc:string) {
 console.log('ffftaw',this.activeCoo)
   if (this.myForm.invalid) {
     this.validate = true;
   } else {
this.activeCoo.location=loc;
console.log('estcesu',this.activeCoo.carpoolingOfferID);
if(typeof this.activeCoo.carpoolingOfferID=="number"){
  console.log('maram');
    this.carpoolingService.updateOffer(this.activeCoo.carpoolingOfferID,this.activeCoo).subscribe(
      (uOf) => {
        console.log('New offer update:', uOf);
        this.activeCOO.emit(uOf);
      },
      (error) => {
        console.error('Error adding offer:', error);
      }

    )
    }
     const number = this.activeStep + 1;
     this.activeSteps.emit(number);
   }
  }
 
  
  get address() {
    return this.myForm.get('address');
  }


  get pin_code() {
    return this.myForm.get('pin_code');
  }

 

  get landmark() {
    return this.myForm.get('landmark');
  }
}

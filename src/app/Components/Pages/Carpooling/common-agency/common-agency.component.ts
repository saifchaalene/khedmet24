import { Component, Input } from '@angular/core';
import { agencyAgent } from 'src/app/shared/interface/property';

import { CarpoolingOffer } from 'src/app/models/modelSM/CarpoolingOffer';
import { CarpoolingService } from 'src/app/services/servicesSM/carpooling.service';
import { CarpoolingRequest } from 'src/app/models/modelSM/CarpoolingRequest';
import { getLocaleDateFormat } from '@angular/common';
@Component({
  selector: 'app-common-agency',
  templateUrl: './common-agency.component.html',
  styleUrls: ['./common-agency.component.scss'],
})
export class CommonAgencyComponent {
  
  @Input() carpoolingOffers: CarpoolingOffer[] = [];
  @Input() carpoolingRequest: CarpoolingRequest = {};
  @Input() agencyData: agencyAgent[]=[];
  @Input() type: string='';
  @Input() totalData: number=0;
  
  public searchType: string = 'Aller'; // Valeur par défaut
  public departureDate: Date=new Date();
  public returnDate: Date=new Date();
 // public filteredCarpoolingOffers: CarpoolingOffer[];
public location :   string='';

  public isOpenFilter: boolean = false;
  public isOpen: boolean = false;
  public listView: boolean = false;
  public active: boolean = false;
  public listViewBox: boolean = false;
  public col_lg_6: boolean = false;
  public col_md_6: boolean = false;
  public col_lg_4: boolean = false;
  public col_xxl_3: boolean = false;
  public col_6: boolean = false;
  public col_xl_6: boolean = false;
  public col_xl_4: boolean=false;
  constructor(private carpoolingService: CarpoolingService) { }

  ngOnInit() {
    this.getAllOffers();
    if (this.type == 'grid-2') {
      this.carpoolingService.col_lg_6 = true;
      this.carpoolingService.col_md_6 = true;
    }
    if (this.type == 'grid-3') {
      this.carpoolingService.col_md_6 = true;
      this.carpoolingService.col_xl_4 = true;
      this.carpoolingService.col_lg_4 = false;
      this.carpoolingService.col_6 = false;
      this.carpoolingService.col_lg_6 = false;

    }
    if (this.type == 'map') {
      this.carpoolingService.col_md_6 = true;
      this.carpoolingService.col_lg_6 = true;
    }
    if (this.type == 'list') {
      this.carpoolingService.listView = true;
      this.carpoolingService.col_lg_6 = true;
      this.carpoolingService.col_xl_6 = true;
      this.carpoolingService.col_md_6 = false;
    }
  }

  ngOnDestroy() {
    this.carpoolingService.listView = false;
    this.carpoolingService.col_lg_6 = false;
    this.carpoolingService.col_md_6 = false;
    this.carpoolingService.col_lg_4 = false;
    this.carpoolingService.col_xxl_3 = false;
    this.carpoolingService.col_6 = false;
    this.carpoolingService.col_xl_6 = false;
  }

  ngDoCheck() {
    this.listView = this.carpoolingService.listView;
    this.col_lg_6 = this.carpoolingService.col_lg_6;
    this.col_md_6 = this.carpoolingService.col_md_6;
    this.col_lg_4 = this.carpoolingService.col_lg_4;
    this.col_xxl_3 = this.carpoolingService.col_xxl_3;
    this.col_6 = this.carpoolingService.col_6;
    this.col_xl_6 = this.carpoolingService.col_xl_6;
    this.col_xl_4 = this.carpoolingService.col_xl_4;
  }
  
  getAllOffers(): void {
    this.carpoolingService.getAll().subscribe(
      (offers: CarpoolingOffer[]) => {
        this.carpoolingOffers = offers;
      },
      (error) => {
        console.error('Error fetching offers:', error);
      }
    );
  }
  
  searchOffers(): void {
    this.carpoolingService.searchCarpoolingOffer(this.location,this.searchType, this.departureDate, this.returnDate).subscribe(
      (offers: CarpoolingOffer[]) => {
       // this.filteredCarpoolingOffers = offers;
      },
      (error) => {
        console.error('Error searching offers:', error);
      }
    );
  }
  trackByFn(index: number, offer: CarpoolingOffer): number | null {
    return offer.carpoolingOfferID != undefined ? offer.carpoolingOfferID : null;
  }
  
  
}

import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/provider.service';
import { Provider } from '@angular/compiler/src/core';

@Component({
  selector: 'app-sort-comp',
  templateUrl: './sort-comp.component.html',
  styleUrls: ['./sort-comp.component.css']
})
export class SortCompComponent implements OnInit {

  providersList: Provider[];
  sortAsc: Boolean = true;
  selectedItem: any;

  constructor(private providerService: ProviderService) { }

  ngOnInit() {
    this.providersList = this.providerService.providersFullList;
  }
  sortByPrice() {
    this.selectedItem = 'Price';
    this.providersList = this.providerService.providersFullList;
    if (this.sortAsc) {
      this.providerService.providersFullList = this.providersList.sort((a, b) =>
        a.lowest_price-b.lowest_price
      );
    }
    else {
      this.providerService.providersFullList = this.providersList.sort((a, b) =>
      b.lowest_price-a.lowest_price);
    }
    this.sortAsc = !this.sortAsc;
  }
  sortByName() {
    this.selectedItem = 'Name';
    this.providersList = this.providerService.providersFullList;
    if (this.sortAsc) {
      this.providerService.providersFullList = this.providersList.sort((a, b) =>
        a.isp_name.localeCompare(b.isp_name)
      );

    }
    else {
      this.providerService.providersFullList = this.providersList.sort((a, b) =>
        b.isp_name.localeCompare(a.isp_name)
      );
    }
    this.sortAsc = !this.sortAsc;
  }
}

import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/provider.service';
import { Provider } from '../shared/provider.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashlist',
  templateUrl: './dashlist.component.html',
  styleUrls: ['./dashlist.component.css']
})
export class DashlistComponent implements OnInit {

  providersList: Provider[];
  searchQuery: String;
  providerSub: Observable<Provider[]>;

  constructor(private providerService: ProviderService) {
  }

  ngOnInit() {
    console.log("Getting initialized");
    this.searchQuery = this.providerService.searchQuery;
    this.providerSub = this.providerService.getProviders();
    this.providerSub.subscribe((data) => {
      this.providersList = data;
      this.providerService.selectedProvider = this.providersList[0];
      this.providerService.providersFullList = this.providersList;
      console.log(this.providersList);
    }
    );
  }

  showProvider(p: Provider) {
    console.log(p);
    this.providerService.selectedProvider = p;
  }

  searchProvider() {
    this.providersList = this.providerService.providersFullList;
    if (this.searchQuery.trim() !== "") {
      this.providersList = this.providersList.filter(item => {
        return item['isp_name'].toUpperCase().includes(this.searchQuery.toUpperCase())
      });
    }
    console.log(this.searchQuery);
  }
}

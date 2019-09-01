import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { ProviderService } from '../shared/provider.service';
import { Provider } from '@angular/compiler/src/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-dashdesc',
  templateUrl: './dashdesc.component.html',
  styleUrls: ['./dashdesc.component.css']
})
export class DashdescComponent implements OnInit {
  @ViewChild('rating') rating: ElementRef;
  selectedProvider: Provider;
  providerSub: Observable<Provider[]>;

  constructor(private providerService: ProviderService) {
    this.providerSub = this.providerService.getProviders();
    this.providerSub.subscribe(data => {
      this.selectedProvider = data[0];
      this.providerService.selectedProvider = this.selectedProvider;
    })
  }
  
  ngOnInit() {
  }

}

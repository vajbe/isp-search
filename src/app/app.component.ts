import { Component } from '@angular/core';
import { ProviderService } from './shared/provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private providerService: ProviderService){
    console.log("Inside app comp constructor");
    this.providerService.getProviders().subscribe((data) => {
      this.providerService.selectedProvider = data[0];
      console.log(this.providerService.selectedProvider);
    }
    );
  }
}

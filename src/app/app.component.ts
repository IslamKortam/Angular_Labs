import { Component, ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductServiceService } from './services/product-service.service';



@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  title = 'Day1_Task1';
}

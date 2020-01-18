import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class 

OrdersPageComponent implements OnInit {

  orders: any;

  constructor(private _HttpService: HttpService ) { }

  ngOnInit() {
    this._HttpService.getOrder().subscribe((data: Array<any>) => { 
      this.orders = data
      console.log(this.orders)
      console.log(this.orders[0].items_list[0].name)
    });
  }

}

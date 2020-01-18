import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';

@Component({
  selector: 'app-denined-page',
  templateUrl: './denined-page.component.html',
  styleUrls: ['./denined-page.component.scss']
})
export class DeninedPageComponent implements OnInit {

  denied : any
  constructor(private _HttpService: HttpService) { }

  ngOnInit() {
    this._HttpService.getOrder().subscribe((data: Array<any>) => {
      var deniedOrders = data.filter(order => order.state === "rejected"); 
      this.denied = deniedOrders 
      console.log(this.denied)
     
    });
  }

}

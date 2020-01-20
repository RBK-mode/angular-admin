import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../../http.service";

@Component({
  selector: "app-customer-page",
  templateUrl: "./customer-page.component.html",
  styleUrls: ["./customer-page.component.scss"]
})
export class CustomerPageComponent implements OnInit {
  customers: any;

  constructor(private _HttpService: HttpService) {}

  ngOnInit() {
    this._HttpService.getCustomers().subscribe((data: Array<any>) => {
      this.customers = data;
      console.log(this.customers);
    });
  }
}

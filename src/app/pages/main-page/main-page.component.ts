import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"]
})
export class MainPageComponent implements OnInit {
  users: any;
  orders: any;
  approvedOrders: any;
  rejectedOrders: any;

  constructor(private _http: HttpService, private router: Router) {}

  ngOnInit() {
    this._http.getUsers().subscribe(user => {
      this.users = user;
    });

    this._http.getOrders().subscribe((orders: Array<any>) => {
      this.approvedOrders = orders.filter(order => order.state === "approved");
      this.rejectedOrders = orders.filter(order => order.state === "rejected");
      this.orders = orders;
    });
  }
}

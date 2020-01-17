import { Component } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-admin";

  users: any;
  orders: any;
  approvedOrders: any;
  rejectedOrders: any;

  constructor(private _http: HttpService) {}

  ngOnInit() {
    this._http.getAdmin().subscribe(user => {
      this.users = user;
    });

    this._http.getOrders().subscribe((orders: Array<any>) => {
      this.approvedOrders = orders.filter(order => order.state === "approved");
      this.rejectedOrders = orders.filter(order => order.state === "rejected");
      this.orders = orders;
    });
  }
}

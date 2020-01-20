import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../../http.service";
import { COMPOSITION_BUFFER_MODE } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-orders-page",
  templateUrl: "./orders-page.component.html",
  styleUrls: ["./orders-page.component.scss"]
})
export class OrdersPageComponent implements OnInit {
  orders: any;

  constructor(private _HttpService: HttpService, private router: Router) {}

  acceptOrder(id) {
    console.log("accepted");
    console.log(id);

    this._HttpService.postOrderState(id).subscribe(data => {
      this.router.navigate(["orders"]);
      this.ngOnInit();
      console.log(data);
    });
  }

  rejectOrder(id) {
    console.log(id);

    this._HttpService.postOrderState(id).subscribe(data => {
      this.router.navigate(["orders"]);
      this.ngOnInit();
      console.log(data);
    });
  }

  ngOnInit() {
    this._HttpService.getOrders().subscribe((data: Array<any>) => {
      this.orders = data;
      console.log(data, "hiiiiiiiiiiiiiiiiiiiiiiiiiiiii");

      // console.log(this.orders);
      //console.log(this.orders[0].items_list[0].name);
    });
  }
}

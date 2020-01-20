import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../../http.service";

@Component({
  selector: "app-approval-page",
  templateUrl: "./approval-page.component.html",
  styleUrls: ["./approval-page.component.scss"]
})
export class ApprovalPageComponent implements OnInit {
  approved: any;
  constructor(private _HttpService: HttpService) {}

  ngOnInit() {
    this._HttpService.getOrder().subscribe((data: Array<any>) => {
      var approvedOrders = data.filter(order => order.state === "approved");
      this.approved = approvedOrders;
      console.log(this.approved);
    });
  }
}

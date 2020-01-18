import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../http.service";

@Component({
  selector: "app-categories-btns",
  templateUrl: "./categories-btns.component.html",
  styleUrls: ["./categories-btns.component.scss"]
})
export class CategoriesBtnsComponent implements OnInit {
  categories: any;

  constructor(private _http: HttpService) {}

  ngOnInit() {
    this._http.getCats().subscribe((cats: Array<any>) => {
      this.categories = cats;
    });
  }
}

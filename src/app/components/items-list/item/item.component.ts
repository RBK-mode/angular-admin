import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"]
})
export class ItemComponent implements OnInit {
  constructor() {
    // var get = ()=>{
    // return this.item
    // }
  }

  @Input() item: any;

  ngOnInit() {}
}

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

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

  @Output() elementDeleted: EventEmitter<any> = new EventEmitter<number>();

  deleteElement(element) {
      // console.log(element._id, 'this is element')
      this.elementDeleted.emit(element);
    }
    
  ngOnInit() {}
}

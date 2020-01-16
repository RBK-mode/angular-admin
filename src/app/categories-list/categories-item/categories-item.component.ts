import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories-item',
  templateUrl: './categories-item.component.html',
  styleUrls: ['./categories-item.component.scss']
})
export class CategoriesItemComponent implements OnInit {

  constructor() { 

    var get = ()=>{
      return this.catlists
    }

  }
  @Input() catlists: any;
  

  ngOnInit() {
    
    console.log(this.catlists)
  }


}

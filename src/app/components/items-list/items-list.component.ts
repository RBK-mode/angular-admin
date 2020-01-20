import { Component, OnInit, Injectable, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, NgForm } from '@angular/forms';
import { FormGroup, FormControl } from "@angular/forms";
import { Location } from '@angular/common';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})


export class ItemsListComponent implements OnInit {
  items = [] // name, img, price, categoryId
  categories =[]
  selectedValue :any ;
  constructor(private http : HttpClient) {
  }
  
  @Input() element: any;
  
  ngOnInit() {
    var that = this
    this.onGet(function(res){
       that.items = res
    })
    this.onGetCat(function(res){
      that.categories = res;
    })
  }


  onSubmit(form: NgForm){
    // console.log(this.categories ,"listed categories")
    // console.log(form.value , 'current form value');
    this.onPost(form.value)
    //add new item to the array to display it
    this.items.push({
    "name":form.value.name,
    "img":form.value.img,
    "price":form.value.price,
    "categoryId": form.value.selectedValue._id})
    //reset the form values
    form.reset();
  }

//**************fitch items************************************
// name, img, price, categoryId
  onPost(form){
      this.http.post('http://localhost:8000/api/item/',{
      "name":form.name,
      "img":form.img,
      "price":form.price,
      "categoryId": form.selectedValue._id
    })
    .subscribe( res => 
      console.log(res , "after Post")
      )
    }

    onGet(cb){
      
      this.http.get('http://localhost:8000/api/item/')
      .subscribe( res =>
        cb(res)        
        )
    }

    
    onElementDeleted(event) {
      console.log(event, 'thisis the eleemt');
      this.onDelete(event._id)
      let index = this.items.indexOf(event);
      this.items.splice(index, 1);
    }
    
    onDelete(id){
      this.http.delete(`http://localhost:8000/api/item/${id}`)
      .subscribe( res =>
        console.log(res)
        )
      }

    //*************fitch categories ***********************
    onGetCat(cb){
      this.http.get('http://localhost:8000/api/category/')
      .subscribe( res =>
        cb(res)        
        )
    }
}

//****************************************************************** */

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}

import { Component, OnInit, Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, NgForm } from '@angular/forms';
import { FormGroup, FormControl } from "@angular/forms";


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})


export class ItemsListComponent implements OnInit {
  items = [] // name, img, price, categoryId
  constructor(private http : HttpClient) { }
  
  
  ngOnInit() {
    var that = this
    this.onGet(function(res){
       that.items = res
      console.log( that.items)
    })
  }


  onSubmit(form: NgForm){
    console.log(form.value.name);
    console.log(form.value.img);
    this.onPost(form.value)
    form.reset();
    // this.ngOnInit()
    var that = this
    this.onGet(function(res){
       that.items = res
      console.log( that.items)
    })
  }
// name, img, price, categoryId
  onPost(form){
    this.http.post('http://localhost:8000/api/item/',{
      "name":form.name,
      "img":form.img,
      "price":form.price,
      "categoryId": "5e20b48edddffe5208b575f6"
    })
    .subscribe( res => 
      console.log(res)
      )
    }

    onGet(cb){
      this.http.get('http://localhost:8000/api/item/')
      .subscribe( res =>
        cb(res)        
        )
    }
}



@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}

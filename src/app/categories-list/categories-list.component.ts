import { Component, OnInit, Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, NgForm } from '@angular/forms';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})


export class CategoriesListComponent implements OnInit {
catlist = []
//  {name:"shawerma", img:'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
//  {name:"burger", img:'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg'}
// ]
checkoutForm;
constructor(private http : HttpClient) {
   
}


onSubmit(form: NgForm){
    // console.log(form.value);
    console.log(form.value, 'form value');
    this.onPost(form.value)
    this.catlist.push({
      "name": form.value.name,
      "img": form.value.url
    })
    form.reset();
  }
  
  onElementDeleted(element) {
    console.log(element, 'delete element')
    let index = this.catlist.indexOf(element);
    this.catlist.splice(index, 1);
  }

  ngOnInit() {
    var that = this
    this.onGet(function(res){
       that.catlist = res
      // console.log( that.catlist)
    })
  }

  onPost(form){
    this.http.post('http://localhost:8000/api/category/',{
      "name": form.name,
      "img": form.url
    }).subscribe()
      //  res =>  console.log(res)
      // )
    }
    onGet(cb){
      this.http.get('http://localhost:8000/api/category/')
      .subscribe( res =>
        cb(res)        
        )
    }

}

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}

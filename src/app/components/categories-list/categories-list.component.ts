// import { Component, OnInit, Injectable, Input } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
// import { FormBuilder, NgForm } from "@angular/forms";
// import { FormGroup, FormControl } from "@angular/forms";

// @Component({
//   selector: "app-categories-list",
//   templateUrl: "./categories-list.component.html",
//   styleUrls: ["./categories-list.component.scss"]
// })
// export class CategoriesListComponent implements OnInit {
//   catlist = [];
//   checkoutForm;
//   constructor(private http: HttpClient) {}

//   @Input() element: any;

//   onSubmit(form: NgForm) {
//     // console.log(form.value);
//     console.log(form.value, "form value");
//     this.onPost(form.value);
//     this.catlist.push({
//       name: form.value.name,
//       img: form.value.url
//     });
//     form.reset();
//   }

//   onElementDeleted(event) {
//     console.log(event, "thisis the eleemt");
//     this.onDelete(event._id);
//     let index = this.catlist.indexOf(event);
//     this.catlist.splice(index, 1);
//   }

//   ngOnInit() {
//     var that = this;
//     this.onGet(function(res) {
//       that.catlist = res;
//     });
//   }

//   onPost(form) {
//     this.http
//       .post("http://localhost:8000/api/category/", {
//         name: form.name,
//         img: form.url
//       })
//       .subscribe();
//   }
//   onGet(cb) {
//     this.http
//       .get("http://localhost:8000/api/category/")
//       .subscribe(res => cb(res));
//   }

//   onDelete(id) {
//     this.http
//       .delete(`http://localhost:8000/api/category/${id}`)
//       .subscribe(res => console.log(res));
//   }
// }

// @Injectable()
// export class ConfigService {
//   constructor(private http: HttpClient) {}
// }

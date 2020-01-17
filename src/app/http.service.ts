import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getAdmin() {
    return this.http.get("http://localhost:8000/api/user", {
      headers: new HttpHeaders({
        auth:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTIwYTY4YTgyNWEyYzAzZjRhYmI5OWQiLCJpYXQiOjE1NzkxOTgwOTB9.yC_Gjm1h4ZT_17omBdiPba1D-_MkKW4z6A3vhb2KS6g"
      })
    });
  }

  getOrders() {
    return this.http.get("http://localhost:8000/api/order", {
      headers: new HttpHeaders({
        auth:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTIwYTY4YTgyNWEyYzAzZjRhYmI5OWQiLCJpYXQiOjE1NzkxOTgwOTB9.yC_Gjm1h4ZT_17omBdiPba1D-_MkKW4z6A3vhb2KS6g"
      })
    });
  }

  getCats() {
    return this.http.get("http://localhost:8000/api/category");
  }
}

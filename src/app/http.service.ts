import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  static getCustomers() {
    throw new Error("Method not implemented.");
  }
  constructor(private http: HttpClient) {}

  getAdmin() {
    return this.http.get("http://localhost:8000/api/user", {
      headers: new HttpHeaders({
        auth:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTIxZDEwMjliOWMwYzMxZTQ2ZmVmNjQiLCJpYXQiOjE1NzkyNzQ0OTl9.fP-bzaGX5VAdAzYgFqvYz_mCcV4gpbZF6eiybhcEUTQ"
      })
    });
  }

  getOrders() {
    return this.http.get("http://localhost:8000/api/order");
  }

  getCats() {
    return this.http.get("http://localhost:8000/api/category");
  }

  getCustomers() {
    return this.http.get("http://localhost:8000/api/user", {
      headers: new HttpHeaders({
        auth:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTIxZDEwMjliOWMwYzMxZTQ2ZmVmNjQiLCJpYXQiOjE1NzkyNzQ0OTl9.fP-bzaGX5VAdAzYgFqvYz_mCcV4gpbZF6eiybhcEUTQ"
      })
    }); 
  }

  getOrder() {
    return this.http.get("http://localhost:8000/api/order", {
      headers: new HttpHeaders({
        auth:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTIxZDEwMjliOWMwYzMxZTQ2ZmVmNjQiLCJpYXQiOjE1NzkyNzQ0OTl9.fP-bzaGX5VAdAzYgFqvYz_mCcV4gpbZF6eiybhcEUTQ"
      })
    }); 
  }
}

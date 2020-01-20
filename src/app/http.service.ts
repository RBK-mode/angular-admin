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

  getUsers() {
    return this.http.get("http://localhost:8000/api/user");
  }

  getOrders() {
    return this.http.get("http://localhost:8000/api/order");
  }

  getCats() {
    return this.http.get("http://localhost:8000/api/category");
  }

  getCustomers() {
    return this.http.get("http://localhost:8000/api/user");
  }

  getOrder() {
    return this.http.get("http://localhost:8000/api/order");
  }

  httpOptions = { headers: new HttpHeaders() };

  postOrderState(id) {
    console.log(id);
    return this.http.post(
      `http://localhost:8000/api/order/reject/${id}`,
      this.httpOptions
    );
  }
}

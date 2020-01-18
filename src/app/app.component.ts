import { Component } from "@angular/core";
import { HttpService } from "./http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-admin";

  constructor(private _http: HttpService, private router: Router) {}

  ngOnInit() {
    let signInData = localStorage.getItem("token");

    if (!signInData) {
      console.log(signInData);
      this.router.navigate(["login"]);
    }
  }
}

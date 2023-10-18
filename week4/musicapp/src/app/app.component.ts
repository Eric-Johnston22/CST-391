import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Music Collection';
  version = "1.0";

  constructor(private router: Router) {

  }

  //constructor(private http: HttpClient) { };

  public displayVersion() {
    alert(" Version: " + this.version);
  }

  public displayArtistList() {
    this.router.navigate(['list-artists'], { queryParams: { data: new Date() } });
    alert("Display list here");
  }

}


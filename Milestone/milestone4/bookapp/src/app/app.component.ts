import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookapp';
  constructor(private router: Router) {
  }

  public displayBookList() {
    this.router.navigate(['list-books'], { queryParams: { data: new Date() } });
    alert("Display list here");
  }
}

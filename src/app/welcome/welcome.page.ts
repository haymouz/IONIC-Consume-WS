
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { from, observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  header: HttpHeaders;
  wsResponse ;

  constructor(private router: Router, private http: HttpClient) { }
  ngOnInit() {

    this.listUsers();
  }

  profileNav(id) {
    this.router.navigate(['details', id]);
  }


  async listUsers() {
    this.header = new HttpHeaders({
      'Content-type': 'application/json'
    });
    await this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((respose) => {
      this.wsResponse = <Array<any>>respose;
    });
  }

}

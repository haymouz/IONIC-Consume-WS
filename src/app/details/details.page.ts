import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  header: HttpHeaders;
  wsResponse ;
  id = '';
  new_id = '';

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((item) => {
      this.id = item.id;
      this.getUserProfile( this.id )

    });

  }

  async getUserProfile(id) {
    this.header = new HttpHeaders({
      'Content-type': 'application/json'
    });
    await this.http.get('https://jsonplaceholder.typicode.com/users/' + id ).subscribe((response) => {
      this.wsResponse = <Array<any>>response;
    });
  }

}

/* eslint-disable @typescript-eslint/dot-notation */
//student-edit.page
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inputs } from '../models/inputs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-input-edit',
  templateUrl: './input-edit.page.html',
  styleUrls: ['./input-edit.page.scss'],
})
export class InputEditPage implements OnInit {


  id: number;
  data: Inputs;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
    this.data = new Inputs();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    //get item details using id
    this.apiService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    });
  }

  update() {
    //Update item by taking id and updated data object
    this.apiService.updateItem(this.id, this.data).subscribe(response => {
      this.router.navigate(['input-list']);
    });
  }

}

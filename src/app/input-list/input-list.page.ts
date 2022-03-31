/* eslint-disable @typescript-eslint/naming-convention */
//student-list.page.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-input-list',
  templateUrl: './input-list.page.html',
  styleUrls: ['./input-list.page.scss'],
})
export class InputListPage implements OnInit {

  InputsData: any;

  constructor(
    public apiService: ApiService
  ) {
    this.InputsData = [];
  }

  ngOnInit() {
    // this.getAllInputs();
  }

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not
    // called due to view persistence in Ionic
    this.getAllInputs();
  }

  getAllInputs() {
    //Get saved list of Inputs
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.InputsData = response;
    });
  }


  delete(item) {
    //Delete item in Student data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllInputs();
    });
  }

}

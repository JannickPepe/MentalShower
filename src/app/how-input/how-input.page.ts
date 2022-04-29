/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { Inputs } from '../models/inputs';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-how-input',
  templateUrl: './how-input.page.html',
  styleUrls: ['./how-input.page.css'],
})
export class HowInputPage implements OnInit {

  data: Inputs;

  public levelbar: string;
  public levelbar2: string;
  public levelbar3: string;
  public colorvar;

  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new Inputs();
  }

  ngOnInit() {
  }

  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['overview']);
    },
      (error) => {
        this.router.navigate(['overview']);
      });
  }


  btnClicked(bar) {
    this.levelbar = bar;
  }
  btnClicked2(bar) {
    this.levelbar2 = bar;
  }
  btnClicked3(bar) {
    this.levelbar3 = bar;
  }


}

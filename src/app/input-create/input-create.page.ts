//student-create.page.ts
import { Component, OnInit } from '@angular/core';
import { Inputs } from '../models/inputs';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-create',
  templateUrl: './input-create.page.html',
  styleUrls: ['./input-create.page.scss'],
})
export class InputCreatePage implements OnInit {

  data: Inputs;

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
      this.router.navigate(['admin']);
    });
  }

}

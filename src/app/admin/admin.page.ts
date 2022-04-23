import { Component, OnInit } from '@angular/core';
import { InputClimate } from '../models/inputClimate.model';
import { AdminService } from '../services/admin/admin.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  // bulkEdit = false;
  // sortDirection = 0;
  // sortKey = null;
  // data = [];
  validationForm: FormGroup;
  validationMessages: any;
  editClicked = false;
  editClimate: InputClimate = {
    zoneNo: 0,
    gender: '',
    humidity: 0,
    airQuality: 0,
    temperature: 0,
    id: 0,
  };

  inputClimateNumbers: InputClimate[];

  constructor(
    private inputClimateService: AdminService,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.retrieveClimateInput();
    this.prepareFormValidation();
  }

  retrieveClimateInput(): void {
    this.inputClimateService.getAll().subscribe(
      (data) => {
        this.inputClimateNumbers = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  prepareFormValidation() {
    this.validationForm = this.formBuilder.group({
      zoneNo: new FormControl(
        this.editClimate.zoneNo,
        Validators.compose([
          Validators.minLength(1),
          Validators.maxLength(5),
          // Validators.pattern('[a-zA-Z ]*'),
          Validators.required,
        ])
      ),
      gender: new FormControl(
        this.editClimate.gender,
        Validators.compose([
          Validators.minLength(1),
          Validators.maxLength(1),
          Validators.pattern('[a-zA-Z ]*'),
          Validators.required,
        ])
      ),
      humidity: new FormControl(
        this.editClimate.humidity,
        Validators.compose([
          Validators.minLength(2),
          Validators.maxLength(10),
          Validators.required,
        ])
      ),
      airQuality: new FormControl(
        this.editClimate.airQuality,
        Validators.compose([
          Validators.minLength(2),
          Validators.maxLength(10),
          Validators.required,
        ])
      ),
      temperature: new FormControl(
        this.editClimate.temperature,
        Validators.compose([
          Validators.minLength(2),
          Validators.maxLength(10),
          Validators.required,
        ])
      ),
    });

    this.validationMessages = {
      zoneNo: [
        {
          type: 'required',
          message: 'Zone Number is required.',
        },
        // {
        //   type: 'minlength',
        //   message: 'ZoneNo must be at least 1 chars long.',
        // },
        // {
        //   type: 'maxlength',
        //   message: 'zone no cannot be more than 5 chars long.',
        // },
      ],
      gender: [
        {
          type: 'required',
          message: 'Gender is required.',
        },
        {
          type: 'minlength',
          message: 'Gender must be 1 chars long.',
        },
        {
          type: 'maxlength',
          message: 'Gender must be 1 chars long.',
        },
      ],
      humidity: [
        {
          type: 'required',
          message: 'humidity is required.',
        },
      ],
      airQuality: [
        {
          type: 'required',
          message: 'airQuality is required.',
        },
      ],
      temperature: [
        {
          type: 'required',
          message: 'temperature is required.',
        },
      ],
    };
  }

  // sortBy(key) {
  //   this.sortKey = key;
  //   this.sortDirection++;
  // }

  // sort() {
  //   if (this.sortDirection === 1) {
  //   } else if (this.sortDirection === 2) {
  //   } else {
  //     this.sortDirection = 0;
  //     this.sortKey = null;
  //   }
  // }

  // toggleBulkEdit() {}

  // bulkDelete() {}

  async removeRow(index) {
    this.inputClimateService.delete(index.id).subscribe(
      (data) => {
        // this.inputClimateNumbers = data;
        // console.log(data);
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
      }
    );
    alert('row deleted');
  }

  editRow(index) {
    this.inputClimateService.get(index.id).subscribe(
      (data) => {
        this.editClimate = data;
        // console.log(data);
        this.editClicked = true;
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
      }
    );
    alert('row edited');
  }

  // submit method
  send(formdata) {
    // this.request = formdata;
    // console.log(formdata);
    this.postClimateData(formdata);
  }

  edit(formdata) {
    // this.request = formdata;
    // console.log(formdata);
    this.editClimateData(formdata);
  }

  async postClimateData(postdata) {
    this.inputClimateService.create(postdata).subscribe(
      (data) => {
        this.inputClimateNumbers = data;
        // console.log(data);
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async editClimateData(postdata) {
    this.inputClimateService.update(this.editClimate.id, postdata).subscribe(
      (data) => {
        // this.inputClimateNumbers = data;
        this.editClicked = false;
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

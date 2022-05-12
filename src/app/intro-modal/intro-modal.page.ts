/* eslint-disable max-len */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-intro-modal',
  templateUrl: './intro-modal.page.html',
  styleUrls: ['./intro-modal.page.scss', './intro-modal.css'],
})
export class IntroModalPage implements OnInit {
  modalTitle: string;
  modalText: string;
  modalImgIntro: string;

  modalTitle2: string;
  modalText2: string;
  modalImgGender: string;

  modalTitle3: string;
  modalText3: string;
  modalImgRoom: string;

  modalTitle4: string;
  modalText4: string;
  modalImgInputs: string;

  modalTitle5: string;
  modalText5: string;

  modelId: number;


  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;

    this.modalTitle = this.navParams.data.paramTitle;
    this.modalText = this.navParams.data.paramText;
    this.modalImgIntro = this.navParams.data.paramImgIntro;

    this.modalTitle2 = this.navParams.data.paramTitle2;
    this.modalText2 = this.navParams.data.paramText2;
    this.modalImgGender = this.navParams.data.paramImgGender;

    this.modalTitle3 = this.navParams.data.paramTitle3;
    this.modalText3 = this.navParams.data.paramText3;
    this.modalImgRoom = this.navParams.data.paramImgRoom;

    this.modalTitle4 = this.navParams.data.paramTitle4;
    this.modalText4 = this.navParams.data.paramText4;
    this.modalImgInputs = this.navParams.data.paramImgInputs;

    this.modalTitle5 = this.navParams.data.paramTitle5;
    this.modalText5 = this.navParams.data.paramText5;
  }

  async closeModal() {
    const onClosedData: string = 'Wrapped Up!';
    await this.modalController.dismiss(onClosedData);
  }


}

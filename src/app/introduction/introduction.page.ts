/* eslint-disable max-len */
/* eslint-disable quote-props */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IntroModalPage } from '../intro-modal/intro-modal.page';


@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.css', './introduction.page.scss'],
})


export class IntroductionPage implements OnInit {
  dataReturned: any;

  constructor(
    public modalController: ModalController,
    public modalController2: ModalController,
    public modalController3: ModalController,
    public modalController4: ModalController,
    public modalController5: ModalController
  ) { }

  async openModal() {
    const modal = await this.modalController.create({
      component: IntroModalPage,
      componentProps: {
        'paramID': '1',
        'paramTitle': 'On the introduction page you can gain information about:',
        'paramText': 'Gender, room with zones, user inputs with air qualith, temperature and humidity and for the last part - see results before finish option',
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }

  async openModal2() {
    const modal2 = await this.modalController2.create({
      component: IntroModalPage,
      componentProps: {
        'paramID': '2',
        'paramTitle2': 'For the gender section, you would be able to choose:',
        'paramText2': 'There will be 3 avatar symbols - male, female or neutral with the "?" mark.',
      }
    });

    modal2.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal2.present();
  }

  async openModal3() {
    const modal2 = await this.modalController2.create({
      component: IntroModalPage,
      componentProps: {
        'paramID': '3',
        'paramTitle3': 'For the room and zone section, you would be able to choose:',
        'paramText3': 'Which kind of room you want with the given zones aftewards',
      }
    });

    modal2.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal2.present();
  }

  async openModal4() {
    const modal2 = await this.modalController2.create({
      component: IntroModalPage,
      componentProps: {
        'paramID': '4',
        'paramTitle4': 'For the user input section, you would be able to choose from level 1 to 6:',
        'paramText4': 'Air quility with fresh to stuffy, temperature from cold to hot and humidity with dry to moisty',
      }
    });

    modal2.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal2.present();
  }

  async openModal5() {
    const modal2 = await this.modalController2.create({
      component: IntroModalPage,
      componentProps: {
        'paramID': '5',
        'paramTitle5': 'For the results before finish page:',
        'paramText5': 'Here you will be able too see your inputs for the air quality, temperature and humidty. The room and zone number will be dislayed in the top of the page. Then the finish button as last confirmation.',
      }
    });

    modal2.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal2.present();
  }

  ngOnInit() {
  }


}

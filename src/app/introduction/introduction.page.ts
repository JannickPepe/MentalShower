/* eslint-disable max-len */
/* eslint-disable quote-props */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IntroModalPage } from '../intro-modal/intro-modal.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.css', './introduction.page.scss'],
})


export class IntroductionPage implements OnInit {
  dataReturned: any;

  constructor(
    public router: Router,
    public modalController: ModalController,
    public modalController2: ModalController,
    public modalController3: ModalController,
    public modalController4: ModalController,
    public modalController5: ModalController,
  ) { }

  async openModal() {
    const modal = await this.modalController.create({
      component: IntroModalPage,
      componentProps: {
        'paramID': '1',
        'paramTitle': 'On the introduction page, you can gain information about:',
        'paramText': 'There is not only a start survey button, but also a 5 step roadmap, shown below',
        'paramImgIntro': '../../assets/icon/intro.png',
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
        'paramTitle2': 'For the gender section:',
        'paramText2': 'There will be 3 avatar symbols - male, female or other.',
        'paramImgGender': '../../assets/icon/genderSection.png',
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
    const modal3 = await this.modalController3.create({
      component: IntroModalPage,
      componentProps: {
        'paramID': '3',
        'paramTitle3': 'For the room and zone section:',
        'paramText3': 'You can choose which room you are in, with the given zones aftewards',
        'paramImgRoom': '../../assets/icon/roomMap.png',
      }
    });

    modal3.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal3.present();
  }

  async openModal4() {
    const modal4 = await this.modalController4.create({
      component: IntroModalPage,
      componentProps: {
        'paramID': '4',
        'paramTitle4': 'For the user input section:',
        'paramText4': 'You would be able to choose from level 1 to 6 in the 3 categories:',
        'paramImgInputs': '../../assets/icon/input.png',
      }
    });

    modal4.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal4.present();
  }

  async openModal5() {
    const modal5 = await this.modalController5.create({
      component: IntroModalPage,
      componentProps: {
        'paramID': '5',
        'paramTitle5': 'For the results before finish page:',
        'paramText5': 'Here you will be able too see your inputs for the air quality, temperature and humidty. The room and zone number will be dislayed in the top of the page. Then the finish button as last confirmation.',
      }
    });

    modal5.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal5.present();
  }

  ngOnInit() {
  }

  submitForm() {
    this.router.navigate(['login']);
  }

}

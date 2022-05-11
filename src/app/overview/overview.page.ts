import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { OverviewItem } from '../models/app-model';
import { PopoverController } from '@ionic/angular';
import { AboutComponent } from '../components/about/about.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.css'],
})
export class OverviewPage implements OnInit {
  public measuredValues: OverviewItem[] = [
    {
      name: 'Air Quality',
      color: '#0d5660',
      // eslint-disable-next-line max-len
      icon: '<svg width="61" height="57" viewBox="0 0 61 57" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M1 28.5H51.15C52.9004 28.5 54.6114 28.0161 56.0668 27.1096C57.5222 26.2031 58.6565 24.9146 59.3263 23.4071C59.9962 21.8996 60.1714 20.2408 59.8299 18.6405C59.4885 17.0402 58.6456 15.5702 57.4079 14.4164C56.1702 13.2626 54.5933 12.4769 52.8765 12.1585C51.1598 11.8402 49.3804 12.0036 47.7632 12.628C46.1461 13.2524 44.7639 14.3098 43.7915 15.6665C42.819 17.0233 42.3 18.6183 42.3 20.25M3.95 17.5H24.6C26.3504 17.5 28.0614 17.0161 29.5168 16.1096C30.9722 15.2031 32.1065 13.9146 32.7763 12.4071C33.4462 10.8997 33.6214 9.24085 33.2799 7.64051C32.9385 6.04016 32.0956 4.57016 30.8579 3.41637C29.6202 2.26259 28.0433 1.47685 26.3265 1.15853C24.6098 0.840197 22.8304 1.00357 21.2133 1.628C19.5961 2.25242 18.2139 3.30984 17.2415 4.66655C16.269 6.02325 15.75 7.61831 15.75 9.25L3.95 17.5ZM6.9 39.5H39.35C41.1004 39.5 42.8114 39.9838 44.2668 40.8904C45.7222 41.7969 46.8565 43.0854 47.5263 44.5929C48.1962 46.1003 48.3714 47.7592 48.0299 49.3595C47.6885 50.9598 46.8456 52.4298 45.6079 53.5836C44.3702 54.7374 42.7933 55.5231 41.0765 55.8415C39.3598 56.1598 37.5804 55.9964 35.9632 55.372C34.3461 54.7476 32.9639 53.6902 31.9915 52.3334C31.019 50.9767 30.5 49.3817 30.5 47.75L6.9 39.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </svg>',
      value: 90,
      unit: '%'
    },
    {
      name: 'Temperature',
      color: '#604e0d',
      // eslint-disable-next-line max-len
      icon: '<svg width="59" height="55" viewBox="0 0 59 55" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M45.0254 6.47058C50.195 6.47058 55.0311 7.99117 59 10.6118L55.1311 19.9617C52.371 17.5154 48.7641 16.1644 45.0254 16.1765C36.6874 16.1765 30.017 22.647 30.017 30.7353C30.017 38.8235 36.6874 45.2941 45.0254 45.2941C48.4607 45.2941 51.5958 44.1941 54.1306 42.3176L57.9327 51.5382C54.0366 53.8131 49.5729 55.0103 45.0254 54.9999C38.3913 54.9999 32.0288 52.4435 27.3378 47.893C22.6467 43.3425 20.0113 37.1706 20.0113 30.7353C20.0113 24.2999 22.6467 18.128 27.3378 13.5775C32.0288 9.02703 38.3913 6.47058 45.0254 6.47058ZM10.0057 0C12.6593 0 15.2043 1.02258 17.0807 2.84278C18.9571 4.66299 20.0113 7.13171 20.0113 9.70587C20.0113 12.28 18.9571 14.7488 17.0807 16.569C15.2043 18.3892 12.6593 19.4117 10.0057 19.4117C7.35199 19.4117 4.80701 18.3892 2.93059 16.569C1.05416 14.7488 0 12.28 0 9.70587C0 7.13171 1.05416 4.66299 2.93059 2.84278C4.80701 1.02258 7.35199 0 10.0057 0ZM10.0057 6.47058C9.1211 6.47058 8.27277 6.81144 7.6473 7.41818C7.02182 8.02491 6.67043 8.84782 6.67043 9.70587C6.67043 10.5639 7.02182 11.3868 7.6473 11.9936C8.27277 12.6003 9.1211 12.9412 10.0057 12.9412C10.8902 12.9412 11.7385 12.6003 12.364 11.9936C12.9895 11.3868 13.3409 10.5639 13.3409 9.70587C13.3409 8.84782 12.9895 8.02491 12.364 7.41818C11.7385 6.81144 10.8902 6.47058 10.0057 6.47058Z" fill="black" fill-opacity="0.79" /> </svg>',
      value: 22,
      unit: '°C'
    },
    {
      name: 'Humidity',
      color: '#0d603d',
      // eslint-disable-next-line max-len
      icon: '<svg width="59" height="55" viewBox="0 0 59 55" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M54.0047 24.184L32.2763 0.960358C31.961 0.663372 31.5446 0.421264 31.0616 0.254211C30.5787 0.0871585 30.0433 0 29.5 0C28.9567 0 28.4213 0.0871585 27.9384 0.254211C27.4554 0.421264 27.039 0.663372 26.7237 0.960358L4.897 24.294C1.86468 27.577 0.175577 31.3387 0 35.1996C0 40.451 3.10803 45.4873 8.64035 49.2006C14.1727 52.9139 21.6761 55 29.5 55C37.3239 55 44.8273 52.9139 50.3596 49.2006C55.892 45.4873 59 40.451 59 35.1996C58.8116 31.2963 57.0882 27.4959 54.0047 24.184ZM29.5 50.5999C23.4172 50.5947 17.5857 48.9705 13.2844 46.0835C8.98322 43.1965 6.56336 39.2824 6.55556 35.1996C6.72978 32.1231 8.10662 29.1314 10.5479 26.5249L13.6126 23.2468L46.6329 45.41C44.4883 47.0409 41.8518 48.3471 38.898 49.2423C35.9443 50.1374 32.7408 50.6009 29.5 50.6021V50.5999Z" fill="black" /> </svg>',
      value: 65,
      unit: '%'
    }
  ];
  public icons: SafeHtml[] = [];

  constructor(private sanitizer: DomSanitizer, public popoverController: PopoverController) { }
  async presentPopover() {
    const popover = await this.popoverController.create({
      component: AboutComponent,
      cssClass: 'my-custom-class',
    
      translucent: true
    });
    await popover.present();
  
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  ngOnInit() {
    this.icons = this.measuredValues.map(item => this.sanitizer.bypassSecurityTrustHtml(item.icon));
  }


}

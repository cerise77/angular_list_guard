import { Component, HostBinding, ElementRef, Renderer2} from '@angular/core';
import {BigimgService} from "./service/prof.service";
import {Bigimg} from "./data/profData";
//import {ImgBaseComponent} from "./service/prof-base";

@Component({
    selector: 'pr-app',
    templateUrl: './html/prof.component.html',
    styleUrls: ['./html/app.component.scss']
})

  export class ProfileComponent  {
    public bigImg:Bigimg[];

    constructor(protected bigimgService: BigimgService) {  }
 
    ngOnInit(){
    this.bigimgService.bigImgSubject
          .subscribe(res => {
              this.bigImg = res;
          });
    }
  }

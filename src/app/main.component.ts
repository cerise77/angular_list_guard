import { Component, OnInit, ElementRef, Renderer2, Directive} from '@angular/core';
import {HttpService} from './service/http.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {Table} from './data/table';
import {BigimgService} from "./service/prof.service";
import {Router} from '@angular/router';


@Component({
    selector: 'main-app',
    templateUrl: './html/app.component.html',
    styleUrls: ['./html/app.component.scss']
})


  export class MainComponent implements OnInit{
    tables: Table[]=[];
    myForm : FormGroup;
    searchText: string;
    query: string;
    queryS: string;

    constructor(private HttpService:HttpService, private router: Router, private bigimgService:BigimgService){
       this.myForm = new FormGroup({
        "Birth": new FormControl("", Validators.pattern("^[0-9]+$")),
        "Name": new FormControl("", Validators.pattern("^[a-zA-Z]+$")) 
    });
    }

    ngOnInit(){
      this.HttpService.getData().subscribe((data:any) => {this.tables = data});
    }

    goProfile(table){
       this.router.navigate(['/profile']);
       this.bigimgService.bigImg({table});
    }

}

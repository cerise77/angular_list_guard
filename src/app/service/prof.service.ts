
import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Bigimg} from "../data/profData";

@Injectable()
export class BigimgService {

    public bigImgSubject = new BehaviorSubject([]);

    bigImg = (bigimg:Bigimg) => {
        let current = this.bigImgSubject.getValue();
        current.push(bigimg);
        this.bigImgSubject.next(current);
    };

}

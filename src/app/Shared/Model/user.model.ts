import { Data } from '@angular/router';

export class User{
    constructor(
        public email:string,
        public id:string,
        public _token:string,
        public expirestionData:Data){}
}
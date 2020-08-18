import { Component, OnInit } from '@angular/core';
import { UserServices } from '../User.services';
import { List, User } from 'src/app/Shared/Model/Main.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list:List[];
  constructor(
    private userServices:UserServices,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userServices.userChanged
              .subscribe((user:User) => 
              {
                this.list = user.list;
    })
    this.list = this.userServices.getList()   
  }

  onNewList(){
    this.router.navigate(['new-list'] , {relativeTo:this.route})
  }

}

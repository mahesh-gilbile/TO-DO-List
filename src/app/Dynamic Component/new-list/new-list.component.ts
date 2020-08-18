import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserServices } from 'src/app/main-window/User.services';
import { List, Task } from 'src/app/Shared/Model/Main.model';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private userservices:UserServices) { }

  ngOnInit(): void {
  }

  onBack(){
    this.router.navigate(['../'] , {relativeTo:this.route})
  }

  onSubmit(form:NgForm){
  const value = form.value;
  const list = new List(value.name , [])
  this.userservices.addList(list)
  this.onBack();
  }

}

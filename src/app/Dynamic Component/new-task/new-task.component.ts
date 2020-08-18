import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserServices } from 'src/app/main-window/User.services';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/Shared/Model/Main.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  list_id:number;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private userServices:UserServices
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params:Params) => {
        this.list_id = +params['list-id']
      })
  }

  onSubmit(form:NgForm){
    const value = form.value;
    const task = new Task(false , value.name);
    this.userServices.addtask(this.list_id , task);
    this.onBack()
  }

  onBack(){
    this.router.navigate(['../'] , {relativeTo:this.route})
  }

}

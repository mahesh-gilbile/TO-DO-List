import { Component, OnInit } from '@angular/core';
import { UserServices } from '../User.services';
import { Task } from 'src/app/Shared/Model/Main.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  

  tasks:Task[];
  list_id:number;
  otherComponent = true;

  constructor(
    private userservices:UserServices, 
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params:Params) => {
        this.list_id = +params['list-id'];
        this.tasks = this.userservices.getTask(this.list_id);
        this.otherComponent = this.list_id != null;
        console.log(this.otherComponent)

      })
  }

  onEditList(){
    this.router.navigate(['edit-list'] , {relativeTo:this.route})
  }

  onDeleteList(){
    this.userservices.toDeleteList(this.list_id);
    this.router.navigate(['../'] , {relativeTo:this.route})
  }

}

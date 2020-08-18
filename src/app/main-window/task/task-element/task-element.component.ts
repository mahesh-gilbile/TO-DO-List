import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Shared/Model/Main.model';
import { UserServices } from '../../User.services';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-task-element',
  templateUrl: './task-element.component.html',
  styleUrls: ['./task-element.component.css']
})

export class TaskElementComponent implements OnInit {
  @Input() task:Task;
  @Input() task_id:number;
  list_id:number;

  mouseOverEvent = false;

  constructor(
    private userServices:UserServices,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params:Params) => {
        this.list_id = +params['list-id']
      })
  }

  onMouseOver(){
    this.mouseOverEvent = true;
  }

  onMouseOut(){
    this.mouseOverEvent = false;
  }

  onClick(){
    this.userServices.taskMarkAsComplete(this.list_id , this.task_id);
  }

  onDelete(){
    this.userServices.toDeleteTask(this.list_id , this.task_id);
  }

  onEdit(){
    this.router.navigate([this.task_id , 'edit-task'] , {relativeTo:this.route});
  }
}

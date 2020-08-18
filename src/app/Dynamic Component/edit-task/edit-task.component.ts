import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UserServices } from 'src/app/main-window/User.services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  task_id:number;
  list_id:number;

  constructor(
    private userservices:UserServices,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params:Params) => {
        this.task_id = +params['task-id'];
        this.list_id = +params['list-id'];
      })
  }

  onSubmit(form:NgForm){
    const task = this.userservices.getSingleTask(this.list_id , this.task_id)
    const value = form.value
    task.name = value.name
    this.userservices.toUpdateTask(task , this.list_id , this.task_id);
    this.onBack();
  }

  onBack(){
    this.router.navigate(['../../'] , {relativeTo:this.route})
  }

}

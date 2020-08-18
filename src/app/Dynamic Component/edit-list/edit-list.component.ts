import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServices } from 'src/app/main-window/User.services';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  list_id:number;
  constructor(
    private userservices:UserServices,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe((params:Params) => {
        this.list_id = +params['list-id'];
      })

  }

  onSubmit(form:NgForm){
    const value = form.value;
    const list = this.userservices.getSingleList(this.list_id);
    list.name = value.name;
    this.userservices.toUpdateList(list , this.list_id);
    this.onBack();
  }

  onBack(){
    this.router.navigate(['../'] , {relativeTo:this.route});
  }

}

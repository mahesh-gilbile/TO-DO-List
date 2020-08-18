import { Injectable } from '@angular/core';
import { User, List, Task } from '../Shared/Model/Main.model';
import { StorageServices } from '../Shared/Strorage/storage.services';
import { Subject } from 'rxjs';

@Injectable()
export class UserServices{
    userChanged = new Subject<User>();
    constructor(private storageServices:StorageServices) { }

    private user:User;

    getList(){
        this.user = this.storageServices.getUser()
        return this.user.list;
    }

    getTask(index:number){
        return this.user.list[index].task;
    }

    getListName(index:number){
        return this.user.list[index].name;
    }

    getTaskName(list_id:number , task_id:number){
        return this.user.list[list_id].task[task_id].name;
    }

    addList(list:List){
        this.user.list.push(list);
        this.userChanged.next(this.user);
    }

    addtask(list_index:number ,task:Task){
        this.user.list[list_index].task.push(task);
        this.userChanged.next(this.user);
    }

    taskMarkAsComplete(list_id:number , task_id:number){
        this.user.list[list_id].task[task_id].check = !this.user.list[list_id].task[task_id].check;
        this.userChanged.next(this.user);
    }

    toDeleteTask(list_id:number , task_id:number){
        this.user.list[list_id].task.splice(task_id , 1);
        this.userChanged.next(this.user);
    }

    toDeleteList(list_id:number){
        this.user.list.splice(list_id , 1);
        this.userChanged.next(this.user)
    }

    getSingleTask(list_id:number , task_id:number){
        return this.user.list[list_id].task[task_id]
    }

    toUpdateTask(task:Task , list_id:number , task_id:number){
        this.user.list[list_id].task[task_id] = task;
        this.userChanged.next(this.user);
    }

    getSingleList(list_id:number){
        return this.user.list[list_id]
    }

    toUpdateList(list:List , list_id:number){
        this.user.list[list_id] = list;
        this.userChanged.next(this.user);
    }
}
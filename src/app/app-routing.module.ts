import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { MainWindowComponent } from './main-window/main-window.component';
import { AuthComponent } from './auth/auth.component';
import { NewListComponent } from './Dynamic Component/new-list/new-list.component';
import { TaskComponent } from './main-window/task/task.component';
import { EditListComponent } from './Dynamic Component/edit-list/edit-list.component';
import { NewTaskComponent } from './Dynamic Component/new-task/new-task.component';
import { EditTaskComponent } from './Dynamic Component/edit-task/edit-task.component';
import { StartComponent } from './main-window/start/start.component';

const appModules : Routes = [ 
    { path : '' , redirectTo:'/auth' , pathMatch:'full'},
    { path : 'auth' , component:AuthComponent},
    { path : 'main-page' , component:MainWindowComponent,children:[
        {path : 'new-list' , component:NewListComponent},
        {path : '' , component:StartComponent},
        {path : ':list-id' , component:TaskComponent},
        {path : ':list-id/edit-list' , component:EditListComponent},
        {path : ':list-id/new-task' , component:NewTaskComponent},
        {path : ':list-id/:task-id' , redirectTo:'/:list-id' , pathMatch:'full'},
        {path : ':list-id/:task-id/edit-task' , component:EditTaskComponent},
        // {path : '**' , redirectTo:'/auth'}
    ]}
]

@NgModule({
    imports: [RouterModule.forRoot(appModules)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}
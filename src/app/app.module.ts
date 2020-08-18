import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { ListComponent } from './main-window/list/list.component';
import { TaskComponent } from './main-window/task/task.component';
import { StartComponent } from './main-window/start/start.component';
import { AppRoutingModule } from './app-routing.module';
import { StorageServices } from './Shared/Strorage/storage.services';
import { UserServices } from './main-window/User.services';
import { ListElementComponent } from './main-window/list/list-element/list-element.component';
import { TaskElementComponent } from './main-window/task/task-element/task-element.component';
import { NewListComponent } from './Dynamic Component/new-list/new-list.component';
import { EditListComponent } from './Dynamic Component/edit-list/edit-list.component';
import { EditTaskComponent } from './Dynamic Component/edit-task/edit-task.component';
import { NewTaskComponent } from './Dynamic Component/new-task/new-task.component';
import { DropDownDirective } from './Shared/Directives/Dropdown.directive';

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        MainWindowComponent,
        ListComponent,
        TaskComponent,
        StartComponent,
        
        ListElementComponent,
        TaskElementComponent,
        
        NewListComponent,
        EditListComponent,
        EditTaskComponent,
        NewTaskComponent,
        DropDownDirective
    ],
    imports :[
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [StorageServices , UserServices],
    bootstrap: [AppComponent]
})

export class AppModule { }
import { Component, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Title } from '@angular/platform-browser';
import { NewTaskComponent } from './new-task/new-task.component';
import { type newTaskData } from './task/task.model';
import { TaskService } from './task/task.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() userId!:string;
  @Input() name!:string;
  newTaskadding = false;

constructor(private taskService : TaskService){}

  get selectedUserTasks(){
    return this.taskService.getUserTask(this.userId)
  }



  onClickAdd(){
     this.newTaskadding = true;
  }

  onClickCancel(){
    this.newTaskadding = false;
  }

}

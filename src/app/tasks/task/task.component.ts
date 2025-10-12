import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { task } from './task.model';
import { UiComponent } from "../../shared/ui/ui.component";
import { DatePipe } from '@angular/common';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [UiComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input() task!: task;
@Output() onMarked = new EventEmitter<string>();
public taskService = inject(TaskService)

onMarkasComplete(){
  this.taskService.onTaskComplete(this.task.id);
}
}

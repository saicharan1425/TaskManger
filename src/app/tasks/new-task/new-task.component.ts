import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newTaskData  } from '../task/task.model';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Output() close = new EventEmitter<void>();
@Input({required : true}) userId! : string;
private taskService = inject(TaskService)

newTitle = '';
newSummary = '';
newDate = '';


onClose(){
this.close.emit();
}

onNewSubmit(){
this.taskService.onCreateTask({
    title:this.newTitle,
      summary:this.newSummary,
      dueDate:this.newDate
}, this.userId);
this.close.emit();
}
}

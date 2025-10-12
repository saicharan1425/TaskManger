import { Injectable } from '@angular/core';
import { newTaskData } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  userId!: string;
  newTaskadding!: boolean;


  constructor() {
    const tasks = localStorage.getItem('tasks')

    if(tasks){
      this.tasks = JSON.parse(tasks)
    }
   }
  tasks = [
    {
      id:'t1',
      UserId:'u1',
      title:'Master Angualr',
      summary:'Learn and add to resume',
      dueDate:'2025-10-05'
    },
     {
      id:'t2',
      UserId:'u2',
      title:'complte resume',
      summary:' resume buliding',
      dueDate:'2025-10-05'
    },
     {
      id:'t3',
      UserId:'u3',
      title:'Master .Net',
      summary:'Learn and add to resume',
      dueDate:'2025-11-05'
    },
     {
      id:'t4',
      UserId:'u3',
      title:'Post in Github',
      summary:'Add the code to Github and get it into pages',
      dueDate:'2025-10-05'
    }
  ]

  getUserTask(userId: string){
   return this.tasks.filter((task)=> task.UserId === userId)
  }



  onCreateTask(taskData : newTaskData , userId :string){
      this.tasks.unshift({
         id: new Date().getTime().toString(),
        UserId: userId,
        title:taskData.title,
        summary:taskData.summary,
        dueDate:taskData.dueDate
      })
      this.userId
      this.newTaskadding = false;
      this.saveTasks();
    }
    onTaskComplete(id : string){
      this.tasks = this.tasks.filter((tasks)=> tasks.id !== id)
      this.saveTasks();
    }

    private saveTasks(){
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
}

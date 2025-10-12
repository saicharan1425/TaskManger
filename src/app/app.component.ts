import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  @Input() userName!: string;
  users=DUMMY_USERS;
  @Input() userId!: string;




onUserSelect(name: string){
  this.userName = name;
  console.log(`You have selected ${this.userName}`);
}

onSelectUserId(id: string){
  this.userId = id;
  console.log(`You have selected ${this.userId}`);
}

get selectedUser(){
  return this.users.find((user)=> user.id === this.userId)!
}
}

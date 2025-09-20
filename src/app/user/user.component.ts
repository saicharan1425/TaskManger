import { Component, EventEmitter, Input, Output, output } from '@angular/core';

import { DUMMY_USERS } from '../users';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

    @Input({required: true}) avatar!:string;
  @Input({required: true}) name!:string;
  @Input({required: true}) id!:string;
  @Output() onClick = new EventEmitter;

 get getImage(){
  return 'assets/users/'+ this.avatar;
 }

// Signals -------
//  avatar = input.required<string>();
//  name = input.required<string>();

//   imagePath = computed(()=> {
//     return 'assets/users/'+this.avatar();
//   })
// signal end --------

    get imagePath(){
      return 'assets/users/' + this.avatar;
    }

 onClickbtn(){
  this.onClick.emit(this.name);
 }
}

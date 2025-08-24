import { Component, computed, input, Input } from '@angular/core';

import { DUMMY_USERS } from '../users';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

 /*   @Input() avatar!:string;
  @Input() name!:string;

 get getImage(){
  return 'assets/users/'+ this.avatar;
 }
 */

 avatar = input.required<string>();
 name = input.required<string>();

  imagePath = computed(()=> {
    return 'assets/users/'+this.avatar();
  })

 onClickbtn(){

 }
}

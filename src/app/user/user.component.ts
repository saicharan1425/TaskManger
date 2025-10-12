import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { User } from './user.model';
import { UiComponent } from "../shared/ui/ui.component";




@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UiComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) user! : User;
  @Input() selected!:boolean;

  @Output() onClick = new EventEmitter<string>();
    @Output() select = new EventEmitter<string>();

 get getImage(){
  return 'assets/users/'+ this.user.avatar;
 }

// Signals -------
//  avatar = input.required<string>();
//  name = input.required<string>();

//   imagePath = computed(()=> {
//     return 'assets/users/'+this.avatar();
//   })
// onClick = output<string>();
// signal end --------

    get imagePath(){
      return 'assets/users/' + this.user.avatar;
    }

 onClickbtn(){
  this.onClick.emit(this.user.name);
 }

 selectUserId(){
  this.select.emit(this.user.id);
 }

}

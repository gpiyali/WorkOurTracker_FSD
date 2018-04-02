import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-createworkout',
  templateUrl: './CreateWorkout.component.html',
  styles: [] 
})
export class CreateWorkoutComponent implements OnInit {
 addWorkoutCbpm: int=0 ;
  
  

  ngOnInit() {
  }
 incrementFunc(){
              var x=this.addWorkoutCbpm;
              this.addWorkoutCbpm=x+1;  
            }
   decrementFunc(){
              var x=this.addWorkoutCbpm;
              this.addWorkoutCbpm=x-1;   
            }
  CreateWorkoutFunc() {  
   
     
  }
}


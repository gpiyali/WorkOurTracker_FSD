import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewWorkout',
  templateUrl: './ViewWorkout.component.html',
  styles: []
})
export class ViewWorkoutComponent implements OnInit {
  startSearchBox: string = "";

constructor(private router: Router) { }

  ngOnInit() {
  }
editWorkoutFunc(){
	this.router.navigate(['/editWorkout']); 
}
startWorkoutFunc(){
	this.router.navigate(['/startWorkout']); 
}
endWorkoutFunc(){
	this.router.navigate(['/endWorkout']); 
}
}

 
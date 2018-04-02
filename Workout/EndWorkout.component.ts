import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-endworkout',
  templateUrl: './EndWorkout.component.html',
  styles: [] 
})
export class EndWorkoutComponent implements OnInit {
 endDate: Date;
 

  ngOnInit() {
	  var dt=this.endDate;
	this.endDate=new Date();
  }

 
}
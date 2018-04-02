import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { ViewWorkoutComponent } from "./Workout/ViewWorkout.component";
import { CreateWorkoutComponent } from "./Workout/CreateWorkout.component";
import { CategoryComponent } from "./Category/Category.component";
import { EditWorkoutComponent } from "./Workout/EditWorkout.component";
import { StartWorkoutComponent } from "./Workout/StartWorkout.component";
import { EndWorkoutComponent } from "./Workout/EndWorkout.component";
import { CONST_ROUTING } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ViewWorkoutComponent,
    CreateWorkoutComponent,
    CategoryComponent,
	EditWorkoutComponent,
	StartWorkoutComponent,
	EndWorkoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }


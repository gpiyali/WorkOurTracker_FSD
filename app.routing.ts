import { Routes, RouterModule } from '@angular/router';
import { ViewWorkoutComponent } from "./Workout/ViewWorkout.component";
import { CreateWorkoutComponent } from "./Workout/CreateWorkout.component";
import { CategoryComponent } from "./Category/Category.component";
import { EditWorkoutComponent } from "./Workout/EditWorkout.component";
import { StartWorkoutComponent } from "./Workout/StartWorkout.component";
import { EndWorkoutComponent } from "./Workout/EndWorkout.component";

const MAINMENU_ROUTES: Routes = [
    { path: '', redirectTo: '/viewWorkout', pathMatch: 'full' },
    { path: 'viewWorkout', component: ViewWorkoutComponent },
    { path: 'createWorkout', component: CreateWorkoutComponent },
    { path: 'category', component: CategoryComponent },
	{ path: 'editWorkout', component: EditWorkoutComponent },
	{ path: 'startWorkout', component: StartWorkoutComponent },
	{ path: 'endWorkout', component: EndWorkoutComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
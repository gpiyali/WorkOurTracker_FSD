"use strict";
var router_1 = require("@angular/router");
var ViewWorkout_component_1 = require("./Workout/ViewWorkout.component");
var CreateWorkout_component_1 = require("./Workout/CreateWorkout.component");
var Category_component_1 = require("./Category/Category.component");
var EditWorkout_component_1 = require("./Workout/EditWorkout.component");
var StartWorkout_component_1 = require("./Workout/StartWorkout.component");
var EndWorkout_component_1 = require("./Workout/EndWorkout.component");
var MAINMENU_ROUTES = [
    { path: '', redirectTo: '/viewWorkout', pathMatch: 'full' },
    { path: 'viewWorkout', component: ViewWorkout_component_1.ViewWorkoutComponent },
    { path: 'createWorkout', component: CreateWorkout_component_1.CreateWorkoutComponent },
    { path: 'category', component: Category_component_1.CategoryComponent },
    { path: 'editWorkout', component: EditWorkout_component_1.EditWorkoutComponent },
    { path: 'startWorkout', component: StartWorkout_component_1.StartWorkoutComponent },
    { path: 'endWorkout', component: EndWorkout_component_1.EndWorkoutComponent }
];
exports.CONST_ROUTING = router_1.RouterModule.forRoot(MAINMENU_ROUTES);
//# sourceMappingURL=app.routing.js.map
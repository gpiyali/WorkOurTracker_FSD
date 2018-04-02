"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var menu_component_1 = require("./menu.component");
var ViewWorkout_component_1 = require("./Workout/ViewWorkout.component");
var CreateWorkout_component_1 = require("./Workout/CreateWorkout.component");
var Category_component_1 = require("./Category/Category.component");
var EditWorkout_component_1 = require("./Workout/EditWorkout.component");
var StartWorkout_component_1 = require("./Workout/StartWorkout.component");
var EndWorkout_component_1 = require("./Workout/EndWorkout.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            menu_component_1.MenuComponent,
            ViewWorkout_component_1.ViewWorkoutComponent,
            CreateWorkout_component_1.CreateWorkoutComponent,
            Category_component_1.CategoryComponent,
            EditWorkout_component_1.EditWorkoutComponent,
            StartWorkout_component_1.StartWorkoutComponent,
            EndWorkout_component_1.EndWorkoutComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.CONST_ROUTING
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
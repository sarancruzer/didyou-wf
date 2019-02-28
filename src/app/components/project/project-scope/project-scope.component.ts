import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-scope',
  templateUrl: './project-scope.component.html',
  styleUrls: ['./project-scope.component.css']
})
export class ProjectScopeComponent implements OnInit {

   constructor(private router : Router) { }


  ngOnInit() {
    
  }

  addProjectType(){
   
  }

  removeProjectType(){
   
  }

  addItems(){
  }

  removeItems(){
  }


  updateConfigure(){
    this.router.navigate(["/manageProject"]);
  }

}

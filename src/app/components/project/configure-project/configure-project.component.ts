import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configure-project',
  templateUrl: './configure-project.component.html',
  styleUrls: ['./configure-project.component.css']
})
export class ConfigureProjectComponent implements OnInit {

  
  building_units :any;
  building_class:any;
  project_type:any;

   building_unitss :any;
  building_classs:any;
  project_types:any;

  constructor(private router : Router) {

    this.building_units = "123";
    this.building_class = "1";
    this.project_type = "1";

     this.building_unitss = "245";
    this.building_classs = "2";
    this.project_types = "2";
   }


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

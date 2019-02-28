import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-team',
  templateUrl: './project-team.component.html',
  styleUrls: ['./project-team.component.css']
})
export class ProjectTeamComponent implements OnInit {

  project :any = [];
  
    constructor(private router:Router) { }
  
    ngOnInit() {
    }
  
    createProject(){
      this.router.navigate(["/manageProject"]);
    }  

}

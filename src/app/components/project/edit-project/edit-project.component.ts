import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  project :any = [];

  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  updateProject(){
    this.router.navigate(["/manageProject"]);
  }

}

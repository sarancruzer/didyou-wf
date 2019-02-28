import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  project :any = [];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  createProject(){
    this.router.navigate(["/manageProject"]);
  }

}

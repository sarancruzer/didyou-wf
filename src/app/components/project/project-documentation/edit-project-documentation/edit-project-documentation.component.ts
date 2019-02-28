import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-project-documentation',
  templateUrl: './edit-project-documentation.component.html',
  styleUrls: ['./edit-project-documentation.component.css']
})
export class EditProjectDocumentationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  createProject(){
    this.router.navigate(["/manageProjectDocumentation"]);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-project-documentation',
  templateUrl: './add-project-documentation.component.html',
  styleUrls: ['./add-project-documentation.component.css']
})
export class AddProjectDocumentationComponent implements OnInit {

 constructor(private router:Router) { }

  ngOnInit() {
  }

   createProject(){
    this.router.navigate(["/manageProjectDocumentation"]);
  }

}

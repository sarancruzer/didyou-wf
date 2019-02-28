import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-project-note',
  templateUrl: './add-project-note.component.html',
  styleUrls: ['./add-project-note.component.css']
})
export class AddProjectNoteComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

   createProject(){
    this.router.navigate(["/manageProject"]);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.css']
})
export class AdditionalInfoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


   createProject(){
    this.router.navigate(["/manageProject"]);
  }
}

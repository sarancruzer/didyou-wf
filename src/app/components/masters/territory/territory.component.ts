import { Component, OnInit } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';

@Component({
  selector: 'app-territory',
  templateUrl: './territory.component.html',
  styleUrls: ['./territory.component.css']
})
export class TerritoryComponent implements OnInit {

  title:string;
  territory:any= [];
  constructor() {
    this.title = "Territory";
   }

  ngOnInit() {
  }

  create(){

  }
  update(){

  }
  delete(){

  }

}

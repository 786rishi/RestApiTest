import { Component, OnInit } from '@angular/core';
import {HttpClient  } from "@angular/common/http";

@Component({
  selector: 'app-get-pet',
  templateUrl: './get-pet.component.html',
  styleUrls: ['./get-pet.component.css']
})
export class GetPetComponent implements OnInit {

  constructor(private http:HttpClient) { }
pets : object;
  ngOnInit() {
  this.http.get("http://localhost:8080/pet").subscribe(res=>{
    this.pets= res;
  })
  }

}

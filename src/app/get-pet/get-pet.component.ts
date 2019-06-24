import { Component, OnInit, OnChanges } from '@angular/core';
import {HttpClient  } from "@angular/common/http";
import { MyService } from '../app-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-pet',
  templateUrl: './get-pet.component.html',
  styleUrls: ['./get-pet.component.css']
})
export class GetPetComponent implements OnInit {

  constructor(private http:HttpClient, private sharedService: MyService, private router: Router) { }
pets : object;
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    console.log("in changes")
    this.http.get("http://localhost:8080/pet").subscribe(res=>{
      this.pets= res;
    })
    }

onDelete(pet : Pet){
  console.log(pet)
  this.http.delete("http://localhost:8080/pet/"+pet.id).subscribe(res=>{
    console.log(res);
    this.loadData();
  })

}
onEdit(pet: Pet){
  console.log(pet);
  this.sharedService.updateForm(pet);
  sessionStorage.setItem('id', pet.id+'')
  this.router.navigate(["/editPet"]);
}

}

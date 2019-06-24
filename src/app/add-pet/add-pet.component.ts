import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  private title: String ='Add Pet';
  constructor(private fb: FormBuilder, private http:HttpClient , private router: Router) { }
  myForm: FormGroup;

  ngOnInit() {
    this.myForm = this.fb.group({
      name: 'Tommy',
      color : 'White',
    });
  }

  onSubmit(form){
    console.log(form.value,form)

this.http.post("http://localhost:8080/pet",form.value).subscribe(res=>{
  console.log(res);
  this.router.navigate(["/getPet"]);
})

  }

}

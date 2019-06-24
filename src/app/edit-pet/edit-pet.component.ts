import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MyService } from '../app-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {

  private title: String ='Edit Pet';
  constructor(private fb: FormBuilder, private http:HttpClient, private sharedService: MyService,private router: Router) { 
  }
  myForm: FormGroup;
updatedForm :Pet;
  ngOnInit() {
    this.sharedService._shareForm.subscribe( (updatedForm : Pet)=>{
      console.log('updated',updatedForm)
this.updatedForm=updatedForm;
      this.fetch();

    })

    this.myForm = this.fb.group({
      id : '',
      name: '',
      color : '',
    });

this.http.get("http://localhost:8080/pet/"+sessionStorage.getItem('id')).subscribe(res=>{
  this.myForm.setValue(res);
})

  }

  onSubmit(form){

this.http.put("http://localhost:8080/pet",form.value).subscribe(res=>{
  console.log(res);
})

  }

  fetch(){
    console.log("fetched ", this.updatedForm)
  
    this.myForm.patchValue({
      id: this.updatedForm.id,
      name: this.updatedForm.name,
      color : this.updatedForm.color
    })
    console.log('value setted')
  }
}

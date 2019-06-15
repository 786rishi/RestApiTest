import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  private title: String ='Add Pet';
  constructor(private fb: FormBuilder) { }
  myForm: FormGroup;

  ngOnInit() {
    this.myForm = this.fb.group({
      name: 'Tommy',
      color : 'White',
    });
  }

}

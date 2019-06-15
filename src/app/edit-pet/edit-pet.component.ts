import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {

  private title: String ='Edit Pet';
  constructor(private fb: FormBuilder) { }
  myForm: FormGroup;

  ngOnInit() {
    this.myForm = this.fb.group({
      name: 'Tommy',
      color : 'White',
    });
  }

}

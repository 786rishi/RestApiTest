import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class MyService{

    private shareForm = new Subject<Pet>();
    public _shareForm = this.shareForm.asObservable();

public updateForm(pet:Pet): void {
    console.log(pet);
this.shareForm.next(pet);

}

}
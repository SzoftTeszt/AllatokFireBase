import { Component } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { BaseService } from 'src/app/service/base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css']
})
export class ListAnimalsComponent {
 ujAllat: any={};
 oszlopok=["key", "nev", "fajta", "kor"]
 
 constructor(private base:BaseService){
  this.base.getAll().snapshotChanges()
  .pipe(map( changes=> changes.map(
      c=>({key: c.payload.key, ...c.payload.val()})
    ))
  ).subscribe(data=> console.log(data))
 }

 newAnimal(body:Animal){
  this.base.create(body).then(()=>console.log("Új állat rögzítve!"))
  .catch(()=>console.log("Hiba az új állatka rögzítésénél!"))
 }
}

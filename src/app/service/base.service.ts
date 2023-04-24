import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/compat/database';
import { Animal } from '../models/animal';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  animalsRef: AngularFireList<Animal>
  constructor(private db:AngularFireDatabase) { 
    this.animalsRef = db.list('/animals');
  }
  getAll(){
    return this.animalsRef;
  }

  create (body:Animal){
    return this.animalsRef.push(body);
  }

  update (key:string, body:Animal){
    return this.animalsRef.update(key,body)
  }
  delete (key:string){
    return this.animalsRef.remove(key);
  }
  
  deleteAll (){
    return this.animalsRef.remove();
  }
}

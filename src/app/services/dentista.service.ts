import Dentista from './../interfaces/dentista.interface';
import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, doc, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { deleteDoc } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DentistaService {

  constructor(private firestore:Firestore) {}

  addDentista(dentista: Dentista){
    const dentistaRef = collection(this.firestore, 'dentista');
    return addDoc(dentistaRef, dentista);
  }

  getDentista(): Observable<Dentista[]>{
    const dentistaRef = collection(this.firestore, 'dentista');
    return collectionData(dentistaRef, {idField:'id'}) as Observable<Dentista[]>;
  }

  deleteDentista(dentista: Dentista){
    const dentistaDocRef = doc(this.firestore, `dentista/${dentista.id}`);
    return deleteDoc(dentistaDocRef);
  }

}

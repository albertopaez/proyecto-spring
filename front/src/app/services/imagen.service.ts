import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagen } from '../models/imagen';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  imagenURL = 'http://localhost:8080/newproyecto/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Imagen[]> {
    return this.httpClient.get<Imagen[]>(this.imagenURL + 'list');
  }

  public update(id: number, name: String): Observable<any> {
    console.log("ID", typeof <number>id)
    const formData = new FormData();
    if(name != null && name != ''){
      return this.httpClient.put<any>(this.imagenURL + `update/${<number>id}`, name);
    }else{
      alert('El archivo debe tener un nombre');
    }
  }







  public upload(imagen: File, name): Observable<any> {
    const formData = new FormData();
    if(name != null && name != ''){
      formData.append('multipartFile', imagen, name);
    }else{
      formData.append('multipartFile', imagen);
    }
    return this.httpClient.post<any>(this.imagenURL + 'upload', formData);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.imagenURL + `delete/${id}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { Imagen } from '../models/imagen';
import { ImagenService } from '../services/imagen.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalleComponent } from './detalle.component';
import { CambiarNombreComponent } from './cambiar-nombre/cambiar-nombre.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  imagenes: Imagen[] = [];

  constructor(
    private imagenService: ImagenService,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
   this.cargarImagenes();
  }

  cargarImagenes(): void {
    this.imagenService.list().subscribe(
      data => {
        this.imagenes = data;
        console.log("INFORMACION IMAGENES", data)
      }
    );
  }

  borrar(id: number): void {
    this.spinner.show();
    this.imagenService.delete(id).subscribe(
      data => {
        this.spinner.hide();
        this.cargarImagenes();
      },
      err => {
        this.spinner.hide();
        console.log(err);
      }
    );
  }

  abrirModal(i: number): void {
    const modalRef = this.modalService.open(DetalleComponent);
    modalRef.componentInstance.index = i;
  }

  cambiarNombre(id: number): void {
    const modalRef = this.modalService.open(CambiarNombreComponent);
    modalRef.componentInstance.id = id;
  }

}

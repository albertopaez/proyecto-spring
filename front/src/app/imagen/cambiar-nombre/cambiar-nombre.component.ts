import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-cambiar-nombre',
  templateUrl: './cambiar-nombre.component.html',
  styleUrls: ['./cambiar-nombre.component.css']
})
export class CambiarNombreComponent implements OnInit {

  @Input() id;

  constructor(
    private activeModal: NgbActiveModal,
    private imagenService: ImagenService
    ) { }

  ngOnInit() {
    console.log("LA ID DE LA IMAGEN ES: ", this.id)
  }

  cambiarNombre(){
    let nombre = (<HTMLInputElement>document.getElementById('nuevoNombre')).value
    if (nombre == null || nombre == ''){
      alert("No se puede dejar el nombre vacio");
    }else{
      this.editar(this.id, nombre);
    }
  }

  editar(id, name): void {
    this.imagenService.update(id, name).subscribe(
      data => {
        let dir = 'http://localhost:4200/galeria';
        window.location.href = dir;
      },
      err => {
        alert(err.error.mensaje);
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor( private activatedRoute:ActivatedRoute ) { 
    this.activatedRoute.params.subscribe( params => {
      console.log(params['termino']);
    })
  }

  ngOnInit(): void {
  }

}

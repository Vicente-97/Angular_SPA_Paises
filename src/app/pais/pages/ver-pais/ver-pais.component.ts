import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log(route.snapshot.params['id'])
  } 

  ngOnInit(): void {
  }

}

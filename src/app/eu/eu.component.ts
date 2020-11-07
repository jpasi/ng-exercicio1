import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {

  nome = 'Jesus Pasillas';
  info = 'estoy aqui en aulas';
  img = '';


  constructor() { }

  ngOnInit(): void {
  }

}

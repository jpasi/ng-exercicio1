import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {

  nome = 'Jesus Pasillas';
  info = 'Eu gosto de esportes, tanto assistir como jogar, gosto da natureza e de bichos; ate morar no Brasil fiquei sabendo que minha comida favorita são os tacos.';
  img = './assets/img/_MG_6813_1.JPG';
  title = 'app'


  constructor() { }

  ngOnInit(): void {
  }

}

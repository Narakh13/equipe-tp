import { Component, Input, OnInit } from '@angular/core';
import { Equipe } from 'src/models/equipe';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {
  @Input() equipe:Equipe = new Equipe();
  @Input() indice:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

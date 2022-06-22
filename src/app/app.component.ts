import { Component } from '@angular/core';
import { Equipe } from 'src/models/equipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  equipes:Equipe[]=[
    {name:'Banane'},
    {name:'Ninja'},
    {name:'Flamant Rose'},
  ];

  equipe='';

  onCreate(){
    let addEquipe = new Equipe(this.equipe);
    this.equipes.push(addEquipe)
    this.equipe = '';
  }

}

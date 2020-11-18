import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html'
})
export class SpeciesComponent implements OnInit {

  public name: string = 'species';
  public label: string = 'Espécie';
  public help: string = 'Informar a espécie do pet.';

  @Input() pet: Pet;

  constructor() { }

  ngOnInit(): void {
  }

}

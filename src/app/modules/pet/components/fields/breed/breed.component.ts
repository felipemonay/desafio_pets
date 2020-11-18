import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html'
})
export class BreedComponent implements OnInit {

  public name: string = 'breed';
  public label: string = 'Raça';
  public help: string = 'Informar a raça do pet.';

  @Input() pet: Pet;
  
  constructor() { }

  ngOnInit(): void {
  }

}

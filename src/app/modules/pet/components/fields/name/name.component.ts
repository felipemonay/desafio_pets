import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html'
})
export class NameComponent implements OnInit {

  public name: string = 'name';
  public label: string = 'Nome';
  public help: string = 'Informar o nome do pet.';

  @Input() pet: Pet;

  constructor() { }

  ngOnInit(): void {
  }

}

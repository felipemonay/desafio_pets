import { Component, Input, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'app-nickname',
  templateUrl: './nickname.component.html'
})
export class NicknameComponent implements OnInit {

  public name: string = 'nickName';
  public label: string = 'Apelido';
  public help: string = 'Informar o apelido do pet.';

  @Input() pet: Pet;

  constructor() { }

  ngOnInit(): void {
  }

}

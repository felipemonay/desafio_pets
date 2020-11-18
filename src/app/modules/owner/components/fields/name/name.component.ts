import { Component, Input, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/owner';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html'
})
export class NameComponent implements OnInit {

  public name: string = 'name';
  public label: string = 'Nome';
  public help: string = 'Informar o nome do dono.';

  @Input() owner: Owner;

  constructor() { }

  ngOnInit(): void {
  }

}

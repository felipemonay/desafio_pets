import { Component, Input, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/owner';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html'
})
export class PhoneComponent implements OnInit {

  public name: string = 'phone';
  public label: string = 'Telefone';
  public help: string = 'Informar o telefone do dono.';

  @Input() owner: Owner;

  constructor() { }

  ngOnInit(): void {
  }

}

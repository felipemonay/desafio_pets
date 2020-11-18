import { Component, Input, OnInit } from '@angular/core';
import { Owner } from 'src/app/models/owner';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html'
})
export class EmailComponent implements OnInit {

  public name: string = 'email';
  public label: string = 'E-mail';
  public help: string = 'Informar o e-mail do dono.';

  @Input() owner: Owner;
  @Input() required: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ol-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css']
})
export class FormErrorComponent implements OnInit {

  @Input() input: FormControl;
  @Input() inputName: string;

  constructor() { }

  ngOnInit(): void { }

}

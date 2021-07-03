import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ol-vmessage',
  templateUrl: './vmessage.component.html',
  styleUrls: ['./vmessage.component.css']
})
export class VmessageComponent implements OnInit {

  @Input() message: string = '';
  @Input() type: string = 'danger';
  constructor() { }

  ngOnInit(): void {
  }

}

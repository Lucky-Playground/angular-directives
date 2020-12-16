import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  visible = true;
  names: Array<string> = [];
  month = 0;
  //text = '';

  constructor() {
    this.names.push('Visura', 'Lucky', 'Sachintha', 'sajeewa');
  }

  ngOnInit(): void {
  }

  // changeText(event: Event): void{
  //   this.text = ((event.target) as any).value;
  // }

}

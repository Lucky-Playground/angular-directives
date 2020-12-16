import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basics';
  tooltip = 'Hello ToolTip!';
  toggleClass = false;
  color = 'blue';

  titleOnClick(): void {
  this.tooltip = 'Hello IJSE';
  this.title = 'Hello Angular we are learning!';
 }

 showAlert(): void{
    alert('Okay');
 }

  changeClass(): void{
    this.toggleClass = !this.toggleClass;
  }

  changeColor(): void{
    this.color = (this.color === 'blue') ? 'green' : 'blue';
  }
}

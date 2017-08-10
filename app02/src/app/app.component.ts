import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //or can be template: "some HTML here" or `multiline HTML`
  styleUrls: ['./app.component.css'] //or can be styles array with some CSS styles here directly
})
export class AppComponent {
  title = 'this change is from app.components.ts';
  name = 'Riaz';
}

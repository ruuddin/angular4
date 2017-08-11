import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  //aliasElem is the alias of element. Now only the alias can be used
  @Input('aliasElem') element: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit() {
  }

}

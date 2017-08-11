import { 
  Input, 
  Component, 
  OnInit, 
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent 
      implements OnInit, OnChanges, DoCheck, 
      AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy{
  //aliasElem is the alias of element. Now only the alias can be used
  @Input('aliasElem') element: {type: string, name: string, content: string};
  
  constructor() { 

  }

  //BEGIN: Lifecycle events of components. NOt in order.
  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

  //END: Lifecycle events
}

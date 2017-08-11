import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{name: string, content: string}>();
  // newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit() {
  }

  onAddServerCockpit(serverNameInput: HTMLInputElement) {
    console.log(serverNameInput);
    this.serverCreated.emit({
      name: serverNameInput.value,
      content: this.newServerContent
    });
  }

  onAddBlueprintCockpit(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: serverNameInput.value,
      content: this.newServerContent
    });
  }
}

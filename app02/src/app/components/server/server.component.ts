import { Component } from '@angular/core';

//@Component decorator
@Component({
    //option1
    selector: "app-server",
    //option2
    // selector: "[app-server]",
    //option3
    // selector:".app-server",
    templateUrl: "./server.component.html",
    styleUrls: ["./server.component.css"]
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "online";
    serverCreationStatus = "No server created!";
    serverCreated: boolean = false;
    allowNewServer: boolean = false;
    userName='';
    warningMsg="warningMsg";
    warnings = ['warning1', 'warning2'];
    showMessage: boolean = false;
    clickCounts = [0];
    click: number = 0;

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
        setTimeout(() => {
            this.allowNewServer = true;
        }, 5000);
    }

    getClickColor() {
        return this.click > 4? 'white':'black';
    }

    toggleMessage() {
        this.showMessage = !this.showMessage;
        console.log(this.clickCounts);
        this.clickCounts.push(++this.click);
    }

    onServerNameUpdate(event: Event) {
        console.log(event);
        this.serverStatus = (<HTMLInputElement>event.target).value;
    }
    getServerStatus(){
        return this.serverStatus;
    }

    getAllowNewServer() {
        return this.allowNewServer;
    }

    onCreateServer() {
        this.serverCreated = true;
        this.serverCreationStatus = "Vallahi! server was created";
    }

    addWarning() {
        this.warnings.push(this.warningMsg);
    }

    resetUserName() {
        this.userName = "";
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
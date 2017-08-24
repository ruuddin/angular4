import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, 
    private router: Router,
    private route: ActivatedRoute) { } //ActivatedRoute gives the current active route. Route which loaded this component

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    //load component relative to current route.
    //If relativeTo is not provided navigate method uses the root ("/") as default
    // this.router.navigate(['servers'], {relativeTo: this.route});

    this.router.navigate(['servers']);
  }

}

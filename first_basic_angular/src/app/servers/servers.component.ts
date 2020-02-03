import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'Test Server';
  serverCreated = false;
  servernames = ['server 1', 'server 2'];

  constructor() {
  	setTimeout (() => {
  		this.allowNewServer = true;
  	},3000);
   }

  ngOnInit() {
  }

  onCreateServer(){
  this.serverCreated = true;
    this.servernames.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }



}

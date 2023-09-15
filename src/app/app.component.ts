import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //properties
  title = 'online-store';
  
  serverElements = [{
    type: 'blueprint',
    name: 'Test Server',
    content: 'Just a test server'
  }];

  //methods
  onServerAdded(serverData: {serverName:string, serverContent:string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: {serverName:string, serverContent:string}){
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
}

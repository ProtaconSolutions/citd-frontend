import { Component, Output } from '@angular/core';
import { ChannelService, ChannelEvent } from './shared/services/channel'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ChannelService]
})

export class AppComponent {
  channel: ChannelService
  public data: string = "ei vielä"

  constructor(channel: ChannelService) {
    this.channel = channel;

    channel.sub("marjatanpuhelin").subscribe((x: ChannelEvent) => {
      this.data = x.Name
    })
  }
 
  clicked() {
    let event: ChannelEvent = {
      Name: "gaggaa",
      ChannelName: "marjatanpuhelin",
      Data: "abc",
      Json: "jee",
      Timestamp: undefined
    }

    this.channel.publish(event);
  }
}

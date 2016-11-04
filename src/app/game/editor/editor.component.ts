import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ChannelService, ChannelEvent } from '../../shared/services/channel';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent implements OnInit {
  code$: Observable<any>;
  control: FormControl = new FormControl();
  userInput: string;

  constructor(private channel: ChannelService) { }

  ngOnInit() {
        this.channel.start();

    this.channel.sub("code").subscribe((e: ChannelEvent) => this.userInput = e.Data);

    this.code$ = this.control.valueChanges
      .map((userInput) => {
        console.log(userInput);

        return userInput;
      })
      .debounceTime(500)
      .do(input => {
        let event: ChannelEvent = {
          ChannelName: "code",
          Data: input,
          Json: '{"lol": 3}',
          Name: "Typehere",
          Timestamp: new Date()
        };

        this.channel.publish(event);
      });

    this.code$.subscribe();
  }
}

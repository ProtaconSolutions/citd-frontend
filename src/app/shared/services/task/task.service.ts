import { Injectable } from "@angular/core";
import { ChannelService } from "../channel/channel.service";
import { Observable } from "rxjs";
import { ChannelEvent } from "../channel/channel-event";

export interface IPlayer {
  name: string;
  status: GameStatus;
  tests: ITest[];
}

export interface ITest {
  result: boolean;
  failedText: string;
}

export enum GameStatus {
  NotReady = 0,
  InProgress = 1,
  Done = 2,
}

export interface ITask {
  name: string;
  players: IPlayer[];
}

@Injectable()
export class TaskService {
  constructor(
    private channelService: ChannelService
  ) {
    this.channelService.start();
  }

  getTasks(): Observable<ChannelEvent> {
    return this.channelService.sub('tasks');
  }
}

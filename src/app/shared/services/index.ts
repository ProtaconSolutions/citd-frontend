import { MessageService } from './message.service';
import { WindowRef } from './window-ref';
import { ChannelService } from './channel/channel.service';
import { TaskService } from './task/task.service';

export * from './channel/'
export * from './task/'
export * from './message.service';

export const Services = [
  MessageService,
  WindowRef,
  ChannelService,
  TaskService,
];

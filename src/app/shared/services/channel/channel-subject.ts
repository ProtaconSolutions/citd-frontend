import { Subject } from 'rxjs';

import { ChannelEvent } from './channel-event';

export class ChannelSubject {
  channel: string;
  subject: Subject<ChannelEvent>;
}

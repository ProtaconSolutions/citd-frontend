import { Subject } from 'rxjs/Subject';

import { ChannelEvent } from './channel-event';

export class ChannelSubject {
  channel: string;
  subject: Subject<ChannelEvent>;
}

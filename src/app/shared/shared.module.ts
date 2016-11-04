import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { Ng2Webstorage } from 'ng2-webstorage';

import { ChannelService } from './services/';
import { ChannelModule } from './services/channel/channel.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ChannelModule.forRoot(),
    Ng2Webstorage,
  ],
  providers: [
    ChannelService,
  ],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ChannelModule,
    Ng2Webstorage,
  ],
})

export class SharedModule { }

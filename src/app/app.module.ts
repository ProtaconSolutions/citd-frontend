import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { AboutModule } from './about/about.module';
import { GameModule } from './game/game.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    AboutModule,
    GameModule,
  ],
  bootstrap: [
    AppComponent,
  ],
})

export class AppModule { }

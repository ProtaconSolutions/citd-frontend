import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ExampleModule } from './example/example.module';
import { GameModule } from './game/game.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    ExampleModule,
    GameModule,
  ],
  bootstrap: [
    AppComponent,
  ],
})

export class AppModule { }

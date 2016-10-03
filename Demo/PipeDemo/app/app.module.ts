import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {
  FlyingHeroesComponent,
  FlyingHeroesImpureComponent
} from './flying-heroes.component';
import { HeroAsyncMessageComponent } from './hero-async-message.component';
import { HeroListComponent } from './hero-list.component';
import { PowerBoostCalculatorComponent } from './power-boost-calculator.component';
import {
  FlyingHeroesPipe,
  FlyingHeroesImpurePipe
} from './flying-heroes.pipe';
import { FetchJsonPipe } from './fetch-json.pipe';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    FlyingHeroesComponent,
    FlyingHeroesImpureComponent,
    HeroAsyncMessageComponent,
    HeroListComponent,
    PowerBoostCalculatorComponent,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe,
    FetchJsonPipe,
    ExponentialStrengthPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

import { Component }              from '@angular/core';

import { HEROES }                 from './heroes';

@Component({
  moduleId: module.id,
  selector: 'flying-heroes',
  templateUrl: 'flying-heroes.component.html',
  styles: ['#flyers, #all {font-style: italic}']
})
export class FlyingHeroesComponent {
  heroes: any[] = [];
  canFly = true;
  title = 'Flying Heroes (pure pipe)';

  constructor() { this.reset(); }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    let hero = {name, canFly: this.canFly};
    this.heroes.push(hero);
  }

  reset() { this.heroes = HEROES.slice(); }
}

////// Identical except for impure pipe //////
@Component({
  moduleId: module.id,
  selector: 'flying-heroes-impure',
  templateUrl: 'flying-heroes-impure.component.html',
  styles: ['.flyers, .all {font-style: italic}'],
})
export class FlyingHeroesImpureComponent extends FlyingHeroesComponent {
  title = 'Flying Heroes (impure pipe)';
}
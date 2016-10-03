import { Component } from '@angular/core';

import { Hero }    from './hero';

@Component({
  moduleId: module.id,
  selector: 'hero-form',
  templateUrl: 'hero-form.component.html'
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(55, 'Minh', this.powers[0], 'Quynh');

  submitted = false;

  onSubmit() { this.submitted = true; }
    
 }
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var heroes_1 = require('./heroes');
var FlyingHeroesComponent = (function () {
    function FlyingHeroesComponent() {
        this.heroes = [];
        this.canFly = true;
        this.title = 'Flying Heroes (pure pipe)';
        this.reset();
    }
    FlyingHeroesComponent.prototype.addHero = function (name) {
        name = name.trim();
        if (!name) {
            return;
        }
        var hero = { name: name, canFly: this.canFly };
        this.heroes.push(hero);
    };
    FlyingHeroesComponent.prototype.reset = function () { this.heroes = heroes_1.HEROES.slice(); };
    FlyingHeroesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'flying-heroes',
            templateUrl: 'flying-heroes.component.html',
            styles: ['#flyers, #all {font-style: italic}']
        }), 
        __metadata('design:paramtypes', [])
    ], FlyingHeroesComponent);
    return FlyingHeroesComponent;
}());
exports.FlyingHeroesComponent = FlyingHeroesComponent;
////// Identical except for impure pipe //////
var FlyingHeroesImpureComponent = (function (_super) {
    __extends(FlyingHeroesImpureComponent, _super);
    function FlyingHeroesImpureComponent() {
        _super.apply(this, arguments);
        this.title = 'Flying Heroes (impure pipe)';
    }
    FlyingHeroesImpureComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'flying-heroes-impure',
            templateUrl: 'flying-heroes-impure.component.html',
            styles: ['.flyers, .all {font-style: italic}'],
        }), 
        __metadata('design:paramtypes', [])
    ], FlyingHeroesImpureComponent);
    return FlyingHeroesImpureComponent;
}(FlyingHeroesComponent));
exports.FlyingHeroesImpureComponent = FlyingHeroesImpureComponent;
//# sourceMappingURL=flying-heroes.component.js.map
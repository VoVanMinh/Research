"use strict";
var nextId = 1;
var Hero = (function () {
    function Hero(name, power) {
        this.name = name;
        this.power = power;
        this.id = nextId++;
    }
    return Hero;
}());
exports.Hero = Hero;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=hero.js.map
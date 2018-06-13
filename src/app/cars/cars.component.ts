import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  carName = '';
  carYear = 2018;

  cars = [{name: 'Ford', year: 2017},
  {name: 'Ford', year: 2010},
  {name: 'Mazda', year: 2000},
  {name: 'BMW', year: 2015},
  {name: 'Audi', year: 1999},
  {name: 'Bently', year: 2017}];

  constructor() {

  }

  addCar() {
    this.cars.push({
      name: this.carName,
      year: this.carYear});
    this.carName = '';
    this.carYear = 2018;
  }
}

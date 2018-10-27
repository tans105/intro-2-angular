import {Component} from '@angular/core';

function overridenTestMethod(target, name, desc) { // Test method to understand extend in ts
  const original = desc.value;

  desc.value = function () {
    console.log('Hej Hyderabad');
  };

  return desc;
}

function overrideMultiplyNumber(target, name, desc) { // Method will be used to override the multiplication method
  const original = desc.value;

  desc.value = function (...args) {
    console.log('Arguments for the functions are ', args, '.');
    const result = original.apply(this, args);
    console.log('Result :', result);
  };

  return desc;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'intro2angular';

  constructor() {
    this.testMethod();
    this.multiplyNumber(5, 2);
  }

  @overridenTestMethod
  testMethod() {
    console.log('Test method invoked');
  }

  @overrideMultiplyNumber
  multiplyNumber(a, b) {
    return a * b;
  }
}

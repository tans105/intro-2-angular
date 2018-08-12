import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = 'Tanmay';
  public isError = false;
  public isSpecial = true;
  public message = {
  	'text-special' : this.isSpecial,
  	'text-error' : this.isError,
  	'text-success' : !this.isError
  };
  public dangerClass = 'text-danger';
  public isDisabled = 'true';
  public greeting = '';
  public toggle = false;
  public buttonValue = 'Greet Me';
  public displayIf = true;
  public users = [
  {name: 'Tanmay Awasthi'},
  {name: 'Manisha Ojha'},
  {name: 'Pushkar Dwivedi'}
  ];
  constructor() { }

  ngOnInit() {
  }

  onClick() {
  	if (this.toggle) {
  		this.greeting = 'Welcome Tanmay';
  		this.buttonValue = 'Dont Greet Me';
  	} else {
  		this.greeting = '';
  		this.buttonValue = 'Greet Me';

  	}
  	this.toggle = !this.toggle;
  }

}

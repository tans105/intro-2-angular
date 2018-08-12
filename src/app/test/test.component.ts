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
  constructor() { }

  ngOnInit() {
  }

}

import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MyPlaceAutocompleteComponent } from './my-place-autocomplete.component';

describe('Component: MyPlaceAutocomplete', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MyPlaceAutocompleteComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MyPlaceAutocompleteComponent],
      (component: MyPlaceAutocompleteComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MyPlaceAutocompleteComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MyPlaceAutocompleteComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-my-place-autocomplete></app-my-place-autocomplete>
  `,
  directives: [MyPlaceAutocompleteComponent]
})
class MyPlaceAutocompleteComponentTestController {
}


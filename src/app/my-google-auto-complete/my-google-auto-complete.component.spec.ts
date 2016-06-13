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
import { MyGoogleAutoCompleteComponent } from './my-google-auto-complete.component';

describe('Component: MyGoogleAutoComplete', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MyGoogleAutoCompleteComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MyGoogleAutoCompleteComponent],
      (component: MyGoogleAutoCompleteComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MyGoogleAutoCompleteComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MyGoogleAutoCompleteComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-my-google-auto-complete></app-my-google-auto-complete>
  `,
  directives: [MyGoogleAutoCompleteComponent]
})
class MyGoogleAutoCompleteComponentTestController {
}


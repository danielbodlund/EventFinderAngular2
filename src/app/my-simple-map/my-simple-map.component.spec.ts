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
import { MySimpleMapComponent } from './my-simple-map.component';

describe('Component: MySimpleMap', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MySimpleMapComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MySimpleMapComponent],
      (component: MySimpleMapComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MySimpleMapComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MySimpleMapComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-my-simple-map></app-my-simple-map>
  `,
  directives: [MySimpleMapComponent]
})
class MySimpleMapComponentTestController {
}


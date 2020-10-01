import { Component, OnInit, Optional, Inject, forwardRef } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'lib-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  constructor(
    @Optional() @Inject(forwardRef(() => ParentComponent)) private policyGrid: ParentComponent) { 
      console.log(policyGrid);
    }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-my-second-level',
  templateUrl: './my-second-level.component.html',
  styleUrls: ['./my-second-level.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MySecondLevelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

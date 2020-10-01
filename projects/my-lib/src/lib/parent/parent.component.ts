import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'lib-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
@Injectable()
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

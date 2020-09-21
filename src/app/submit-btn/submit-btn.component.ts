import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-btn',
  templateUrl: './submit-btn.component.html',
  styleUrls: ['./submit-btn.component.sass']
})
export class SubmitBtnComponent implements OnInit {

  @Input() disable: boolean = false;
  @Input() title: string = 'no title';

  constructor() { }

  ngOnInit(): void {
  }

}

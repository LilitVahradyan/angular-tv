import { Component, OnInit, Input } from '@angular/core';
import {MyTV} from "../../../core/core/models/tv.model"

@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.css']
})
export class TelevisionComponent implements OnInit {
    @Input()
	public tvType: MyTV;
	
  constructor() { }

  ngOnInit() {
  }

}

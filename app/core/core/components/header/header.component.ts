import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { tv } from '../../data/tv';
import { MyTV } from '../../models/tv.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

 @Output()
	public sendInfoTv: EventEmitter<MyTV> = new EventEmitter();

	public menu: Array<MyTV> = [];
  	constructor() { }

  	ngOnInit() {
	  	this.menu = tv;
	  	console.log(this.menu);
  	}

  	public showInfoTv(tv: MyTV): void{
  		this.sendInfoTv.emit(tv);
  	}

}


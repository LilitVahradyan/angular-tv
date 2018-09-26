import { Component } from '@angular/core';
import { MyTV } from "./core/core/models/tv.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public selectedTv: MyTV;
 
    
	public getTvInfo(tv: MyTV): void {
		this.selectedTv= tv;
	}
   
}
 

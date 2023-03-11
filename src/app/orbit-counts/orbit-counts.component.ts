import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
	selector: 'app-orbit-counts',
	templateUrl: './orbit-counts.component.html',
	styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];
	typeOfStuff: string[]= ['Total', 'Space Debris', 'Communication', 'Probe', 'Space Station', 'Telescope', 'Positioning']
constructor() { }

ngOnInit() {
}

countByType(typeOfStuff: string): number {
	let count = 0;
	if(typeOfStuff === "Total"){
		count = this.satellites.length
	}
	if (this.satellites) {
		for (let i = 0; i < this.satellites.length; i++) {
			if (this.satellites[i].type === typeOfStuff) {
				count++;
			}
		}
	}
	return count;
}


}
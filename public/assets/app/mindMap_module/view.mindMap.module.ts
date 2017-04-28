import { Component } from '@angular/core';
import {AppComponent} from '../app.component';
import {GridBlock} from '../gridBlock_component/gridBlock.component';
declare var jsMind:any;
declare var _jm:any;
declare var $: any;

@Component({
    selector: 'view-mind-map-module',
    templateUrl: 'assets/app/mindMap_module/view.mindMap.module.html',
    styleUrls:  ['assets/app/mindMap_module/mindMap.module.css'],
    inputs: ['gE','module']
})

export class ViewMindMapModule {

	module:any;

	ngOnInit() {
		localStorage.setItem('mind_map_content', this.module.content);
	}

	ngAfterViewInit() {
        $.getScript( "/assets/vendor/jsmind.render.js", function() { });
    }
}

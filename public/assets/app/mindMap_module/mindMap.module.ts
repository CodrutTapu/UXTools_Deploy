import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { GridBlock } from '../gridBlock_component/gridBlock.component';
import { bgColorModule } from '../bgColor_component/bgColor.module';
import { cloneModuleService } from '../cloneModule_service/cloneModule.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
declare var $: any;
declare var toastr:any;
declare var jsMind:any;
declare var _jm:any;


@Component({
    selector: 'mind-map-module',
    templateUrl: 'assets/app/mindMap_module/mindMap.module.html',
    styleUrls:  ['assets/app/mindMap_module/mindMap.module.css'],
    inputs: ['gE','gridElements','module'],
    providers: [cloneModuleService]
})

export class MindMapModule {

    subscription:any;
    module:any;
    gridElements:Array<number>;

    constructor(private _cloneModuleService: cloneModuleService) {}

    ngOnInit() {
        this.subscription = Observable.interval(1000).subscribe(x => {
               var mind_data = _jm.get_data();
               var mind_name = mind_data.meta.name;
               var mind_str = jsMind.util.json.json2string(mind_data);
               this.module.content = mind_str;
          });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    cloneModule(gE:any,module:any) {
        this._cloneModuleService.cloneModule(gE,module);
    }

    deleteMindMapModule(gE:any,module:any) {
        gE.modules.splice(gE.modules.indexOf(module), 1);
    }

    ngAfterViewInit() {
        if(this.module.content == 'mind map') {
            $.getScript( "/assets/vendor/jsmind.custom.js", function() { });
        } else {
            localStorage.setItem('mind_map_content', this.module.content);
            $.getScript( "/assets/vendor/jsmind.edit.js", function() { });
        }
        
    }
}

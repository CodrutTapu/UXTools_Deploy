function open(){
    var options = {
        container:'view_jsmind_container',
        theme:'greensea',
        editable:false,
    }
    var mind = localStorage.getItem('mind_map_content');
    mind = JSON.parse(mind);

    _jm = jsMind.show(options,mind);
}

open();
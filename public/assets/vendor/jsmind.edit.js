function open(){
    var options = {
        container:'jsmind_container',
        theme:'greensea',
        editable:true,
    }
    var mind = localStorage.getItem('mind_map_content');
    mind = JSON.parse(mind);

    _jm = jsMind.show(options,mind);
}

open();
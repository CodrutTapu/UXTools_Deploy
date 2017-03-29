function open(){
    var options = {
        container:'jsmind_container',
        theme:'greensea',
        editable:true,
    }
    var mind = localStorage.getItem('MindMapData');
    mind = JSON.parse(mind);

    _jm = jsMind.show(options,mind);
}

function select_node(){
    var nodeid = 'other';
    _jm.select_node(nodeid);
}

function add_node(){
    var selected_node = _jm.get_selected_node(); // as parent of new node
    if(!selected_node){toastr["error"](" ", 'please select a node first.');return;}

    var nodeid = jsMind.util.uuid.newid();
    var topic = '* Node_'+nodeid.substr(0,5)+' *';
    var node = _jm.add_node(selected_node, nodeid, topic);
}

var imageChooser = document.getElementById('image-chooser');

imageChooser.addEventListener('change', function (event) {
    // Read file here.
    var reader = new FileReader();
    reader.onloadend = (function () {
        var selected_node = _jm.get_selected_node();
        var nodeid = jsMind.util.uuid.newid();
        var topic = undefined;
        var data = {
            "background-image": reader.result,
            "width": "100",
            "height": "100"};
        var node = _jm.add_node(selected_node, nodeid, topic, data);
        //var node = _jm.add_image_node(selected_node, nodeid, reader.result, 100, 100);
    //add_image_node:function(parent_node, nodeid, image, width, height, data, idx, direction, expanded){
    });

    var file = imageChooser.files[0];
    if (file) {
        reader.readAsDataURL(file);
    };

}, false);

function add_image_node(){
    var selected_node = _jm.get_selected_node(); // as parent of new node
    if(!selected_node){
        toastr["error"](" ", 'please select a node first.');
        return;
    }

    imageChooser.focus();
    imageChooser.click();
}

function remove_node(){
    var selected_id = get_selected_nodeid();
    if(!selected_id){toastr["error"](" ", 'please select a node first.');return;}

    _jm.remove_node(selected_id);
}

function set_theme(theme_name){
    _jm.set_theme(theme_name);
}

function toggle_editable(btn){
    var editable = _jm.get_editable();
    if(editable){
        _jm.disable_edit();
        btn.innerHTML = 'Enable Editable';
    }else{
        _jm.enable_edit();
        btn.innerHTML = 'Disable Editable';
    }
}

function toggle(){
    var selected_id = get_selected_nodeid();
    if(!selected_id){toastr["error"](" ", 'please select a node first.');return;}

    _jm.toggle_node(selected_id);
}

function expand_all(){
    _jm.expand_all();
}

function expand_to_level2(){
    _jm.expand_to_depth(2);
}

function expand_to_level3(){
    _jm.expand_to_depth(3);
}

function collapse_all(){
    _jm.collapse_all();
}

function get_selected_nodeid(){
    var selected_node = _jm.get_selected_node();
    if(!!selected_node){
        return selected_node.id;
    }else{
        return null;
    }
}

var zoomInButton = document.getElementById("zoom-in-button");
var zoomOutButton = document.getElementById("zoom-out-button");

function zoomIn() {
    if (_jm.view.zoomIn()) {
        zoomOutButton.disabled = false;
    } else {
        zoomInButton.disabled = true;
    };
};

function zoomOut() {
    if (_jm.view.zoomOut()) {
        zoomInButton.disabled = false;
    } else {
        zoomOutButton.disabled = true;
    };
};

open();
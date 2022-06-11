let fields = [];
let currentshape = 'cross';


function fillShape(id) {
    if (currentshape == 'cross') {
        currentshape = 'circle';
    }else {
        currentshape = 'cross';
    }
    fields[id] = currentshape;
    console.log(currentshape);
    draw();
}

function draw() {
    for(let i=0; i < fields.length; i++) {
        if(fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if(fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}
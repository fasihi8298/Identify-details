function mail(){
    let email = document.getElementById('mail-checker').value ;

    let name = email.split('@');

    name = email.split('@')[0];
    document.getElementById('name').innerHTML = name;

    let host = email.split('@')[1];

    
    host = host.split('.')[0]


    document.getElementById('host').innerHTML = host;
    let domain = email.split('.')[1];
    document.getElementById('domain').innerHTML = domain;
}

// function for cnic

function cnic(){
    
    let cnic = document.getElementById('cnic-checker').value;


let tehsil= cnic.split('-')[0];
let num= cnic.split('-')[1];
let gender = cnic.split('-')[2]
    
    document.getElementById('tehsil').innerHTML = tehsil;
    document.getElementById('num').innerHTML = num;
    document.getElementById('gender').innerHTML = gender;
}

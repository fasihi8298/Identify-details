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
// function for mobile

function mobile(){
    let mobile = document.getElementById('mobile-checker').value;
    let code= mobile.split('-')[0]
    let number = mobile.split('-')[1]

    
    document.getElementById('code').innerHTML = code;
    document.getElementById('number').innerHTML = number

    if(code >= "0300" && code < '0310'){
        document.getElementById('company').innerText = "Jazz"
    }

  else  if(code >= '0310' && code < '0320'){
        document.getElementById('company').innerText = "Zong"
    }

 else  if(code >= '0320' && code < '0330'){
        document.getElementById('company').innerText = "Warid"
    } 
    
 else  if(code >= '0330' && code < '0340'){
        document.getElementById('company').innerText = "Ufone"
    }
    
 else  if(code >= '0340' && code < '0350'){
        document.getElementById('company').innerText = "Telenor"
    }

 

}
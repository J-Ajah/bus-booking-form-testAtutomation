// const { delay } = require("cypress/types/bluebird");

document.querySelector('#btn-submit').addEventListener('click', (e) => {

    let name = document.querySelector('#fName').value;
    let date = document.querySelector('#date').value;
    let people = document.querySelector('#no-of-people').value;
    let comments = document.querySelector('textarea').value
    let roundTrip = document.querySelector('.trip > :nth-child(2)');
    let oneway = document.querySelector('.trip > :nth-child(1)');
   
    let trip;
  
    date = date.split("-");
    let day = (new Date().getDate()  <= 9 ? '0'+ new Date().getDate(): new Date().getDate());
    let month = (new Date().getMonth() <= 9 ? '0' + (new Date().getMonth()+1) :(new Date().getMonth()+1));
    let year = new Date().getFullYear();
    let currentDate = year + '-'+ month +'-'+ day ;
    
    const dateRegex = "/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/";


    //selecting the various error messages for display
    const nameError = document.getElementById("name-error");
    const tripError = document.getElementById("trip-error");
    const dateError = document.getElementById("date-error");
    const elem = document.querySelector('#no-of-people');

    if (roundTrip.checked == true) {
        trip = roundTrip.value;
    } else if (oneway.checked == true) {
        trip = oneway.value;
    }

    if (name == "") {
        document.querySelector('#fName').style.borderColor = 'red';
        nameError.classList.remove("hide");
    } else {
        nameError.classList.add("hide");
        document.querySelector('#fName').style.borderColor = '';
    }
    console.log(dateToYMD(date).match(dateRegex))
    if (dateToYMD(date) < currentDate) {
        document.querySelector('#date').style.borderColor = 'red';
        dateError.classList.remove("hide")
    } else {
        dateError.classList.add("hide")
        document.querySelector('#date').style.borderColor = '';
    }

    if ((roundTrip.checked == false) && (oneway.checked == false)) {
        tripError.classList.remove("hide");
    } else {
        tripError.classList.add("hide");
    }
    if (people == "" || people < 0 || people > 20) {
        elem.style.borderColor = 'red';
        document.getElementById("people-error").classList.remove("hide")
    } else {
        elem.style.borderColor = '';
        document.getElementById("people-error").classList.add("hide")
    }





    const p = Array.from(document.querySelectorAll("p"));
    let sucess,nFail = true;
    console.log(p)

    p.map((e) => {
        debugger;
        if (e.classList.contains("hide") && e.previousElementSibling.value !== "" ) {
            sucess = true;
            return
        } 
          nFail = false;
            return

    
    })
    console.log(sucess)
    if (sucess && nFail) {
        const show = document.querySelector(".container").classList.add("hide");
        const error = document.querySelector(".error-alert").classList.remove("hide")
         }


    e.preventDefault();

    
function dateToYMD(date){
   let day, month,year;
    if(typeof date === "object"){
        day = date[2];
        month = date[1];
        year = date[0];
        return ''+ year + '-'+ month  + '-' + day;
    }else{
         day = date.getDate();
         month = date.getMonth() + 1;
         year = date.getFullYear();
    }
     

     return ''+year+ '-'+ (month <=9 ? '0' + month : month) + '-' + (day <= 9 ? '0' + day : day);

}

})




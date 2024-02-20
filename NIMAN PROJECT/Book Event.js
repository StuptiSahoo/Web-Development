
let lname = document.getElementById('lname');
let name= document.getElementById("name");
let phone = document.getElementById("phone");
let date = document.getElementById("date");
let budget = document.getElementById("budget");
let loc = document.getElementById("loc");
let guests = document.getElementById("guests");
let Venue = document.getElementById("Venue");
let comment = document.getElementById("comment");
const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
   
    <br>
    <h1>${lname.value}
    ${phone.value}
    ${date.value} 
    ${budget.value}
    ${guests.value}
    ${Venue.value}
    ${comment.value}
    ${name.value}
    ${loc.value}
    </h1>
    `;

    Email.send({
        SecureToken : "5d675ef2-bfd1-405e-bd43-2da4aed07191", //add your token here
        To : lname.value, 
        From : "satchidananda26212@gmail.com",
        Subject : "Event Booking Details",
        Body : ebody
    }).then(
      message => alert(message)
    );
});
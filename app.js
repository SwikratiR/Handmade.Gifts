//STORE DATA IN LOCAL STORAGE
let arr = []
let form = document.querySelector('.formik')
form.addEventListener('submit', () => {

    var fname = document.getElementById("name").value;
    var emailId = document.getElementById("email").value;
    var numb = document.getElementById("number").value;
    var msg = document.getElementById("message").value;
    let val = [fname, emailId, numb, msg]
    arr.push(val)
    localStorage.setItem('data', JSON.stringify(arr))
})

//ORDER CONFIRMED ALERT
let orderNow = document.querySelectorAll(".ordernow");
for (let x of orderNow) {
    x.addEventListener('click', () => {
        alert('Order Confirmed!!!');
    })
}

//VALIDATION --> SHOWS ALERT MESSAGE
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const message = document.querySelector("#message");
const send = document.querySelector("#submitbutton");
send.addEventListener('click', () => {
    if (nameInput.value === "" || email.value === "" || number.value === "" || message.value === "")
        alert('Please fill out the fields');
    else
        alert('Message Sent!!!!');

})


//DISPLAY THE CUSTOMER DETAILS
// function takeValue() {
//     var nameInput = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var number = document.getElementById("number").value;
//     var message = document.getElementById("message").value;
//     document.write("Customer Details:<br> Name:" + nameInput + "<br>");
//     document.write(" Email:" + email + "<br>");
//     document.write("Number:" + number + "<br>");
//     document.write("Message:" + message + "<br>");
//     alert("Message Sent");
// }

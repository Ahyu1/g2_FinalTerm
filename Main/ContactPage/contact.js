
const send = document.getElementById("sendBtn");

send.addEventListener('click', ()=>{
    const name = document.getElementById("fullName").value;
    window.alert(`Thank you for messaging us ${name}!. Please visit our other socials for more information `)
})

if(localStorage.getItem("contacts")== undefined){
    localStorage.setItem("contacts" ,"[]" ) ;
}
let result ="" ;
let contacts = JSON.parse(localStorage.getItem("contacts"));
for(i=0 ;i<contacts.length ; i++){
    result += `
    <div class="contact-item">
    <i class="far fa-user fa-2x contact-itemlogo"></i>
    <p>${contacts[i].name}</p>
    <p>${contacts[i].phoneNumber}</p>
    <i class="fas fa-times-circle" onClick="deleteContact('${contacts[i].id}')"></i>
    </div>
    
</div>
    `
}
document.getElementsByClassName("contact-body")[0].innerHTML= result ;

function submitContact(e) {
e.preventDefault() ;
var contactName = document.getElementById("name").value; 
var contactNumber = document.getElementById("number").value ;

var contacts = JSON.parse(localStorage.getItem("contacts"));
let contact ={
    id: Math.random().toString(36).substr(2,9),
    name: contactName ,
    phoneNumber: contactNumber 
}
contacts.unshift(contact) ;
localStorage.setItem("contacts",JSON.stringify(contacts)) ;
document.getElementById("name").value = "" ;
document.getElementById("number").value = "" ;

console.log(contacts) ;
location.reload() ;
}
function deleteContact(id) {
let contacts =JSON.parse(localStorage.getItem("contacts"));
contacts= contacts.filter(function(contact){
return contact.id != id ;
}) ;
localStorage.setItem("contacts",JSON.stringify(contacts)) ;
location.reload() ;

}
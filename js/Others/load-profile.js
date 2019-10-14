let eMail = localStorage.getItem('EMAIL');
let userName = localStorage.getItem('USERNAME');;
let userID = localStorage.getItem('USERID');;
const userInfo = document.querySelector("#user-info");
userInfo.childNodes[3].innerHTML+=userName;
userInfo.childNodes[5].innerHTML+=userID;
userInfo.childNodes[7].innerHTML+=eMail;

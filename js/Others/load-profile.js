let eMail = localStorage.getItem('EMAIL');
let userName = localStorage.getItem('USERNAME');;
let userID = localStorage.getItem('USERID');;
const userInfo = document.querySelector("#user-info");
userInfo['userName'].value=userName;
userInfo['userID'].value=userID;
userInfo['email'].value=eMail;

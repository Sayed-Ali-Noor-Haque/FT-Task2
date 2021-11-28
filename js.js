function formValidation()
{
var passid = document.registration.passid;
var ufname = document.registration.firstname;
var ulname= document.registration.lastname;
var uage = document.registration.age;
var uemail = document.registration.email;

{
if(passid_validation(passid,7,12))
{
if(allLetter(ufname))
{
if(allnumeric(age))
{
if(ValidateEmail(uemail))

}
} 
}
} 

}

return false;

} function username_validation(ufname,ulname)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Userfirstname must have alphabet characters only');
uname.focus();
return false;
}
}
function alphanumeric(ufname)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(ufname.value.match(letters))
{
return true;
}
else
{
alert('User lastname must have alphanumeric characters only');
ufname.focus();
return false;
}
}
function destinationyselect(udestination)
{
if(udestination.value == "Default")
{
alert('Select your destination from the list');
udestination.focus();
return false;
}
else
{
return true;
}
}
function allnumeric(age)
{ 
var numbers = /^[0-9]+$/;
if(uage.value.match(numbers))
{
return true;
}
else
{
alert('age must have numeric characters only');
uzip.focus();
return false;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
} function validpreferredlanguage(uplanguage,uplanguage)
{
x=0;

if(uplanguage.checked) 
{
x++;
} if(uplanguage.checked)
{
x++; 
}
if(x==0)
{
alert('Select Java/Php/C++');
uplanguage.focus();
return false;
}
else
{
alert('Form Succesfully Submitted');
window.location.reload()
return true;
}
}

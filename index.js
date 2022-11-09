var welcome = 'WELCOME'
var start = 'PRESS OK TO CONTINUE'

alert(welcome)
alert(start)

var getLastName = prompt('Last name?')
var lastName = document.getElementsByClassName("information__lastName");
lastName[0].innerHTML = getLastName;

var getFirstName = prompt('First name?')
var firstName = document.getElementsByClassName("information__firstName");
firstName[0].innerHTML = getFirstName;

var getCountry = prompt('Country?')
var country = document.getElementsByClassName("information__list__country");
country[0].innerHTML = getCountry;

var getNationality = prompt('Nationality?')
var nationality = document.getElementsByClassName("information__list__nationality");
nationality[0].innerHTML = getNationality;

var getBirth = prompt('Date of birth?')
var birth = document.getElementsByClassName("information__list__dateOfBirth");
birth[0].innerHTML = getBirth;

var getGender = prompt('Male or female?')
var gender = document.getElementsByClassName("information__list__gender");
gender[0].innerHTML = getGender;

var getMaritalStatus = prompt('Married or single?')
var maritalStatus = document.getElementsByClassName("information__list__maritalStatus");
maritalStatus[0].innerHTML = getMaritalStatus;

var getDrivingLic = prompt('Do you have a driving license?')
var drivingLic = document.getElementsByClassName("information__list__drivingLicense");
drivingLic[0].innerHTML = getDrivingLic;

var getNumber = prompt('Phone number?')
var Number = document.getElementsByClassName("contacts__tel__number");
Number[0].innerHTML = getNumber;

var geEMail = prompt('Your E-mail?')
var eMail = document.getElementsByClassName("contacts__email__dddress");
eMail[0].innerHTML = geEMail;

var getEducation = prompt('What educational institution did you graduate?')
var education = document.getElementsByClassName("educationalBg__edu__otm");
education[0].innerHTML = getEducation;

var getEduYears = prompt('When did you graduate from education?')
var eduYears = document.getElementsByClassName("educationalBg__edu__years");
eduYears[0].innerHTML = getEduYears;

var getEduSpecial = prompt('What special did you graduate from?')
var eduSpecial = document.getElementsByClassName("educationalBg__edu__special");
eduSpecial[0].innerHTML = getEduSpecial;

var getWorkPlace = prompt('Workplace?')
var workPlace = document.getElementsByClassName("workBg__work__company");
workPlace[0].innerHTML = getWorkPlace;

var getWorkYears = prompt('What year have you been working?')
var workYears = document.getElementsByClassName("workBg__work__years");
workYears[0].innerHTML = getWorkYears;

var getJobTitle = prompt('Your job title?')
var jobTitle = document.getElementsByClassName("workBg__work__jobTitle");
jobTitle[0].innerHTML = getJobTitle;

var finish = 'PRESS OK TO SEE THE RESULT'
alert(finish)
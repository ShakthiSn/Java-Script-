function addValues()
{
	gs.print("welcome !");
	
}
function addValue(a,b)
{
	var add=a+b;
	gs.print(add);

}
addValues();
addValue(5,10);

function fullName(fName,lName)
{
	var fnl=fName+lName;
	return fnl;
}
gs.print(fullName("Shakthi","Vel"));
//eg......................
function emails(mail) 
{
    var ismail = false;
    if (mail.indexOf("@") > -1 && mail.indexOf(".com") > -1)
	{
        ismail = true;

    } else 
	{
        ismail = false;

    }
    return ismail;
}
gs.print(emails("Sakthe@gmail.com"));
gs.print(emails("Sakthe"));


//eg

var allMails = "Shakthi@gmail.com,saranya@gmail.com,shakthe";
var spml = allMails.split(',');
for (var i = 0; i < spml.length; i++) {
    if (emails(spml[i]) == false) {
        gs.print("Invalid Email Address #");
        break;
    } else {
        gs.print(spml[i]);
    }

}

function emails(mail) {
    var ismail = false;
    if (mail.indexOf("@") > -1 && mail.indexOf(".com") > -1) {
        ismail = true;

    } else {
        ismail = false;

    }
    return ismail;
}

/**** Script: Shakthi@gmail.com
*** Script: saranya@gmail.com
*** Script: Invalid Email Address #
*/

var obj={
	firstName:"Shakthe",
	lastName:"vel",
	qualification:"BCA",
	isMale:true,
	age:27,
	family:{father:"Rave",
	mother:"Kumutha",
	sister:"Suje"},
	fullName:function(){
		return this.firstName+this.lastName+" "+this.qualification;
	}


}
gs.print(obj.fullName());
//*** Script: Shakthevel BCA

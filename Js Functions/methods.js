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
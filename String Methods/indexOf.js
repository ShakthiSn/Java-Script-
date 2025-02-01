var para = "Start using ServiceNow's powerful Now Platform to build applications that make work better for your organization.";
var ss = para.indexOf('Apple');
gs.print(ss); // -1

var para1 = "Start using ServiceNow's powerful Now Apple Platform to build applications that make work better for your organization.";
var ss1 = para1.indexOf('Apple');
gs.print(ss1); //38



//eg 2

var name3 = "shakthi saranya shakthi indhu Viji  ";

if (name3.indexOf("Apple") >-1) 
{
    gs.print("found");
} 
else
{
    gs.print("not found"); //*** Script: not found

}
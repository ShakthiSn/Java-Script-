var valueOpen=true;
var openString;
if(!valueOpen)
{
    openString='open';
}
else
{
    openString='closed';
}
gs.info("1.currently openstring value is "+openString); //=> closed

//Introducing a shortcut way the ternary operator):
var openStringStatus=(valueOpen) ? 'open' : 'closed';
gs.info("1.currently openstring value is "+openStringStatus); //=> open
var units=200;
if(units<=100)
{
	gs.print(units*10+" Rupees");
}
else if(units>100&& units<=200)
{
	gs.print(units*20+" Rupees");
}
else if(units>200&& units<=300)
{
	gs.print(units*30+" Rupees");
}else if(units>300&& units<=400)
{
	gs.print(units*40+" Rupees");
}
else
{
	
	gs.print(units*80+" Rupees");

}
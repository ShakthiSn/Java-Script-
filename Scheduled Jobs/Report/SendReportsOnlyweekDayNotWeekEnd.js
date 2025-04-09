var gdt = new GlideDateTime().getDayOfWeekLocalTime();

if (gdt == 6 || gdt == 7) {
    gs.print('weekend');
    //answer=false;
} else {
    gs.print('weekday');
    //answer=true;
}

var gdt=new GlideDateTime().getDayOfWeekLocalTime();

if(gdt==6||gdt==7)
{
	answer=false;
}
else
{
	answer=true;
}

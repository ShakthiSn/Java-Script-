var num = 10;
for (var i = 1; i <= num; i++) {
    gs.print(i);
}

//eg 2

var nae="Shakthi";
for(var i=0;i<nae.length;i++)
{
	gs.print(nae[i]);

}
/*** Script: S
*** Script: h
*** Script: a
*** Script: k
*** Script: t
*** Script: h
*** Script: i */ 


var nm=["Shakthi","Saranya","Indhu","Viji"];
for(var i=0;i<nm.length;i++)
{
	gs.print(nm[i]);
}
// *** Script: Shakthi
// *** Script: Saranya
// *** Script: Indhu
// *** Script: Viji

var nm = [45, 23, 10, 98, 76, 30, 13, 309, 78, 94, 33,55, 22, 87, 77, 54,23, 15];

for (var i = 0; i <nm.length; i++) {
	if(i==4||i==5)
	{
		continue;
	}
    gs.print(nm[i]);
}

// I won't print 4th, 5th elements



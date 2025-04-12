var familyArr = {
	nam: "sakthi",
    age: 27,
    gender: "male",
	father:"ravi",
	mother:"kumutha"

};

for(var a in familyArr)
{
	gs.print(a+"               "+JSON.stringify(familyArr[a]));
}

/**** Script: nam               "sakthi"
*** Script: age               27
*** Script: gender               "male"
*** Script: father               "ravi"
*** Script: mother               "kumutha"
*/

//eg2

var nm = [45, 23, 10, 98, 76, 30, 13, 309, 78, 94, 33, 55, 22, 87, 77, 54, 23, 15];

for (var a in nm) {
    gs.print(nm[a]);
}

/*
 *** Script: 45
 *** Script: 23
 *** Script: 10
 *** Script: 98
 *** Script: 76
 *** Script: 30
 *** Script: 13
 *** Script: 309
 *** Script: 78
 *** Script: 94
 *** Script: 33
 *** Script: 55
 *** Script: 22
 *** Script: 87
 *** Script: 77
 *** Script: 54
 *** Script: 23
 *** Script: 15
 */

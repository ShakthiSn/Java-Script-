var obj = {

    employee: "Shakthi",
    age: 27,
    isMale: true,
    father: "Ravi",
    mother: "Kumutha",
    sister: "Sujatha",
    family: [{
            name: "Ravi",
            age: 50
        },
        {
            name: "kumutha",
            age: 45
        }
    ]


};
gs.print(obj);
gs.print(obj.employee);
gs.print(obj.family[0].name);

//Object into string 
var str=JSON.stringify(obj);
gs.print(str);
gs.print(typeof obj);
gs.print(typeof str);

// string into Object
var objj=JSON.parse(str);
gs.print(typeof objj);
gs.print(obj.family[1].name);

//Number into string 
var num=89;
gs.print(typeof num);
var strr=num.toString();
gs.print(typeof strr);

//string into Number
var numm=parseInt(strr);
gs.print(typeof numm);
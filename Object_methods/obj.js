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
var str=JSON.stringify(obj);
gs.print(str);
gs.print(typeof obj);
gs.print(typeof str);


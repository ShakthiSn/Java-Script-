var len=['apple','pineapple','banana','grapes','pappaya'];
gs.print(len.length);

var sp=len.splice(1); //after the pineapple or index possition of 1 it will remove everthing. 
gs.print(len.length); //apple

var sp1=len.splice(1,3); // it will remove 1 to 3 
gs.print(len);//apple,pappaya

var sp1=len.splice(1,3,'lemon','kivi'); // it will remove 1 to 3  then add the string 
gs.print(len); // apple,lemon,kivi,pappaya

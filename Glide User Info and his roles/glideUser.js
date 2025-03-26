var firstName=g_user.firstName;
alert(firstName);

var lastName=g_user.lastName;
alert(lastName);

var fullName=g_user.fullName;
alert(fullName);

var sys_id=g_user.userID;
alert(sys_id);


var roleCheck=g_user.hasRole('abcd');
alert(roleCheck);   //it will check given the role and additionally check admin role also
 


var roleExact=g_user.hasRoleExactly('abcd');
alert(roleExact); //it will check onle given the role not admin also

var hasanyRole=g_user.hasRoles();
alert(hasanyRole); //it will check given the roles and additionally check admin role also
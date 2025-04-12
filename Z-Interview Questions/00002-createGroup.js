var user=new GlideRecord('sys_user_group');
user.initialize();
user.setValue('name','Zenone Group');
user.setValue('manager','62826bf03710200044e0bfc8bcbe5df1');
user.setValue('email','zenonegroup@gmail.com');
user.setValue('description','test group');
user.insert();
//Method 1  Best Practice is using setValue Method.
var gr=new GlideRecord('u_shipping_case');
gr.initialize(); //without  default value it will create the record  
gr.setValue('u_description','Test desc');
gr.setValue('u_category','software');
gr.setValue('u_assigned_to','5137153cc611227c000bbd1bd8cd2007');
gr.setValue('u_assignment_group','8a4dde73c6112278017a6a4baf547aa7');
gr.setValue('u_caller','ebf45651839cea10b26e1080deaad34b');
gr.setValue('u_active',true);
gr.setValue('u_email','test2gmail.com');
gr.insert();

// Method 2
var gr = new GlideRecord('u_shipping_case');
gr.newRecord(); // with default value it will create the record 
gr.u_description='This dev test';
gr.u_configuration_item='46a0d123a9fe19810095d50257c4ad24';
gr.u_assigned_to='4cb4da51839cea10b26e1080deaad390';
gr.u_active=true;
gr.u_assignment_group='5d461615839cea10b26e1080deaad335';
gr.u_knowledge=true;
gr.u_caller='4cb4da51839cea10b26e1080deaad390';
gr.u_category='hardware';
gr.u_email='magbool2gmail.com';
gr.insert();

//Method 3

var gr = new GlideRecordSecure('u_shipping_case'); //it will check the permission to create the record
gr.newRecord();
gr.u_description='This dev test';
gr.u_configuration_item='46a0d123a9fe19810095d50257c4ad24';
gr.u_assigned_to='4cb4da51839cea10b26e1080deaad390';
gr.u_active=true;
gr.u_assignment_group='5d461615839cea10b26e1080deaad335';
gr.u_knowledge=true;
gr.u_caller='4cb4da51839cea10b26e1080deaad390';
gr.u_category='hardware';
gr.u_email='magbool2gmail.com';
gr.insert();
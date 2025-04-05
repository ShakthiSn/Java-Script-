//Last record or whisch is created latest one Record, it will show the Number and Description
var gr = new GlideRecordSecure('u_shipping_case');
gr.query();
if (gr.next()) {
    gs.print(gr.getValue('u_number') + ' ' + gr.getValue('u_description'));
}

// It will show Number and description of All the records which availabe in Shipping table
var gr = new GlideRecordSecure('u_shipping_case');
gr.query();
while (gr.next()) {
    gs.print(gr.getValue('u_number') + ' ' + gr.getValue('u_description'));
}

//addQuery() - to restrict or filter the record
var gr = new GlideRecordSecure('u_shipping_case');
gr.addQuery('active', '!=', 'true');
gr.query();
while (gr.next()) {
    gs.print(gr.getValue('u_number') + ' ' + gr.getValue('u_description'));
}

//addNotNullQuery() - used to required fields are empty.
var gr = new GlideRecordSecure('u_shipping_case');
//gr.addQuery('u_description','!=','');
gr.addNotNullQuery('u_description');
gr.query();
while (gr.next()) {
    gs.print(gr.getValue('u_number') + ' ' + gr.getValue('u_description'));
}

//addOrCondition()


var gr = new GlideRecordSecure('u_shipping_case');
gr.addQuery('active', '==', 'true');
gr.query();
while (gr.next()) {
    gs.print(gr.getValue('u_number') + ' ' + gr.getValue('u_description'));
}





var gr = new GlideRecord('u_shipping_case');
gr.addQuery('u_short_description', '');
gr.query();
while (gr.next()) {
    gs.print(gr.getValue('u_category') + '-----' + gr.getValue('u_short_description')); //category is hardware then email important
    gr.setValue('u_category', 'hardware');
    gr.update();
    gs.print(gr.getValue('u_category') + '-----' + gr.getValue('u_short_description'));
}

/*Script: software-----null
Background message, type:error, message: Data Policy Exception: 
    The following fields are mandatory: Email
*** Script: hardware-----null*/




//autoSysFields
var gr = new GlideRecord('u_airline_booking');
gr.addEncodedQuery('u_short_descriptionISEMPTY');
gr.query();
while (gr.next()) {
    gr.setValue('sys_updated_on', '2023-03-04 00:10:30');
     gr.setWorkflow(false);
    gr.autoSysFields(false);
    gr.setForceUpdate(true);
    gr.update();

}


//to update 7th record
var gr = new GlideRecord('u_airline_booking');
gr.orderBy('sys_created_on'); //latest record
gr.chooseWindow(6, 7); //7 th record will update here 6 means before the position of updated record.
//gr.setLimit(2); don't require the this setlimit becoz we give the position so setlimit won't work.
gr.query();
while (gr.next()) {
    gr.setValue('u_assigned_to', '62826bf03710200044e0bfc8bcbe5df1');
    gr.update();

}

//delete oldest record
var gr = new GlideRecord('u_airline_booking');
gr.orderBy('sys_created_on'); //oldest record
gr.setLimit(1);
gr.query();
while (gr.next()) {
    // gr.setValue('u_assigned_to', 'f682abf03710200044e0bfc8bcbe5d38');
    // gr.update();
	gr.setWorkflow(false); //it will worh here
	gr.deleteRecord();

}
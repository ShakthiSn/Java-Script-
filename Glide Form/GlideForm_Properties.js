g_form.addInfoMessage("Used to show an Message");
g_form.addErrorMessage("It will display the Error Message");
g_form.clearMessages(); // To clear all the Display Messages

g_form.showFieldMsg('caller_id','Should select any user'); //it will show the field under info message
g_form.hideFieldMsg('caller_id',true); // Hide the Particular Field Msg
g_form.hideAllFieldMsgs(); // it will hide the all field msg

g_form.setMandatory('state',true); // to make particular field mandatory.
g_form.setReadOnly('contact_type',true); // to make particular field readonly.
g_form.setDisplay('short_description',false); //Used to hide the field and with space.
g_form.setVisible('business_service',false); // Used to hide the field and without space. 
g_form.setDisabled('category',true); // similar to readonly field.


g_form.setVisible('u_string_8',true);
g_form.setDisabled('u_location',true);

g_form.setValue('description','Wifi is not working'); //used to to set particular field value.
g_form.getvalue('caller_id'); //used to to get particular field value.
g_form.clearValue('description'); //to clear particular field value. 


var sec=g_form.getSectionNames();
alert(sec); //notes,related_records,resolution_information => To get all section names
 g_form.setSectionDisplay('notes',false); // used to hide particular section.

var hideAllSec=g_form.getSectionNames();
for(var i=0;i<hideAllSec.length;i++)
{
    g_form.setSectionDisplay(hideAllSec[i],false); // hide all sections
}

var edit=g_form.getEditableFields();
alert(edit);
for(var i=0;i<edit.length;i++)
{
    g_form.setReadOnly(edit[i],true); // to make field readonly what are the fields are editable(not applicable for mandatory fields )
}

//Choice Options
g_form.addOption('category','SalesForce','Salesforce');
g_form.removeOption('category','SalesForce');
g_form.clearOptions('category');


//Return true or false
var newRec=g_form.isNewRecord();
alert(newRec);

var mandatoryOrNot=g_form.isMandatory('caller_id');
alert(mandatoryOrNot);

var secvisibleorNot=g_form.isSectionVisible('notes');
alert(secvisibleorNot);

 
alert(g_form.getBooleanValue('knowledge'));  // 
alert(g_form.getTableName('notes')); //return current table name
alert(g_form.getActionName());   //it will return last clicked button name
alert(g_form.getUniqueValue());  // retun sysID of current record      

g_form.hideRelatedList('metrics');
g_form.showRelatedList('metrics');
g_form.hideRelatedLists();
g_form.showRelatedLists();

g_form.getElement("lookup.incident.caller_id").style.display='none';
g_form.getElement("sys_display.incident.caller_id").style.color='white';
g_form.getElement("sys_display.incident.caller_id").style.backgroundColor='red';

	
var fnm=g_form.getReference('caller_id').firstName;
alert(fnm);
var lb=g_form.getLabelOf('category');
alert(lb);
var setlm=g_form.setLabelOf('category','Section');

g_form.getIntValue();
g_form.getDecimalValue();
g_form.save();
g_form.submit();


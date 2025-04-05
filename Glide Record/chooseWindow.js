var gr = new GlideRecord('incident');
gr.orderBy('sys_created_on'); // means ascending the record and will come oldest record first. latest record will go last.
gr.chooseWindow(101,102); // total record=102 ->  it will update the last record that is 102.
gr.query();
while(gr.next())
{
	gr.setValue('short_description','test@gmail.com');
	gr.update();
}
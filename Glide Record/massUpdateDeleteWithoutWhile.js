var gr = new GlideRecord('u_airline_booking');
gr.query();
gr.setValue('u_short_description', 'Given by Background Script');
gr.updateMultiple();



var gr = new GlideRecord('u_airline_booking');
gr.addQuery('u_email','!=','');
gr.query();
gr.setWorkFlow(false); 
gr.deleteMultiple();

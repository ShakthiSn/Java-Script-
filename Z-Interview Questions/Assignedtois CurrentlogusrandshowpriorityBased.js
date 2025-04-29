var gr = new GlideRecord('incident');
gr.addQuery('assigned_to', gs.getUserID());
gr.orderBy('priority');
gr.query();
while (gr.next()) {

    gs.print("INC :" + gr.number + " | Priority " + gr.priority + " | Assigned To : " + gr.assigned_to.getDisplayValue());
}
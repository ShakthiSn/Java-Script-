var gr = new GlideRecord('u_shipping_case');
gr.addQuery('state', 'resolved');
gr.query();
while (gr.next()) {
    var resTime = new GlideDateTime(gr.u_resolved_at);
    var today = new GlideDateTime();
    var diff = GlideDateTime.subtract(resTime, today).getDayPart();
    if (diff >= 5) {
        gr.setValue('u_state', 'closed');
        gr.update();
    }

}
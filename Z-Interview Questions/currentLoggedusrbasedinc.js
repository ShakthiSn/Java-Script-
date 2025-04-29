var gr = new GlideRecord('incident');
gr.addQuery('location', gs.getUser().getLocation());
gr.addQuery('location','!=','');
gr.query();

while (gr.next()) {
    gs.print(gr.number + ' ' + gr.location.getDisplayValue());
}

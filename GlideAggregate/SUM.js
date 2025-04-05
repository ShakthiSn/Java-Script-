var gr = new GlideRecord('incident');
gr.addQuery('u_total_cost', '!=', '');
gr.query();
var sum = 0;
while (gr.next()) {
    sum += parseInt(gr.getValue('u_total_cost'));
}
gs.print(sum);



var gr = new GlideAggregate('incident');
gr.addAggregate('SUM', 'u_total_cost');
gr.setGroup(false);
gr.query();
while (gr.next()) {
    gs.print(gr.getAggregate('SUM', 'u_total_cost'));
}
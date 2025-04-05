var gr = new GlideAggregate('incident');
gr.addAggregate('AVG', 'u_total_cost');
gr.setGroup(false);
gr.query();
while (gr.next()) {
    gs.print(gr.getAggregate('AVG', 'u_total_cost'));
}
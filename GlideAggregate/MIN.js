var gr = new GlideAggregate('incident');
gr.addAggregate('MIN', 'u_total_cost');
gr.setGroup(false);
gr.query();
while (gr.next()) {
    gs.print(gr.getAggregate('MIN', 'u_total_cost'));
}
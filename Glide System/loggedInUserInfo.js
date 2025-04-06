// gs.print(gs.getUser().getAllRoles());
// gs.print(gs.getUser().getRecord().getValue('email')); //*** Script: admin@example.com
gs.print(gs.getUser().getRecord().getValue('first_name'));
gs.print(gs.getUser().getRecord().getValue('last_name'));
gs.print(gs.getUser().getRecord().getDisplayValue('location'));
gs.print(gs.getUser().getRecord().getDisplayValue('department'));
gs.print(gs.getUser().getRecord().getDisplayValue('calendar_integration'));
/*
*** Script: System
*** Script: Administrator
*** Script: Americas
*** Script: Finance
*** Script: Outlook

*/



gs.print(gs.hasRole('xyz')); //*** Script: true
gs.print(gs.getUserID());
gs.print(gs.yesterday());
gs.print(gs.hoursAgoStart(5));
gs.print(gs.hoursAgo(5));
gs.print(gs.minutesAgo(10));
gs.print(gs.tableExists('sys_user'));

/*
*** Script: true
*** Script: 6816f79cc0a8016401c5a33be04be441
*** Script: 2025-04-05 02:37:43
*** Script: 2025-04-05 21:00:00
*** Script: 2025-04-05 21:37:43
*** Script: 2025-04-06 02:27:43
*** Script: true

*/
gs.print(gs.getSession().isInteractive()); //*** Script: false



var ga = new GlideAggregate('incident');
ga.addQuery('sys_created_by', gs.getUserName());
ga.addQuery('sys_created_on', '>=', gs.daysAgoStart(7));
ga.addAggregate('COUNT');
ga.query();
while (ga.next()) {
    gs.print(ga.getAggregate('COUNT'));
}
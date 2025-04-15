var gt = new GlideDate();
gs.print(gt);
gs.print(gt.getDisplayValue());
gs.print(gt.getDisplayValueLang('full'));
gs.print(gt.getDisplayValueLang('long'));
gs.print(gt.getDisplayValueLang('medium'));
gs.print(gt.getDisplayValueLang('short'));
gs.print(gt.getDisplayValueInternal());


// var gt1=new GlideDateTime();
// gs.print(gt1);

gs.print(gt.getByFormat('MM-dd-yyyy'));
gs.print(gt.getDayOfMonthNoTZ());
gs.print(gt.getMonthNoTZ());
gs.print(gt.getYearNoTZ());




var sgd1 = new GlideDate();
sgd1.setDisplayValue('2025-07-20');
var sgd2 = new GlideDate();
sgd2.setDisplayValue('2025-07-21');

var duration = GlideDate.subtract(sgd1, sgd2);
gs.info(duration.getDisplayValue());

var given = new GlideDate();
//given.setDisplayValue('2025-04-20');
var today = new GlideDate();
today.setDisplayValue('2025-04-26');

var dur = GlideDate.subtract(given, today);
gs.print(dur.getDisplayValue());

var gr=new GlideDateTime('2025-04-13 12:00:00');
gs.print(gr.getNumericValue());
gr.add(20);
gs.print(gr.getNumericValue());

var ss=new GlideDateTime();
ss.addDays(-1);
gs.print(ss);

var ss1=new GlideDateTime();
ss1.addWeeks(1);
gs.print(ss1);

var gdt=new GlideDateTime();
gdt.addMonths(2);
gs.print(gdt.getDate());

var crt=new GlideDateTime();
var end=new GlideDateTime('2025-04-30 00:08:00');

var gg=crt.compareTo(end);
gs.print(gg);










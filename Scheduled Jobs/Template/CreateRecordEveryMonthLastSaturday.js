var gdt = new GlideDateTime(gs.endOfThisMonth()); //2025-02-18 00:00:00
var day = gdt.getDayOfWeek();
while (day != 6) {
    gdt.addDays(-1); //2025-02-18 00:00:00 (-1) =  2025-02-17 00:00:00
    day = gdt.getDayOfWeek();
}

var today = new GlideDateTime().getDate().toString();
var last = gdt.getDate().toString();

if (today == last) {
    answer = true;
}
else {
    answer = false;
}
var gr = new GlideRecord('incident');
gr.query();
if (gr.next()) { //if will print one time and while number of records  time
    gs.print(gr.getRowCount());
}


var gr = new GlideAggregate('incident');
gr.addAggregate('COUNT');
gr.query();
if (gr.next()) { //if while Both will work Same
    gs.print(gr.getAggregate('COUNT'));
}

//State wise or Group by State count

var gr = new GlideAggregate('incident');
gr.addAggregate('COUNT','state');
gr.query();
while (gr.next()) {
    gs.print(gr.getDisplayValue('state')+'  '+gr.getAggregate('COUNT','state'));
}


//Count the Duplicate record and Delete the Duplicate record

var gr = new GlideAggregate('incident');
gr.addAggregate('COUNT', 'number');
gr.query();
while (gr.next()) {
    gs.print(gr.getDisplayValue('number') + '    ' + gr.getAggregate('COUNT', 'number'));
    if (gr.getAggregate('COUNT', 'number') > 1) {
        gs.print(gr.getDisplayValue('number') + '    ' + gr.getAggregate('COUNT', 'number'));
        var ga = new GlideRecord('incident');
        ga.addQuery('number', gr.getValue('number'));
        ga.orderBy('sys_updated_on');
        ga.query();
        ga.next();
        while (ga.next()) {
            ga.deleteRecord();

        }

    }
}
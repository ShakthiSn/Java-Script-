var gr = new GlideAggregate('incident');
gr.addAggregate('MAX', 'u_total_cost');
gr.setGroup(false);
gr.query();
while (gr.next()) {
    gs.print(gr.getAggregate('MAX', 'u_total_cost'));
}



var gr = new GlideRecord('incident');
gr.addNotNullQuery('u_total_cost');
gr.query();
var arr = [];
while (gr.next()) {
    arr.push(gr.getValue('u_total_cost'));
    gs.print(arr);
}
gs.print(arr);
for (var i = 1; i < arr.length; i++) {
    gs.print(arr[i]);

    for (var j = 0; j < i; j++) {
        gs.print("hi  " + j);
        if (arr[i] < arr[j]) {
            var x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;

        }

    }

}
gs.print(arr[arr.length - 1]);

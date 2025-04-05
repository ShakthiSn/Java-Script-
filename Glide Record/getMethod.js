var gr = new GlideRecord('incident');
gr.get('f2abf39383a46610b26e1080deaad333');
gr.setValue('short_description','Chennai super King');
gr.update();

var gr = new GlideRecord('incident');
gr.get('f2abf39383a46610b26e1080deaad333');
gr.deleteRecord();

//if you want update or delete particular record without if we can go get() Method.
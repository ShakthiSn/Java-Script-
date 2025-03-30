var gr = new GlideRecord('problem');
gr.initialize();
gr.setValue('first_reported_by_task', current.getValue('u_caller'));
gr.setValue('category', current.getValue('u_category'));
gr.setValue('cmdb_ci', current.getValue('u_configuration_item'));
gr.setValue('short_description', current.getValue('u_string_1'));
gr.setValue('description', current.getValue('u_string_2'));
gr.setValue('assignment_group', current.getValue('u_assignment_group'));
gr.insert();


var prob = gr.getValue('sys_id');
var probList = current.u_problemlist;
if (probList == '') {
    current.setValue('u_problemlist', prob);

} else {
    current.setValue('u_problemlist', probList + ',' + prob);

}
current.update();
gs.addInfoMessage(gr.getValue('number') + " Problem Record Creation Successfully !");
action.setRedirectURL(current);

//current.u_problemlist.split(',').length<2 || current.u_problemlist==''
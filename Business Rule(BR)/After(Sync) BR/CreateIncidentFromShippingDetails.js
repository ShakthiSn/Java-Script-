(function executeRule(current, previous /*null when async*/ ) {

    var gr = new GlideRecord('incident');
    gr.initialize();
    gr.setValue('caller_id', current.u_caller);
    gr.setValue('short_description', current.u_string_1);
    gr.setValue('description', current.u_string_2);
    gr.setValue('category', current.u_category);
    gr.setValue('subcategory', current.u_sub_category);
    gr.setValue('cmdb_ci', current.u_configuration_item);
    var sys = gr.insert();
    current.u_reference_4 = sys;
    current.setWorkflow(false);// while update Setworkfloe is mandatory.
    current.update();
})(current, previous);
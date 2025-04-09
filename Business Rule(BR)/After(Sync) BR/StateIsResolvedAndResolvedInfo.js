(function executeRule(current, previous /*null when async*/ ) {

    current.setValue('u_resolution_code', 'know erroe');
    current.setValue('u_resolved_at', new GlideDateTime());
    current.setValue('u_resolved_by', gs.getUserID());
    current.setValue('u_string_3', 'test from Dev Environment');
    current.setWorkflow(false);
    current.update();
})(current, previous); // also use GlideRecord ----sys_id,current.sys_id;
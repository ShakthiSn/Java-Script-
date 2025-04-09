(function executeRule(current, previous /*null when async*/ ) {

    var gr = new GlideRecord('incident');
    gr.addQuery('problem_id', current.sys_id);
    gr.query();
    while (gr.next()) {

        gr.setValue('state', '7');
        gr.setValue('close_code', 'Resolved by problem');
        gr.setValue('close_notes', 'Resolved By Shakthi');
        gr.setValue('resolved_by', gs.getUserID());
        gr.setValue('resolved_at', new GlideDateTime());
        gr.setWorkflow(false);
        gr.update();
    }


})(current, previous);
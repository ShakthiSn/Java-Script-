(function executeRule(current, previous /*null when async*/ ) {

    var gr = new GlideRecord('incident');
    gr.addQuery('problem_id', current.sys_id);
    gr.query();
    while (gr.next()) {
        gr.state = '7';
        gr.close_notes = current.fix_notes;
        gr.close_code = 'Resolved by problem';
        gr.setWorkflow(false);
        gr.update();
    }


})(current, previous);
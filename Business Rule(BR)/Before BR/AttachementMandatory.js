(function executeRule(current, previous /*null when async*/) {

    var gr = new GlideRecord('sys_attachment');
    gr.addquery('table_name', current.getTableName());
    gr.addquery('table_sys_id', current.sys_id);
    gr.query();
    if (!gr.next()) {
        gs.addErrorMessage('Attachment is Mandatory !');
        current.setAbortAction(true);

    }
})(current, previous);
var AdditionalAssignedTo = Class.create();
AdditionalAssignedTo.prototype = {
    initialize: function() {},

buildConditionForAffectedCallerId: function(current) {
    var gr = new GlideRecord('sys_user');
    gr.addQuery('department', gs.getUser().getDepartmentID());
    gr.addQuery('sys_id', '!=', current.caller_id);
    gr.query();
    var queryStr = '';
    while (gr.next()) {
        if (queryStr == '') {
            queryStr = 'sys_idIN' + gr.getValue('sys_id');
        }
        queryStr += ',' + gr.getValue('sys_id');
    }
    return queryStr;



},
buildConditionForCallerId: function(current) {
    var gr = new GlideRecord('sys_user');
    gr.addQuery('department', gs.getUser().getDepartmentID());
    gr.addQuery('sys_id', '!=', current.u_affected_caller);
    gr.query();
    var queryStr = '';
    while (gr.next()) {
        if (queryStr == '') {
            queryStr = 'sys_idIN' + gr.getValue('sys_id');
        }
        queryStr += ',' + gr.getValue('sys_id');
    }
    return queryStr;



},
type: 'AdditionalAssignedTo'
};
var gr = new GlideRecord('sys_user_grmember');
gr.addQuery('group', 'b85d44954a3623120004689b2d5dd60a');
gr.addQuery('user', '!=', 'ee826bf03710200044e0bfc8bcbe5de6');
gr.query();
var queryStr = '';
while (gr.next()) {
    if (queryStr == '') {
        queryStr = 'sys_idIN' + gr.getDisplayValue('user');
    } else {
        queryStr += ',' + gr.getDisplayValue('user');
    }
}
gs.print(queryStr);




//Script Include
var AdditionalAssignedTo = Class.create();
AdditionalAssignedTo.prototype = {
    initialize: function () { },

    buildConditionforAdditionalAssignedTo: function (current) {
        var gr = new GlideRecord('sys_user_grmember');
        gr.addQuery('group', current.assignment_group);
        gr.addQuery('user', '!=', current.assigned_to);
        gr.query();
        var queryStr = '';
        while (gr.next()) {
            if (queryStr == '') {
                queryStr = 'sys_idIN' + gr.getValue('user');
            } else {
                queryStr += ',' + gr.getValue('user');
            }
        }
        return queryStr;
        // javascript:new AdditionalAssignedTo().buildConditionforAdditionalAssignedTo(current)
        //Field Configure> Refereence qualifier> addvanced > 
        // 'new'Keyword + Script Include Name ().+ function name with current object 

    },

    buildConditionforAssignedTo: function (current) {
        var gr = new GlideRecord('sys_user_grmember');
        gr.addQuery('group', current.assignment_group);
        gr.addQuery('user', '!=', current.u_additional_assigned_to);
        gr.query();
        var queryStr = '';
        while (gr.next()) {
            if (queryStr == '') {
                queryStr = 'sys_idIN' + gr.getValue('user');
            } else {
                queryStr += ',' + gr.getValue('user');
            }
        }
        return queryStr;

    },

    type: 'AdditionalAssignedTo'
};
// javascript:new AdditionalAssignedTo().buildConditionforAssignedTo(current)


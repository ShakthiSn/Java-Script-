var getCallerInformation = Class.create();
getCallerInformation.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    
getConfigDetails: function() {
    var ci = new GlideRecord('cmdb_ci');
    ci.addQuery('sys_id', this.getParameter('sysparm_ci'));
    ci.query();
    var callstr1 = '';
    if (ci.next()) {
        callstr1 = ci.getValue('support_group');
    }
    return callstr1;
},


type: 'getCallerInformation'
});
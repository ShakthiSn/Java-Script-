function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (newValue === '') {
        g_form.clearValue('assignment_group');
        return;
    }

    var ga = new GlideAjax('getCallerInformation');
    ga.addParam('sysparm_name', 'getConfigDetails');
    ga.addParam('sysparm_ci', g_form.getValue('cmdb_ci'));
    ga.getXMLAnswer(callback);

    function callback(call) {
        var sp = call.split(':');
        g_form.setValue('assignment_group', sp[0]);
    }

    //Type appropriate comment here, and begin script below

}
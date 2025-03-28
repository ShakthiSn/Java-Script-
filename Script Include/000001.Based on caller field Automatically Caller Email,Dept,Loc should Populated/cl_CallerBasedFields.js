function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (newValue === '') {
        g_form.clearValue('u_location');
        g_form.clearValue('u_email');
        g_form.clearValue('u_department');
        return;
    }
    alert('8');
    var ga = new GlideAjax('getCallerInformation');
    alert('10');
    ga.addParam('sysparm_name', 'getCallerDetails');
    ga.addParam('sysparm_caller', g_form.getValue('caller_id'));
    alert('12');
    ga.getXMLAnswer(calback);
    alert('14');

    function calback(caller) {
        var call = caller.split(':');
        alert('18');
        g_form.setValue('u_email', call[0]);
        g_form.setValue('u_location', call[2]);
        g_form.setValue('u_department', call[1]);
        alert('22');
    }

}
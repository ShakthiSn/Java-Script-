function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (newValue === '') {
        g_form.clearValue('u_short_description');
        g_form.clearValue('u_description');
        return;
    }

    var ga = new GlideAjax('getCallerInformation');
    ga.addParam('sysparm_name', 'childIncidentDetails');
    ga.addParam('sysparm_inc', g_form.getValue('u_incident'));
    ga.getXMLAnswer(callback);

    function callback(call) {
        var cinc = JSON.parse(call);//   var sp = call.split('^^^');
        g_form.setValue('u_short_description', cinc.sd);
        g_form.setValue('u_description', cinc.des);
    }



}
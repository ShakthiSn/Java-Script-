function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (newValue === '') {
        g_form.clearValue('u_email');
        g_form.clearValue('u_department');
        g_form.clearValue('u_location');
        return;
    }

    var call = g_form.getReference('u_caller', callback);

    function callback(call) {
        g_form.setValue('u_email', call.email);
        g_form.setValue('u_location', call.location);
        g_form.setValue('u_department', call.department);
    }



    //Type appropriate comment here, and begin script below

}
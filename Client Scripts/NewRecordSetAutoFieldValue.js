if (g_form.isNewRecord) {

    g_form.setValue('caller_id', g_user.userID);
    // var callerEmail = g_form.getReference('caller_id').email;
    // var callerLoc= g_form.getReference('caller_id').location;
    // var callerDept= g_form.getReference('caller_id').department;
    // g_form.setValue('u_email', callerEmail);
    // g_form.setValue('u_department',callerDept);
    // g_form.setValue('u_location',callerLoc);

    g_form.getReference('caller_id',callback);

    function callback(call)
    {
        g_form.setValue('u_location',call.location);
        g_form.setValue('u_email',call.email);
        g_form.setValue('u_department',call.department);
    }
}
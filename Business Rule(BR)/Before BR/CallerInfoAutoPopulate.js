(function executeRule(current, previous /*null when async*/ ) {
    current.setValue('u_email', current.u_caller.email);
    current.setValue('u_department', current.u_caller.department);
    current.setValue('u_location', current.u_caller.location);


})(current, previous);
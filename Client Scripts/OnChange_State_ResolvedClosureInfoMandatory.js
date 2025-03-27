function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (newValue === '') {
        return;
    }
    if (newValue == 6) {
        g_form.setMandatory('u_choice_3', true);
        g_form.setMandatory('u_string_4', true);
    } else {
        g_form.setMandatory('u_choice_3', false);
        g_form.setMandatory('u_string_4', false);
    }



    //Type appropriate comment here, and begin script below

}
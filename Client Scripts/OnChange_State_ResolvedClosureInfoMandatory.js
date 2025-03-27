function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (newValue === '') {
        return;
    }
    if (newValue == 6) {
        g_form.setMandatory('notes', true);
        g_form.setMandatory('resolution_information', true);
    } else {
        g_form.setMandatory('notes', false);
        g_form.setMandatory('resolution_information', false);
    }

}
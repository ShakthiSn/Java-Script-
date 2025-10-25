function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (newValue === '') {
        return;
    }
    var sm = g_form.getValue('short_description');
    if (sm) {
        var form = sm.charAt(0).toUpperCase() + sm.slice(1);
        if (sm != form) {
            g_form.setValue('short_description', form);

        }

    }

    //Type appropriate comment here, and begin script below

}


function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (newValue === '') {
        return;
    }
    var sd = g_form.getValue('short_description');
    if (sd) {
        // var form=sd.toUpperCase();
        var form = sd.toLowerCase();
        // var form = sd.replace(/\b\w/g, c => c.toUpperCase());
        // var form = sd.replace(/\b\w/g, c => c.toLowerCase());
        if (sd != form) {
            g_form.setValue('short_description', form);
        }
    }

}

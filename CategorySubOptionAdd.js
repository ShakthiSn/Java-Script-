function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
    var oldrec = g_form.getValue('what_needed');
    g_form.clearOptions('what_needed');


    if (newValue == 'facilities') {
        g_form.addOption('what_needed', 'cleaning', 'Cleaning');
        g_form.addOption('what_needed', 'security', 'Security');
        g_form.addOption('what_needed', 'other', 'Other');

    }
    if (newValue == 'hr') {
        g_form.addOption('what_needed', 'pay_slip', 'Pay Slip');
        g_form.addOption('what_needed', 'benifites', 'Benifities');
        g_form.addOption('what_needed', 'other', 'Other');

    }
    if (newValue == 'legal') {
        g_form.addOption('what_needed', 'contract_review', 'Contract Review');
        g_form.addOption('what_needed', 'legal_options', 'Legal Option');
        g_form.addOption('what_needed', 'other', 'Other');


    }
    if (isLoading && !(g_form.isNewRecord())) {
        g_form.setValue('what_needed', oldrec);
    }



}

//When current logged in user has role itil then he can be able to see State field and Notes section.
  
    var role = g_user.hasRoleExactly('itil');
    if (role) {
        g_form.setDisplay('state', true);
        g_form.setSectionDisplay('notes', true);

    } else {
        g_form.setDisplay('state', false);
        g_form.setSectionDisplay('notes', false);

    }
// current.setValue('u_state','resolved');
// current.update();
// action.setRedirectURL(current);

function onResolutionInfo() {
    var rcode = g_form.getValue('u_resolution_code');
    var rnote = g_form.getValue('u_string_3');

    if (rcode == '' || rnote == '') {
        var gm = new GlideModal('select_resolution_information');
        gm.setTitle('Resolution Information');
        gm.render();
        return false;
    }
    else {
        gsftSubmit(null, g_form.getFormElement(), 'resolved_state');

    }

}

if (typeof window == 'undefined') {
    stateUIAction('resolved');
}





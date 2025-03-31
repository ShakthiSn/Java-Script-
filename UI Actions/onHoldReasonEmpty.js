// current.setValue('u_state','onhold');
// current.update();
// action.setRedirectURL(current);


function onHoldReason() {
    var onHoldRea = g_form.getValue('u_onhold_reason');
    if (onHoldRea == '') {
        g_form.hideFieldMsg('u_onhold_reason', true);
        g_form.showFieldMsg('u_onhold_reason', 'On Hold Reason Is Should not Empty !', 'error');
        return false;

    } else {
        gsftSubmit(null, g_form.getFormElement(), 'pending_state');

    }

}

if (typeof window == 'undefined') {
    stateUIAction('onhold');
}

//current.u_state=='new'||current.u_state=='inprogress'
//pending_state   ---> Action Name
//onHoldReason() ---> onclick
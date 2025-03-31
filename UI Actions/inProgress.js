current.setValue('u_state', 'inprogress');
current.update();
action.setRedirectURL(current);

//current.u_state=='calcelled'||current.u_state=='closed'||current.u_state=='resolved'||current.u_state=='new' //Condition
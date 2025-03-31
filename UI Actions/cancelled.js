current.setValue('u_state','cancelled');
current.update();
action.setRedirectURL(current);

//current.u_state=='new'||current.u_state=='inprogress'||current.u_state=='onhold'
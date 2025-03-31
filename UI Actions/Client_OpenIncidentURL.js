function incidentCreation() {
    //var url='https://dev224586.service-now.com/incident.do?sys_id=-1';
    var url = 'https://dev224586.service-now.com/incident.do?sys_id=-1&sysparm_query=caller_id=' + g_form.getValue('u_caller') + '^cmdb_ci=' + g_form.getValue('u_configuration_item');
    g_navigation.openPopup(url);
}



//Onclick:incidentCreation()
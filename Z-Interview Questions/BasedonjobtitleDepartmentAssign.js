(function executeRule(current, previous /*null when async*/ ) {

    if (current.title.changes() || !previous.title) {
        var jobtitle = current.getValue('title').toLowerCase();
        var departmentSysID = '';

        switch (jobtitle) {
            case 'vice president':
                departmentSysID = '9a7ed3f03710200044e0bfc8bcbe5db7'; // Product Mgmt
                break;

            case 'senior developer':
            case 'developer':
            case 'programmer':
                departmentSysID = '221f3db5c6112284009f4becd3039cc9'; // Development
                break;

            case 'inside sales':
                departmentSysID = '221db0edc611228401760aec06c9d929'; // Sales
                break;

            default:
                departmentSysID = '';
        }

        if (departmentSysID) {
            current.department = departmentSysID;
        }

    }

})(current, previous);
(function process( /*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    var reqCaller = request.body.data.caller;
    var reqShortD = request.body.data.short;
    var reqDes = request.body.data.des;
    var reqContract = request.body.data.channel;
    var reqState = request.body.data.stat;
    var reqCategory = request.body.data.categ;
    var reqSubCat = request.body.data.subct;
    var reqCmdbCi = request.body.data.cmdb;
    var reqAssignmentGrp = request.body.data.assGrp;
    var reqAssignTo = request.body.data.assTo;







    // ✅ Step 1: Check if caller is provided and not false/null/empty
    if (!reqCaller || reqCaller === 'false') {
        response.setStatus(400);
        return {
            status: 'error',
            message: 'Caller field is required and cannot be empty or false.'
        };
    }

    // ✅ Step 2: Check if caller exists in sys_user (assuming caller = user_name)
    var userGR = new GlideRecord('sys_user');
    userGR.addQuery('sys_id', reqCaller); // adjust this if you want to search by sys_id or email
    userGR.query();

    if (!userGR.next()) {
        response.setStatus(400);
        return {
            status: 'error',
            message: 'Caller "' + reqCaller + '" not found in the system.'
        };
    }



    //Category
    var validMap = {
        'hardware': ['cpu', 'keyboard', 'mouse', 'memory', 'monitor', 'disk'],
        'software': ['email', 'os'],
        'network': ['dhcp', 'dns', 'vpn', 'ip address', 'wireless'],
        'database': ['db2', 'sql server', 'oracle'],
        'inquiry': ['internal application', 'email', 'antivirus'],
        'password_reset': ['']
    };
    if (!reqCategory || reqCategory == '') {
        response.setStatus(400);
        return {
            status: 'error',
            message: 'Category is Should not Empty or null or false'
        };
    }

    if (!validMap[reqCategory]) {
        response.setStatus(400);
        return {
            status: 'error',
            message: 'Invalid category provided.'
        };
    }

    if (validMap[reqCategory].indexOf(reqSubCat) === -1) {
        response.setStatus(400);
        return {
            status: 'error',
            message: "Subcategory " + reqSubCat + " is not valid for category " + reqCategory + "."
        };
    }

    // --- Assignment Group validation
    if (!reqAssignmentGrp || reqAssignmentGrp === 'false') {
        response.setStatus(400);
        return {
            status: 'error',
            message: 'Assignment group is required and cannot be empty or false.'
        };
    }

    var groupGR = new GlideRecord('sys_user_group');
    groupGR.addQuery('sys_id', reqAssignmentGrp); // Use sys_id if passing that
    groupGR.query();

    if (!groupGR.next()) {
        response.setStatus(400);
        return {
            status: 'error',
            message: 'Assignment group "' + reqAssignmentGrp + '" not found.'
        };
    }

    // --- Assigned To validation
    if (!reqAssignTo || reqAssignTo === 'false') {
        response.setStatus(400);
        return {
            status: 'error',
            message: 'Assigned to is required and cannot be empty or false.'
        };
    }

    var assignedUserGR = new GlideRecord('sys_user');
    assignedUserGR.addQuery('sys_id', reqAssignTo); // Use sys_id if needed
    assignedUserGR.query();

    if (!assignedUserGR.next()) {
        response.setStatus(400);
        return {
            status: 'error',
            message: 'Assigned to user "' + reqAssignTo + '" not found.'
        };
    }

    // --- ✅ Check if assigned_to is in assignment_group
    var memberCheck = new GlideRecord('sys_user_grmember');
    memberCheck.addQuery('user', assignedUserGR.sys_id);
    memberCheck.addQuery('group', groupGR.sys_id);
    memberCheck.query();

    if (!memberCheck.next()) {
        response.setStatus(400);
        return {
            status: 'error',
            message: 'User "' + reqAssignTo + '" is not a member of the assignment group "' + reqAssignmentGrp + '".'
        };
    }

    //Configuration Item

    if (!reqCmdbCi || reqCmdbCi == '') {
        response.setStatus(400);
        return {
            status: 'error',
            message: 'Cmdb/ci is mandatory'
        };
    }

    var ci = new GlideRecord('cmdb_ci');
    ci.addQuery('sys_id', reqCmdbCi);
    ci.query();
    if (!ci.next()) {
        response.setStatus(400);
        return {
            status: 'error',
            message: 'Invalid Cmdb/ci'
        };
    }

    if (!reqShortD || reqShortD == '') {
        response.setStatus(400);
        return {
            status: "erroe",
            message: 'Short Description filed is mandatory'
        };
    }

    if (!reqDes || reqDes == '') {
        response.setStatus(400);
        return {
            status: "erroe",
            message: 'Description filed is mandatory'
        };
    }

    var chnl = ['walkin', 'email', 'chat', 'phone', 'self-service', 'virtual_agent'];

    if (!reqContract || reqContract == '') {
        response.setStatus(400);
        return {
            status: 'Error',
            message: 'Channel fiels is mandatory!'
        };
    }

    if (chnl.indexOf(reqContract) === -1) {
        response.setStatus(400);
        return {
            status: 'error',
            message: 'Invalid Channel type'
        };
    }



    // var err = '';
    var objsuccess = {};
    // var objError = {};
    var inc = new GlideRecord('incident');
    inc.initialize();
    inc.caller_id = reqCaller;
    inc.category = reqCategory;
    inc.subcategory = reqSubCat;
    inc.cmdb_ci = reqCmdbCi;
    inc.short_description = reqShortD;
    inc.description = reqDes;
    inc.contact_type = reqContract;
    inc.state = reqState;
    inc.assignment_group = reqAssignmentGrp;
    inc.assigned_to = reqAssignTo;
    inc.insert();

    // Return succes
    objsuccess.number = inc.number;
    objsuccess.sysID = inc.sys_id;
    objsuccess.status = 200;
    response.setBody(objsuccess);
    response.setStatus(201);





})(request, response);
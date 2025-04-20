(function process( /*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    var reqCaller = request.data.caller;
    var reqShortD = request.data.short;
    var reqDes = request.data.des;
    var reqContract = request.data.channel;
    var reqState = request.data.stat;
    // var reqHoldReasn = request.data.hldResn;
    var reqCategory = request.data.categ;
    var reqSubCat = request.data.subct;
    var reqCmdbCi = request.data.cmdb;
    var reqAssignmentGrp = request.data.assGrp;
    var reqAssignTo = request.data.assTo;


    var objsuccess = {};
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

    objsuccess.number = inc.number;
    objsuccess.sysID = inc.sys_id;
    objsuccess.status = 200;



    response.setBody(objsuccess);




})(request, response);
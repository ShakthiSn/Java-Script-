/*
First we need to create Stagging table from external system.
 sys_transform_map_list - Here we can find all the created stagging tables.
 1. Create the stagging table and select the target table from Inbound > create new >(v_ws_creator)
 2. Under Web services filed to create the fields Like,
                   Short Description,
                   State,
                   Description,
                   Caller,
                   Incident ID - u_incident_id,
                   Contract Type
3. Once you done this then click Create Button.
4. You need to do Map the fields Using  Either Mapping Assist or Auto Map Matching Fields
5. So here Incident Id Coalesce and this id  do validation. So need to select 
                   !.Use Source Script true.
6. If the Incident id is go to check with external system Incident record if, the record is presant then update the record or it will create the new record.            
                   
*/

answer = (function transformEntry(source) {

    if (source.u_incident_id == '') {
        return gs.generateGUID();

    } else {
        return source.u_incident_id;
    }

})(source);

// Now Go to rest Api Explorer then select the Import set Api 
// Here hete the Satagging table- u_incident_ import
// Then Go th Create the Payload using Build option and  then send
// once done this copy the END POINT and PAYLOAD we need to this from SN(mainsystem).

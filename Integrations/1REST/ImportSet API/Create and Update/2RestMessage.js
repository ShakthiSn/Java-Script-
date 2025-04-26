/*
1. Go to REST Message > new > Provide Rest message name,endPOINT and Authentication is Basic
2. Give the UserName and PASSword which is external system user's > save
3. Now we get Default get method uner Rest Method need to create one more from there Called 'Create' and Proide EndPOINt
4..under HTTP request we to define Content like below,
     {
"u_short_description":"${usd}",
"u_description":"${udes}",
"u_state":"${uste}",
"u_caller":"${ucall}",
"u_contract":"${ucon}",
"u_incident_id":"${uid}"
}


5. if you want test this Click Auto generate variable and provide the test details then click test.
6. Now record is Created from External system go to check external system and Stagging Table en: u_incident_import.LIST
7. So Now here we need to Trigger this Rest Message from  Business Rule.
*/
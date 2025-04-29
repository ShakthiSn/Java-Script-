var prefiz='TVK';
var timeStamp = new GlideDateTime().getNumericValue();
var random=Math.floor(Math.random()*10000);
var field=prefiz+"-"+timeStamp+"-"+random;
gs.print(field);





//method 2
(function executeRule(current, previous /*null when async*/) {

    if(!current.u_unique_id)
    {
        var gr=new GlideRecord('u_unique_id_counter'); // create table for counting purpose
        if(gr.get('name','test')) //create one samlpe record like test
        {
            gr.u_last_number++;
            gr.update();
    
            var pad=gr.u_last_number.toString().padStart(7,'0');
            current.u_unique_id="TVK"+pad;
            
        }
    }
        
    
    })(current, previous);




    //background script
    var gr = new GlideRecord('u_unique_id_counter'); // create table for counting purpose
if (gr.get('name', 'test')) //create one samlpe record like test
{
    gr.u_last_number++;
    gr.update();

    var pad = gr.u_last_number.toString().padStart(7, '0');
     var u_unique_id = "TVK" + pad;
	 gs.print(u_unique_id);

}

//*** Script: TVK0000004


$(document).ready(function(){
$.ajax({
		url: "https://api.spacexdata.com/v3/launches?limit=100",
        context: document.body,
        success: function(data){
           //alert(data.length);
		   
		    var divCol  = "<div class='col-sm-6 col-md-6 col-lg-4'>";
        var divWell = "<div class='well'>";
        var divClose= "</div>";
		
		
		   data.forEach(function(obj, index) {
		  // alert(obj.mission_name);

            var title     = "<h5>"      + obj.mission_name    + "</h5>";
          //  var linkStart = "<a href='" + obj.filePath + "' target='_blank'>";
            var image     = "<img data-toggle='tooltip' data-placement='left' title='Click to open data' src='" + obj.links.mission_patch_small + "' height='40%' width='70%'/>";
			var launch_year="<h6>"    +"<label>launch year:</label>"  + obj.launch_year    + "</h6>";
			var launch_success="<h6>"    +"<label>Successfully Launch:</label>"  + obj.launch_success    + "</h6>";
			var land_success="<h6>"    +"<label>Successfully Land:</label>"  + obj.rocket.first_stage.cores[0]['land_success']    + "</h6>";
			
			//alert(obj.rocket.first_stage.cores[0]['land_success']);
			
          //  var linkEnd   = "</a>";

            var div = divCol    +
                        divWell     +
						image       +
                            title       +
							launch_year +
							launch_success+
							land_success+
                            /*linkStart       +                            
                            linkEnd +*/
                        divClose +
                      divClose;

            $('.data').append(div); // insert the div you've just created

        })
		
		
        }});
		
		

		
});

function reply_click(clicked_id)
  {
	  $(".data").empty();
     $.ajax({
		url: "https://api.spacexdata.com/v3/launches?limit=100&launch_year="+clicked_id,
        context: document.body,
        success: function(data){
           //alert(data.length);
		   
		 var divCol  = "<div class='col-sm-4 col-md-4'>";
        var divWell = "<div class='well'>";
        var divClose= "</div>";
		
		
		   data.forEach(function(obj, index) {
		  // alert(obj.mission_name);

            var title     = "<h5>"      + obj.mission_name    + "</h5>";
          //  var linkStart = "<a href='" + obj.filePath + "' target='_blank'>";
            var image     = "<img data-toggle='tooltip' data-placement='left' title='Click to open data' src='" + obj.links.mission_patch_small + "' height='40%' width='70%'/>";
			var launch_year="<h6>"    +"<label>launch year:</label>"  + obj.launch_year    + "</h6>";
			var launch_success="<h6>"    +"<label>Successfully Launch:</label>"  + obj.launch_success    + "</h6>";
			var land_success="<h6>"    +"<label>Successfully Land:</label>"  + obj.rocket.first_stage.cores[0]['land_success']    + "</h6>";
			
			//alert(obj.rocket.first_stage.cores[0]['land_success']);
			
          //  var linkEnd   = "</a>";

            var div = divCol    +
                        divWell     +
						image       +
                            title       +
							launch_year +
							launch_success+
							land_success+
                            /*linkStart       +                            
                            linkEnd +*/
                        divClose +
                      divClose;

            $('.data').append(div); // insert the div you've just created

        })
		
		
        }});
  }
  function reply_click_1(clicked_id)
  {
	  $(".data").empty();
     $.ajax({
		url: "https://api.spacexdata.com/v3/launches?limit=100&launch_success="+clicked_id,
        context: document.body,
        success: function(data){
           //alert(data.length);
		   
		 var divCol  = "<div class='col-sm-4 col-md-4'>";
        var divWell = "<div class='well'>";
        var divClose= "</div>";
		
		
		   data.forEach(function(obj, index) {
		  // alert(obj.mission_name);

            var title     = "<h5>"      + obj.mission_name    + "</h5>";
          //  var linkStart = "<a href='" + obj.filePath + "' target='_blank'>";
            var image     = "<img data-toggle='tooltip' data-placement='left' title='Click to open data' src='" + obj.links.mission_patch_small + "' height='40%' width='70%'/>";
			var launch_year="<h6>"    +"<label>launch year:</label>"  + obj.launch_year    + "</h6>";
			var launch_success="<h6>"    +"<label>Successfully Launch:</label>"  + obj.launch_success    + "</h6>";
			var land_success="<h6>"    +"<label>Successfully Land:</label>"  + obj.rocket.first_stage.cores[0]['land_success']    + "</h6>";
			
			//alert(obj.rocket.first_stage.cores[0]['land_success']);
			
          //  var linkEnd   = "</a>";

            var div = divCol    +
                        divWell     +
						image       +
                            title       +
							launch_year +
							launch_success+
							land_success+
                            /*linkStart       +                            
                            linkEnd +*/
                        divClose +
                      divClose;

            $('.data').append(div); // insert the div you've just created

        })
		
		
        }});
  }
  function reply_click_2(clicked_id)
  {
	  $(".data").empty();
     $.ajax({
		url: "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success="+clicked_id,
        context: document.body,
        success: function(data){
           //alert(data.length);
		   
		 var divCol  = "<div class='col-sm-4 col-md-4'>";
        var divWell = "<div class='well'>";
        var divClose= "</div>";
		
		
		   data.forEach(function(obj, index) {
		  // alert(obj.mission_name);

            var title     = "<h5>"      + obj.mission_name    + "</h5>";
          //  var linkStart = "<a href='" + obj.filePath + "' target='_blank'>";
            var image     = "<img data-toggle='tooltip' data-placement='left' title='Click to open data' src='" + obj.links.mission_patch_small + "' height='40%' width='70%'/>";
			var launch_year="<h6>"    +"<label>launch year:</label>"  + obj.launch_year    + "</h6>";
			var launch_success="<h6>"    +"<label>Successfully Launch:</label>"  + obj.launch_success    + "</h6>";
			var land_success="<h6>"    +"<label>Successfully Land:</label>"  + obj.rocket.first_stage.cores[0]['land_success']    + "</h6>";
			
			//alert(obj.rocket.first_stage.cores[0]['land_success']);
			
          //  var linkEnd   = "</a>";

            var div = divCol    +
                        divWell     +
						image       +
                            title       +
							launch_year +
							launch_success+
							land_success+
                            /*linkStart       +                            
                            linkEnd +*/
                        divClose +
                      divClose;

            $('.data').append(div); // insert the div you've just created

        })
		
		
        }});
  }
function dropDownChange()
{
    var type = document.getElementById("types") //get value stored in option tag
    var level = document.getElementById("levels")
    var year = document.getElementById("years")
    
    if(type.value == "Select" || level.value == "Select" || year.value == "Select")
    {
        console.log("Not all drop down selected")
        return
    }
    

    var filter = //create a json data
    {
        type : type.value,
        level : level.value,
        year : year.value
    }

    fetch //send 
    (
        "/dropdown", //the route which the user inputs are sent to and processed
        {method:"POST", 
        headers:{"Accept":"application/json", "Content-Type":"application/json"}, //the type of data being sent, so the flask application knows
        body: JSON.stringify(filter)} //convert filter to correct data format
    )
    .then(response => response.json()) //convert response into json
    .then 
    ((
        data => //extract json data
        {
            var options =  '<option disabled="" selected="" hidden="">Select</option>' //update innerhtml of coursed dropdown
            
            for(course of data.courseList )
            {
                options += '<option value='+course.id+">"+course.course_name+'</option>';
            }
            courses.innerHTML = options
        }
        
    ))

}

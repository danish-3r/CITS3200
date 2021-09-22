

function dropDownChange()
{
    var locatoin = document.getElementById("locations") //get value stored in option tag
    var level = document.getElementById("levels")
    var year = document.getElementById("years")
    
    var filter = //create a json data
    {
        location : locatoin.value,
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
                options += '<option id='+course.id+" value='"+course.course_name+"'>"+course.course_name+'</option>';
            }
            courses.innerHTML = options
        }
        
    ))

}

function courseSelected()
{
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

        }
        
    ))
}


/* function dynamicTemplate()
{
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

        }
        
    ))
} */
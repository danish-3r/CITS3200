function unitsGivenCourseID(courseID)
{
    // courseID refers to the ID column of the Course table
    var filtercourseid = //create a json data
    {
        courseid : courseID
    }

    fetch //send 
    (
        "/unitsGivenCourseID", //the route which process CourseID and returns a list of units
        {method:"POST", 
        headers:{"Accept":"application/json", "Content-Type":"application/json"}, //the type of data being sent, so the flask application knows
        body: JSON.stringify(filtercourseid)} //convert filter to correct data format
    )
    .then(response => response.json()) //convert response into json
    .then 
    ((
        data => //extract json data
        {
            console.log( data )
            //you have the list of units data here, update front end here

        }
        
    ))

}


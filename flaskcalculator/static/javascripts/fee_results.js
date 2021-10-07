

function updateFeeResults()
{
    var course = document.getElementById("courses");

    var filtercourseid = //create a json data
    {
        courseid : course.value,
    }


    fetch //send 
    (
        "/feeresults", //the route which the user inputs are sent to and processed
        {method:"POST", 
        headers:{"Accept":"application/json", "Content-Type":"application/json"}, //the type of data being sent, so the flask application knows
        body: JSON.stringify(filtercourseid)} //convert filter to correct data format
    )
    .then(response => response.json()) //convert response into json
    .then 
    ((
        data => //extract json data
        {
            document.getElementById("resultCourse").textContent=data.course_name;
            document.getElementById("resultYear").textContent=data.course_year;
            
            var avgAnnualFee = data.course_fee / data.duration
            avgAnnualFee = parseInt(avgAnnualFee)
            
            document.getElementById("ANF").textContent=avgAnnualFee;
            document.getElementById("TFR").textContent=data.course_fee;
        }
        
    ))
}

function blankFeeResults()
{
    document.getElementById("resultCourse").textContent="______";
    document.getElementById("resultYear").textContent="______";
    document.getElementById("ANF").textContent="";
    document.getElementById("TFR").textContent="";
}
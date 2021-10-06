

function dropDownChange()
{
    var type = document.getElementById("locations") //get value stored in option tag
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
            var id = 1;
            console.log(data.courseList[0]);
            
            for(course of data.courseList )
            {
                options += '<option value='+course.id+">"+course.course_name+'</option>';
            }
            courses.innerHTML = options
        }
        
    ))

}


function name_change()
{
    var course_name = document.getElementById("course_name")
    var name_result = ""
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
            var id = 1;
            name_result = data.courseList[0];
            course_name.innerHTML = name_result;
            price_change(name_result);

            for(course of data.courseList )
            {
                options += '<option id='+String(id)+" value='"+String(course)+"'>"+course+'</option>';
                id++
            }
        }
    ))

}
function year_change()
{
    var year = document.getElementById("years")

    var year_result = document.getElementById("course_year")
    year_result.innerHTML = year.value;


}

function price_change(name_result)
{

    var CCP = document.getElementById("CCP");
    var ACP = document.getElementById("ACP");
    var ANF = document.getElementById("ANF");
    var TFR = document.getElementById("TFR");

    switch(name_result)
    {
        case "Master of Education - Thesis & Coursework":
            CCP.innerHTML = "144";
            ACP.innerHTML = "48";
            ANF.innerHTML = "$8,747";
            TFR.innerHTML = "$3,950-$14,500";
            break;

        case "Bachelor of Science":
            CCP.innerHTML = "144";
            ACP.innerHTML = "48";
            ANF.innerHTML = "$6,294";
            TFR.innerHTML = "$3,451-$10,745";


    }
}



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
// NEW HELP BUTTON
var mybtnHelp = document.getElementById('mybtnHelp');
// var helpTitle = document.getElementById('helpTitle');
var helpBody = document.getElementById('helpBody');
// var heading = document.getElementById('heading');
var description = document.getElementById('description');

var displayToggle = 1;
mybtnHelp.onclick = function(){
    displayToggle++;
    if (displayToggle %2 == 0) {
        showHelp();
    } else {
        hideHelp();
    }
}

function showHelp(){
    var bodyHeight = 0;
    var id = setInterval(frame, 1);
    function frame() {
        if (bodyHeight == 160){
            clearInterval(id);
            description.style.display = 'block';
            description.style.animation = 'fadein-bottom 0.01s';
        } else {
            bodyHeight += 5;
            helpBody.style.height = bodyHeight + 'px';
        }
    }        
}

function hideHelp(){
    alert ('hiding help!')
}

// function showHelp(){
//     // var titleWidth = 0;
//     var bodyHeight = 0;
//     var id = setInterval(frame, 1);
//     function frame() {
//         // if (titleWidth == 270) {
//         //     clearInterval(id);
//         //     heading.style.display = 'block';
//         //     heading.style.animation = 'fadein-right 0.3s'; 
//             var id2 = setInterval(frame2, 1);
//             function frame2 () {
//                 if (bodyHeight == 270){
//                     clearInterval(id2);
//                     description.style.display = 'block';
//                     description.style.animation = 'fadein-bottom 0.3s';
//                 } else {
//                     bodyHeight += 5;
//                     helpBody.style.height = bodyHeight + 'px';
//                 }
//             }
//         } else {
//             bodyHeight += 5;
//             // helpTitle.style.width = titleWidth + 'px';
//         }
//     }
// }

// function hideHelp() {
//     description.style.animation = 'fadeout-bottom 0.6s';
//     // heading.style.animation = 'fadeout-right 0.6s';
//     var bodyHeight = 270;
//     // var titleWidth = 270;
//     var id2 = setInterval(frame2, 1);
//     function frame2() {
//         if (bodyHeight == 0){
//             clearInterval (id2);
//             var id1 = setInterval(frame1,1);
//             // function frame1(){
//             //     if (titleWidth ==0) {
//             //         clearInterval(id1);
//             //     } else {
//             //         heading.style.display = 'none';
//             //         titleWidth -= 5;
//             //         helpTitle.style.width = titleWidth + 'px';
//             //     }
//             // }
//         } else {
//             description.style.display = 'none';
//             bodyHeight -= 5;
//             helpBody.style.height = bodyHeight + 'px'; 
//         }
//     }
// }
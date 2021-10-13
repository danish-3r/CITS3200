//the way i iterate each point in the table may not be the best (i should probably find a way to iterate the table)
//but it works well for this situation
//each list item id has a number after it
//so when i call the function i give it that number since using 'self' was out of the scope


//enters dropdown mode
function changeto_drop(list_number)
{   
    
    let unit_num = "+unit".concat(list_number);
    let drop_num = "planner_drop".concat(list_number);


    selectable_units(list_number);

    document.getElementById(unit_num).style.visibility = "hidden"; 
    document.getElementById(drop_num).style.visibility = "visible"; 

}

//exits dropdown mode
function changeto_add(list_number)
{

    let unit_num = "+unit".concat(list_number);
    let drop_num = "planner_drop".concat(list_number);

    document.getElementById(unit_num).style.visibility = "visible"; 
    document.getElementById(drop_num).style.visibility = "hidden"; 

    document.getElementById(unit_num).style.color = "blue"; 
    document.getElementById(unit_num).innerHTML = "+ add a unit"; 


    var course_types = document.getElementsByClassName("course_type");
    course_types[list_number-1].innerHTML = "-";

    var fees = document.getElementsByClassName("fee");
    fees[list_number-1].innerHTML = "$".concat("0");

}

//main function that sets up the planner
function major_change()
{
    //changes title of planner to the correct major
    major_selector = document.getElementById("major_select");
    document.getElementById("major_name").innerHTML = "MAJOR: ".concat(major_selector.value);

    //this should be changed to read the db and get all compulsory units for the major in a list
    var compusory_units = []
    if (major_selector.value == "Computer Science")
    {
        compusory_units = ["Introduction to Computer Science", "Relational Database Management", "How to grow a beard"]
    }
    if (major_selector.value == "Data Science")
    {
        compusory_units = ["Introduction to Data Science", "Relational Database Management", "Free robux 2021 working may"]

    }

    var course_types = document.getElementsByClassName("course_type");

    var fees = document.getElementsByClassName("fee");


    //since we dont get the start times of the compulsory units, 
    //it may be best to just have them 1st then have the electives next
    //so this loop will go through the compulsory units and enter them into the planner
    for(let i = 1; i < compusory_units.length+1; i++)
    {
        let unit_num = "+unit".concat(i);
        console.log(i)
        document.getElementById(unit_num).innerHTML = compusory_units[i-1]; 
        document.getElementById(unit_num).style.color = 'black'; 

        course_types[i-1].innerHTML = "Compulsory"
         //There should be a funciton here that gets the unit price efstl and credit points from the db
        fees[i-1].innerHTML = "$".concat("1800");  


    }


}


//called when an elective unit has been selected
function cp_change_prices(list_number)
{
 
    let unit_num = "+unit".concat(list_number);
    let select_num = "unit_select".concat(list_number);
    let drop_num = "planner_drop".concat(list_number);

    var drop_val = document.getElementById(select_num);

    document.getElementById(unit_num).innerHTML = drop_val.value; 
    document.getElementById(unit_num).style.color = 'black'; 


    document.getElementById(unit_num).style.visibility = "visible"; 
    document.getElementById(drop_num).style.visibility = "hidden"; 

    
    //There should be a funciton here that gets the unit price efstl and credit points from the db
    var fees = document.getElementsByClassName("fee");
    fees[list_number-1].innerHTML = "$".concat("1800");

    var price_total = 0;
    for(let i = 0; i < fees.length-1; i++)
    {
        price_total += parseInt(fees[i].innerHTML.replace('$', '').replace(',',''));
        
    }

    document.getElementById("total_price").innerHTML = "$".concat(price_total); 

    var course_types = document.getElementsByClassName("course_type");
    course_types[list_number-1].innerHTML = "Elective";




}

function selectable_units(list_number)
{


        
    
    var unit_dropdwons = document.getElementsByClassName('unit_select');

    //would like to link to db for a list of available units here please
    var available_units = ['unit21', 'unit12', 'unit412', 'unit123'];

    //clears dropdown list so we dont get duplicates
    while (unit_dropdwons[list_number-1].firstChild)
    {
        unit_dropdwons[list_number-1].removeChild(unit_dropdwons[list_number-1].firstChild);
    }
    
    for(var i = 0; i < available_units.length-1; i++)
    {

        var option = document.createElement("option");
        option.value = available_units[i];
        option.text = available_units[i];
        unit_dropdwons[list_number-1].appendChild(option)

    }
}
//the way i iterate each point in the table may not be the best (i should probably find a way to iterate the table)
//but it works well for this situation
//each list item id has a number after it
//so when i call the function i give it that number since using 'self' was out of the scope


//enters dropdown mode


function update_degree_names()
{
    degree_type = document.getElementsByClassName('dropdown_1')[0].value

    let available_majors = [];

    if(degree_type == "Undergraduate")
    {
        available_majors.splice(0, available_majors.length);

        available_majors = ["Select", "Computer Science", "Data Science"];

    }
    else{
        available_majors.splice(0, available_majors.length);

        available_majors = ["Select", "Other degree types not yet available"];
    }

    var degree_names = document.getElementsByClassName('major_select');

    while (degree_names[0].firstChild)
    {
        degree_names[0].removeChild(degree_names[0].firstChild);
    }

    for(var i = 0; i < available_majors.length; i++)
    {

        var option = document.createElement("option");
        option.value = available_majors[i];
        option.text = available_majors[i];
        degree_names[0].appendChild(option)

    }
}
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

    var credit_points = document.getElementsByClassName("unit_credit")
    credit_points[list_number-1].innerHTML = "0";

    var unit_eftsl = document.getElementsByClassName("unit_eftsl")
    unit_eftsl[list_number-1].innerHTML = "0";


}

//main function that sets up the planner
function major_change()
{
    //changes title of planner to the correct major
    major_selector = document.getElementById("major_select");
    document.getElementById("major_name").innerHTML = "MAJOR: ".concat(major_selector.value);




    for(let i = 1; i < 25; i++)
    {
        changeto_add(i);
    }


    //this should be changed to read the db and get all compulsory units for the major in a list
    var compusory_units = []
    if (major_selector.value == "Computer Science")
    {
        compusory_units = [
            "Software Engineering with Java",
            "Introduction to Cybersecurity",
            "Relational Database Management Systems",
            "Mathematics Foundations: Methods",
            "Systems Programming",
            "Data Structures and Algorithms",
            "Discrete Structures",
            "Algorithms, Agents and Artificial Intelligence",
            "Computer Networks",
            "Professional Computing",
            "Agile Web Development",
            "Graphics and Animation",
            "Knowledge Representation",
            "Secure Coding",
            "High Performance Computing"];
    }
    if (major_selector.value == "Data Science")
    {
        compusory_units = [
            "Computational Thinking with Python",
            "Relational Database Management Systems",
            "Ethics for the Digital Age: An Introduction to Moral Philosophy",
            "Statistics for Science",
            "Introduction to Data Science",
            "Statistical Learning",
            "Introduction to Bayesian Computing and Statistics",

        ]

    }

    var course_types = document.getElementsByClassName("course_type");

    var fees = document.getElementsByClassName("fee");

    var credit_points = document.getElementsByClassName("unit_credit")

    var unit_eftsl = document.getElementsByClassName("unit_eftsl")

    //since we dont get the start times of the compulsory units, 
    //it may be best to just have them 1st then have the electives next
    //so this loop will go through the compulsory units and enter them into the planner
    for(let i = 1; i < compusory_units.length+1; i++)
    {
        let unit_num = "+unit".concat(i);
        document.getElementById(unit_num).innerHTML = compusory_units[i-1]; 
        document.getElementById(unit_num).style.color = 'black'; 

        course_types[i-1].innerHTML = "Compulsory"
         //There should be a funciton here that gets the unit price efstl and credit points from the db
        fees[i-1].innerHTML = "$".concat("1000");  
        credit_points[i-1].innerHTML = "6";
        unit_eftsl[i-1].innerHTML = "0.125"

    }



    var price_total = 0;
    for(let i = 0; i < fees.length; i++)
    {
        price_total += parseInt(fees[i].innerHTML.replace('$', '').replace(',',''));
        
    }

    var credit_total = 0;
    for(let i = 0; i < fees.length; i++)
    {
        credit_total += parseInt(credit_points[i].innerHTML.replace('$', '').replace(',',''));
        
    }

    var eftsl_total = 0;
    for(let i = 0; i < fees.length; i++)
    {
        eftsl_total += parseFloat(unit_eftsl[i].innerHTML);
        
    }

    document.getElementById("total_price").innerHTML = "$".concat(price_total); 
    document.getElementById("total_credits").innerHTML = (credit_total); 
    document.getElementById("total_eftsl").innerHTML = (eftsl_total); 

    
    
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

    
    var fees = document.getElementsByClassName("fee");
    fees[list_number-1].innerHTML = "$".concat("1000");

    var credit_points = document.getElementsByClassName("unit_credit")
    credit_points[list_number-1].innerHTML = "6";

    var unit_eftsl = document.getElementsByClassName("unit_eftsl")
    unit_eftsl[list_number-1].innerHTML = "0.125";

    var course_types = document.getElementsByClassName("course_type");
    course_types[list_number-1].innerHTML = "Elective";

    var price_total = 0;
    for(let i = 0; i < fees.length; i++)
    {
        price_total += parseInt(fees[i].innerHTML.replace('$', '').replace(',',''));

    }

    var credit_total = 0;
    for(let i = 0; i < fees.length; i++)
    {
        credit_total += parseInt(credit_points[i].innerHTML.replace('$', '').replace(',',''));
    }

    var eftsl_total = 0;
    for(let i = 0; i < fees.length; i++)
    {
        eftsl_total += parseFloat(unit_eftsl[i].innerHTML);  
    }

    document.getElementById("total_price").innerHTML = "$".concat(price_total); 
    document.getElementById("total_credits").innerHTML = (credit_total); 
    document.getElementById("total_eftsl").innerHTML = (eftsl_total); 

}

function selectable_units(list_number)
{

    var unit_dropdwons = document.getElementsByClassName('unit_select');

    //would like to link to db for a list of available units here please
    var available_units = get_chosen_units();

    //clears dropdown list so we dont get duplicates
    while (unit_dropdwons[list_number-1].firstChild)
    {
        unit_dropdwons[list_number-1].removeChild(unit_dropdwons[list_number-1].firstChild);
    }
    
    for(var i = 0; i < available_units.length; i++)
    {

        var option = document.createElement("option");
        option.value = available_units[i];
        option.text = available_units[i];
        unit_dropdwons[list_number-1].appendChild(option)

    }
}

function get_price(unit_name)
{
    return "$1000"
}

function get_chosen_units()
{
    let unit_names = document.getElementsByClassName("unit_select");
    let all_units = get_units();
    
    for(let i = 0; i < unit_names.length; i++)
    {
        const ind = all_units.indexOf(unit_names[i].value);
        if(ind > -1) {all_units.splice(ind, 1);}
    }

    return all_units.sort();
}
function get_units()
{
    let all_units = [
        "Add a unit",
        "Software Engineering with Java",
        "Introduction to Cybersecurity",
        "Relational Database Management Systems",
        "Mathematics Foundations: Methods",
        "Systems Programming",
        "Data Structures and Algorithms",
        "Discrete Structures",
        "Algorithms, Agents and Artificial Intelligence",
        "Computer Networks",
        "Professional Computing",
        "Agile Web Development",
        "Graphics and Animation",
        "Knowledge Representation",
        "Secure Coding",
        "High Performance Computing",
        "Computational Thinking with Python",
        "Statistics for Science",
        "Introduction to Data Science",
        "Analysis of Experiments",
        "Analysis of Observations",
        "Data Warehousing",
        "Statistical Learning",
        "Introduction to Bayesian Computing and Statistics",
        "Plant and Animal Biology",
        "Dynamic Planet",
        "Science, Society and Data Analysis",
        "Communicating Science",
        "Coastal Processes",
        "Marine Systems",
        "Geographic Information Systems",
        "Marine Biology"];

        return all_units;

}
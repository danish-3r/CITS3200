//the way i iterate each point in the table may not be the best (i should probably find a way to iterate the table)
//but it works well for this situation
//each list item id has a number after it
//so when i call the function i give it that number since using 'self' was out of the scope

const UNDERGRADUATE_YEAR = 3;
const POSTGRADUATE_YEAR = 2;
const UNDERGRADUATE_UNIT = 24;
const POSTGRADUATE_UNIT = 16
const DEFAULT_NUM_OF_UNITS_PER_SEM = 4;
const DEFAULT_NUM_OF_SEMS_PER_YEAR = 2;

// Remove the abundant year
function remove_years()
{
    var years = document.getElementsByClassName('planner-year-row');
    var lengths = years.length;
    for (let i = 1; i <= lengths; i++) 
    {
        document.getElementById("year-" + i).remove();
    }
}


// Add new year to course planner
function add_year(year_number, num_of_units_per_sem)
{

    // Create new year element
    const year = document.createElement("tr");
    year.classList.add('planner-year-row');
    year.setAttribute("id", 'year-' + year_number);

    // Add year element to table body
    const table = document.getElementById("table-body");
    const total_row = document.getElementById("total-row");
    table.insertBefore(year, total_row);

    // Add new blue year column
    const year_column =  document.createElement("td");
    year_column.classList.add('year-column');
    year.appendChild(year_column);

    // Add year text to the blue column
    const year_text = document.createElement("h1");
    year_text.classList.add('year-text');
    const div_content = document.createTextNode("Year " + year_number);
    year_text.appendChild(div_content); 

    year_column.appendChild(year_text);


    // Add semesters to current year
    add_sems(DEFAULT_NUM_OF_SEMS_PER_YEAR, year, year_number, num_of_units_per_sem)

}

// Add new sem to current year
function add_sems(num_of_sems, year, year_number, num_of_units_per_sem)
{
    const span = document.createElement("td");
    span.setAttribute("colspan", 7);
    year.appendChild(span);

    const table = document.createElement("table");
    table.classList.add('table', 'table-borderless', 'planner-table-year');
    span.appendChild(table);

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    for (let i = 1; i <= num_of_sems; i++)
    {
        const sem = document.createElement("tr");
        tbody.append(sem);

        const sem_col = document.createElement("td");
        sem_col.classList.add('semester-column')
        sem.append(sem_col);

        const sem_div = document.createElement("div");
        sem_div.classList.add('semester-text');
        sem_col.append(sem_div);
        
        const sem_text =  document.createElement("h3");
        const text = document.createTextNode("Sem " + i);
        sem_text.appendChild(text);
        sem_div.append(sem_text);
        
        // Add units
        add_units(num_of_units_per_sem, sem, year_number, i);
    }
}

// Add new units to current semester
function add_units(num_of_units_per_sem, sem, year_number, sem_number){
    const td = document.createElement("td");
    sem.appendChild(td);

    const table = document.createElement("table");
    table.classList.add('table', 'table-striped', 'planner-table-semester');
    td.appendChild(table);

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    // The first unit id used for adding unit
    var first_unitid = (year_number - 1) * (num_of_units_per_sem * DEFAULT_NUM_OF_SEMS_PER_YEAR) + (sem_number-1) * num_of_units_per_sem + 1;
    var last_unitid = first_unitid + num_of_units_per_sem - 1;

    for (let unit_id = first_unitid; unit_id <= last_unitid; unit_id++)
    {
        const tr = document.createElement("tr");
        tbody.append(tr);
        set_up_unit_row(tr, unit_id);
    }
}

// Set up the initial value for a single row in course planner
function set_up_unit_row(tr, unit_id)
{
    // Unit part
    const td_unit = document.createElement("td");
    td_unit.setAttribute("style", "width: 45%");
    tr.appendChild(td_unit);

    const span = document.createElement("span");
    span.setAttribute("class", "+unit");
    span.setAttribute("id", "+unit" + unit_id);
    span.setAttribute("onclick", "changeto_drop" + "(" + unit_id + ")");
    span.setAttribute("style", "color:blue");

    const span_text =  document.createTextNode("+ Add a unit");
    span.appendChild(span_text);
    td_unit.appendChild(span);

    set_planner_drop(td_unit, unit_id)

    // Course type part
    const td_course_type = document.createElement("td");
    td_course_type.setAttribute("style", "width: 20%");
    td_course_type.setAttribute("class", "course_type");
    const default_course_type =  document.createTextNode("-");
    td_course_type.appendChild(default_course_type);
    tr.append(td_course_type);

    // Unit credit part
    const td_unit_credit = document.createElement("td");
    td_unit_credit.setAttribute("style", "width: 10%");
    td_unit_credit.setAttribute("class", "unit_credit");
    const default_credit =  document.createTextNode("0");
    td_unit_credit.appendChild(default_credit);
    tr.append(td_unit_credit);

    // Unit eftsl part
    const td_unit_eftsl = document.createElement("td");
    td_unit_eftsl.setAttribute("style", "width: 10%");
    td_unit_eftsl.setAttribute("class", "unit_eftsl");
    const default_eftsl =  document.createTextNode("0");
    td_unit_eftsl.appendChild(default_eftsl);
    tr.append(td_unit_eftsl);

    // Fee part
    const td_fee = document.createElement("td");
    td_fee.setAttribute("style", "width: 15%");
    td_fee.setAttribute("class", "fee");
    const default_fee =  document.createTextNode("$0");
    td_fee.appendChild(default_fee);
    tr.append(td_fee);
}

function set_planner_drop(td_unit, unit_id)
{
    const span_planner = document.createElement("span");
    span_planner.setAttribute("class", "planner_drop");
    span_planner.setAttribute("id", "planner_drop" + unit_id);
    span_planner.setAttribute("style", "visibility:hidden");
    td_unit.appendChild(span_planner);

    const span_change = document.createElement("span");
    span_change.setAttribute("onclick", "changeto_add" + "(" + unit_id + ")");
    span_change.setAttribute("style", "color:red");
    
    // Add X symbol
    const span_text =  document.createTextNode("X");
    span_change.appendChild(span_text);
    span_planner.appendChild(span_change);

    // Set up options
    const select = document.createElement("select");
    select.setAttribute("name", "Unit");
    select.setAttribute("class", "unit_select");
    select.setAttribute("id", "unit_select" + unit_id);
    select.setAttribute("onchange", "cp_change_prices" + "(" + unit_id + ")");
    span_planner.appendChild(select);
    add_options(select);
}

// set up option for unit selection
function add_options(select)
{
    var available_units = get_chosen_units();

    for(var i = 0; i < available_units.length; i++)
    {
        var option = document.createElement("option");
        option.value = available_units[i];
        option.text = available_units[i];
        select.appendChild(option);
    }
}

// ----------------------------------

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

    try {
        // document.getElementById(unit_num).style.visibility = "visible"; 
        document.getElementById(drop_num).style.visibility = "hidden"; 

        document.getElementById(unit_num).style.color = "blue"; 
        document.getElementById(unit_num).innerHTML = "+ Add a unit"; 


        var course_types = document.getElementsByClassName("course_type");
        course_types[list_number-1].innerHTML = "-";

        var fees = document.getElementsByClassName("fee");
        fees[list_number-1].innerHTML = "$".concat("0");

        var credit_points = document.getElementsByClassName("unit_credit")
        credit_points[list_number-1].innerHTML = "0";

        var unit_eftsl = document.getElementsByClassName("unit_eftsl")
        unit_eftsl[list_number-1].innerHTML = "0";
    }
    finally{}
}


// --------------------------------

//enters dropdown mode
function update_degree_names()
{
    degree_type = document.getElementsByClassName('dropdown_1')[0].value;

    let available_majors = [];

    years = document.getElementsByClassName('planner-year-row');

    if(degree_type == "Undergraduate")
    {

        available_majors.splice(0, available_majors.length);

        available_majors = ["Select", "Computer Science", "Data Science"];

    }
    else{

        if(degree_type == "Postgraduate")
        {
            available_majors.splice(0, available_majors.length);

            available_majors = ["Select", "Master of Education - Thesis & Coursework", "Master of Information Technology - Coursework"];

        }
        else{
            if(degree_type == "Higher Degree by Research")
            {
                available_majors.splice(0, available_majors.length);

                available_majors = ["Select", "Master of Arts - Research"];

            }
            else{
                available_majors.splice(0, available_majors.length);

                available_majors = ["Select", "Other degree types not yet available"];
            }
        }
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

//main function that sets up the planner
function major_change()
{
    //changes title of planner to the correct major
    major_selector = document.getElementById("major_select");
    document.getElementById("major_name").innerHTML = "AREA OF STUDY: ".concat(major_selector.value);

    degree_type = document.getElementsByClassName('dropdown_1')[0].value;

    //this should be changed to read the db and get all compulsory units for the major in a list
    var compulsory_units = get_compulsory_units(major_selector.value);

    var course_types = document.getElementsByClassName("course_type");

    var fees = document.getElementsByClassName("fee");

    var credit_points = document.getElementsByClassName("unit_credit")

    var unit_eftsl = document.getElementsByClassName("unit_eftsl")

    //since we dont get the start times of the compulsory units, 
    //it may be best to just have them 1st then have the electives next
    //so this loop will go through the compulsory units and enter them into the planner
    for(let i = 1; i < compulsory_units.length+1; i++)
    {
        let unit_num = "+unit".concat(i);
        document.getElementById(unit_num).innerHTML = compulsory_units[i-1]; 
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
    check_eftsl()


}

function choosing_num_of_units()
{
    // Clear up the previous major
    major_selector = document.getElementById("major_select");
    major_selector.value = "Select";
    
    degree_type = document.getElementsByClassName('dropdown_1')[0].value;
    study_type = document.getElementById("study-type");
    if (study_type.value == "Part time") {
        document.getElementById("num-of-units").style.visibility = "visible";
    }

    // FULL TIME CASE
    else if (study_type.value = "Full time") {
        document.getElementById("num-of-units").style.visibility = "hidden";

        if(degree_type == "Undergraduate")
        {
            remove_years();
            for (let year = 1; year <= UNDERGRADUATE_YEAR; year++)
            {
                add_year(year, DEFAULT_NUM_OF_UNITS_PER_SEM);
            }
        }
        else{
            remove_years();
            for (let year = 1; year <= POSTGRADUATE_YEAR; year++)
            {
                add_year(year, DEFAULT_NUM_OF_UNITS_PER_SEM);
            }
        }
    } 
}

function set_up_part_time()
{
    degree_type = document.getElementsByClassName('dropdown_1')[0].value;
    num_of_units_per_sem = parseInt(document.getElementById("num-of-units").value);
    
    if(degree_type == "Undergraduate")
    {
        remove_years();

        sems = Math.ceil(UNDERGRADUATE_UNIT / num_of_units_per_sem);
        years = Math.ceil(sems / 2);

        for (let year = 1; year <= years; year++)
        {
            add_year(year, num_of_units_per_sem);
        }
    }
    else{
        remove_years();

        sems = Math.ceil(POSTGRADUATE_UNIT / num_of_units_per_sem);
        years = Math.ceil(sems / 2);
        for (let year = 1; year <= years; year++)
        {
            add_year(year, num_of_units_per_sem);
        }
    }
}


// -------------------------------------------

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
    
    var area_of_study = document.getElementById("major_select").value;

    var compulsory_units = get_compulsory_units(area_of_study);
    if ( compulsory_units.includes(drop_val.value) ){
        course_types[list_number-1].innerHTML = "Compulsory";
    }
    else 
    {
        course_types[list_number-1].innerHTML = "Elective";
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

    check_eftsl()
}


function check_eftsl()
{
    if(document.getElementsByClassName('dropdown_1')[0].value == "Undergraduate")
    {
        required_efstl = 3;
    }
    else
    {
        required_efstl = 2;

    }

    let efstl_diff = required_efstl - parseFloat(document.getElementById("total_eftsl").innerHTML)
    let units_needed = efstl_diff/0.125

    document.getElementById("units_remamining").innerHTML = units_needed;
    

    if(efstl_diff != 0) 
    {
        document.getElementById("error_message").style.display = "block";
    }
    else
    {
        document.getElementById("error_message").style.display = "none";

    }
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
        "Ethics for the Digital Age: An Introduction to Moral Philosophy",
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
        "Marine Biology",
        "Global Climate Change and Biodiversity",
        "Coastal Conservation and Management",
        "Oceanography",
        "Environmental Dynamics",
        "Field Techniques in Marine Science",
        "Human Biology I: Becoming Human",
        "Human Biology II: Being Human",
        "The Musculoskeletal System and Movement",
        "Applied Anatomy and Athletic Performance",
        "Physical Fitness and Health",
        "Mathematics Fundamentals",
        "Motor Learning and Control",
        "Biomechanics in Sport and Exercise",
        "Exercise Physiology",
        "Foundations of Work Integrated Learning",
        "Biomechanical Principles",
        "Sport Physiology",
        "Professional Practice Part 2",
        "Financial Accounting",
        "Introduction to Finance",
        "Management Accounting",
        "Corporate Accounting",
        "Taxation",
        "Contemporary Managerial Accounting",
        "Performance Measurement and Evaluation",
        "Financial Statement Analysis",
        "Financial Accounting: Theory and Practice",
        "Auditing",
        "Strategic Management Accounting",
        "Introduction to Marketing",
        "Consumer Behaviour",
        "Marketing Research",
        "Advertising and Branding",
        "Small Business Management",
        "Professional Selling",
        "Strategic Marketing",
        "Entrepreneurship",
        "New Product Development",
        "Digital Marketing",
        "Marketing Analytics",
        "Experiential Marketing",
        "Consumers Around the World",
        "Approaches to Research",
        "Master's Thesis (full-time)",
        "Master's Thesis (part-time)",
        "Contemporary Reforms in Education",
        "Advance Course in Rasch Measurement Theory",
        "Integrating Pedagogy and Technology",
        "Human Resource Development in Education",
        "Leadership for Learning",
        "International and Comparative Education",
        "Approaches to Research",
        "Quantitative Inquiry",
        "Qualitative Inquiry",
        "Assessment and Measurement",
        "Measurement and Evaluation",
        "Introduction to Classical and Rasch Measurement Theories", 
        "Childhood and Adolescent Developmental Psychopathology",   
        "Globalising Education Policy",
        "Education Studies",
        "Education Studies",
        "Improving Learning and Teaching in the Curriculum"];

        return all_units;

}

// Return list of compulsory units depend on area of study
function get_compulsory_units(area_of_study)
{
    var compulsory_units = []
    if (area_of_study == "Computer Science")
    {
        compulsory_units = [
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
            "High Performance Computing"
        ];
    }
    if (area_of_study == "Data Science")
    {
        compulsory_units = [
            "Computational Thinking with Python",
            "Relational Database Management Systems",
            "Ethics for the Digital Age: An Introduction to Moral Philosophy",
            "Statistics for Science",
            "Introduction to Data Science",
            "Statistical Learning",
            "Introduction to Bayesian Computing and Statistics",

        ]

    }
    if (area_of_study == "Master of Education - Thesis & Coursework")
    {
        compulsory_units = [
            "Master's Dissertation",
            "Approaches to Research",
            "International and Comparative Education",
            "Quantitative Inquiry",
            "Qualitative Inquiry",
            "Measurement and Evaluation",
            "Childhood and Adolescent Developmental Psychopathology",
            "Education Studies"
        ];
    }
    if (area_of_study == "Master of Arts - Research")
    {
        compulsory_units = [
            "Art Theory",
            "Breaking Art",
            "Contemporary Art and Tradition in China",
            "(Inter)national History of Art Study Tour",
            "Prints from Dürer to Toulouse-Lautrec",
            "Manet and the French Avant-Garde",
            "Michelangelo",
            "Art and Games: from Dada to Data",
            "Visual Culture and Art in America: 1900–2000"
        ];
    }

    if (area_of_study == "Master of Information Technology - Coursework")
    {
        compulsory_units = [
            "Software Engineering with Java",
            "Introduction to Cybersecurity",
            "Computational Thinking with Python",
            "Relational Database Management Systems",     
            "Software Requirements and Design",
            "Open Source Tools and Scripting",
            "Professional Computing",
            "Software Testing and Quality Assurance",     
            "Cloud Computing",
            "Agile Web Development",
            "The Internet of Things",
            "Project Management and Engineering Practice"
        ];
    }

    return compulsory_units;

}
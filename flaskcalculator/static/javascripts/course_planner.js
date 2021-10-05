function changeto_drop(list_number)
{   
  
    let unit_num = "+unit".concat(list_number);
    let drop_num = "planner_drop".concat(list_number);

    document.getElementById(unit_num).style.visibility = "hidden"; 
    document.getElementById(drop_num).style.visibility = "visible"; 

}
function changeto_add(list_number)
{

    let unit_num = "+unit".concat(list_number);
    let drop_num = "planner_drop".concat(list_number);

    document.getElementById(unit_num).style.visibility = "visible"; 
    document.getElementById(drop_num).style.visibility = "hidden"; 

}
function major_change()
{
    major_selector = document.getElementById("major_select");
    document.getElementById("major_name").innerHTML = "MAJOR: ".concat(major_selector.value);
}

function cp_change_prices(list_number)
{
 
    let unit_num = "+unit".concat(list_number);
    let select_num = "unit_select".concat(list_number);
    let drop_num = "planner_drop".concat(list_number);

    var drop_val = document.getElementById(select_num);

    document.getElementById(unit_num).innerHTML = drop_val.value; 

    document.getElementById(unit_num).style.visibility = "visible"; 
    document.getElementById(drop_num).style.visibility = "hidden"; 

    

}
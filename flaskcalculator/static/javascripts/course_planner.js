function changeto_drop(List_number)
{
    alert(List_number)
    
  
    let unit_num = "+unit".concat(List_number);
    let drop_num = "planner_drop".concat(List_number);

    document.getElementById(unit_num).style.visibility = "hidden"; 
    document.getElementById(drop_num).style.visibility = "visible"; 

}
function changeto_add(List_number)
{
    alert(List_number)

    let unit_num = "+unit".concat(List_number);
    let drop_num = "planner_drop".concat(List_number);

    document.getElementById(unit_num).style.visibility = "visible"; 
    document.getElementById(drop_num).style.visibility = "hidden"; 

}
function major_change()
{
    major_selector = document.getElementById("major_select")
    document.getElementById("major_name").innerHTML = "MAJOR: ".concat(major_selector.value);
}
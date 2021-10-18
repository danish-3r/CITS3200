
//prints out the course planner section, can be saved as a pdf too. 
function printDiv() {
    var printContents = document.getElementById('planner-body').innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}



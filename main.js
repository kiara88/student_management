var listStudents = 
{
    20: {name: "Manish", school: "Cambridge"},
    21: {name: "Superman", school: "Cambridge"},
}

function find(){
    var idNumber= document.getElementById("find_child_number").value;
    var student = listStudents[idNumber];
    if(student != undefined) {
        var s = "Name: " + student.name + " School: " + student.school;
        document.getElementById("childDetails").innerHTML = 
        "Name: " + student.name + " School: " + student.school;

    } else {
        document.getElementById("childDetails").innerHTML = "Student not found!";
    }
}

function add(){
    var childName= document.getElementById("enter_child_name").value;
    var childSchool= document.getElementById("enter_child_school").value;
    var childId= document.getElementById("enter_child_id").value;

    listStudents[childId] = {
        name: childName,
        school: childSchool
    }
}
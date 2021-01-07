
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = today.toLocaleString('default', { month: 'long' });
var yyyy = today.getFullYear();
today = dd + ' ' + mm + ' ' + yyyy;
document.getElementById("dateSetUp").innerHTML = today;

var d = new Date();
var n = d.toLocaleTimeString();
document.getElementById("timeSetUp").innerHTML = n;

function showFormPart() {
    document.getElementById("formPart").style.display = "block";
    document.getElementById("home").style.display = "none";
}
var taskObj = {
    task: "",
    detail: "",
    date: ""
};
//var tasks = getItemFromLocalStorage();
function saveDataInLocalStorage() {
    taskObj = {};
    var txtTaskName = document.getElementById("txtTaskName");
    taskObj.task = txtTaskName.value;
    var txtDetails = document.getElementById("txtDetails");
    taskObj.detail = txtDetails.value;
    var txtDate = document.getElementById("txtDate");
    taskObj.date = txtDate.value;
    var tasks = getItemFromLocalStorage();
    tasks.push(taskObj);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function getItemFromLocalStorage() {
    var tasks = localStorage.getItem("tasks");
    if(tasks == null || undefined)
       return [];
    return JSON.parse(tasks);
}
function showHideText() {
    saveDataInLocalStorage();
    var tasks = getItemFromLocalStorage();
    var global = "";
    if (tasks !== null && tasks.length > 0) {
        for (var i = 0; i < tasks.length; i++) {
            global += '<ul id="texts">' +
                '<li style="font-weight: bold;color:black;font-family:Helvetica Neue">' + tasks[i].task +
                '<span class="close" onclick="closeBtn(' + i + ')">&times;</span>' +
                '</li>' +
                '<li style="color:gray;font-family:Helvetica Neue;margin-top:5px;">' + tasks[i].detail + '</li>' +
                '<li style="color:red;font-family:Helvetica Neue;margin-top:5px;">' + tasks[i].date + '</li>' +
                '</ul>';
        }
    }
    console.log(global, tasks);
    document.getElementById("texts").innerHTML = global;
    document.getElementById("text").style.display = "block";
    document.getElementById("formPart").style.display = "none";
    document.getElementById("home").style.display = "block";
}
function displayTasks(tasks){
    if (tasks !== null  && tasks.length > 0) {
        var global = "";
        for (var i = 0; i < tasks.length; i++) {
            global += '<ul id="texts">' +
                '<li style="font-weight: bold;color:black;font-family:Helvetica Neue">' + tasks[i].task +
                '<span class="close" onclick="closeBtn(' + i + ')">&times;</span>' +
                '</li>' +
                '<li style="color:gray;font-family:Helvetica Neue;margin-top:5px;">' + tasks[i].detail + '</li>' +
                '<li style="color:red;font-family:Helvetica Neue;margin-top:5px;">' + tasks[i].date + '</li>' +
                '</ul>';
        }
    }
    if(tasks.length == 0){
        global = "<h3 class='header'>"+'Nothing here, create some tasks'+'</h3>';
    }
    document.getElementById("texts").innerHTML = global;
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function closeBtn(index) {
    var tasks = getItemFromLocalStorage();
    tasks.splice(index, 1);

    console.log(tasks);
    displayTasks(tasks);
}






const addTask = document.getElementById("add");


function createTask(a,b){
    var task = { 'title':a, 'desc':b};
    if(localStorage.getItem('tasks') == null)
    {
        let obj = { "task":[]};
        obj["task"].push(task)
        localStorage.setItem('tasks',JSON.stringify(obj));
    }
    else
    {
        let tasks = localStorage.getItem('tasks');
        let obj = JSON.parse(tasks);
        obj["task"].push(task);
        localStorage.setItem("tasks",JSON.stringify(obj));
    }
}


function displayTask()
{
    let toDoList = JSON.parse(localStorage.getItem("tasks"));

    const pending = document.querySelector(".pending");

    if(toDoList == null || toDoList["task"].length==0)
    {
        pending.innerHTML = '<p class="note">No any task is available. Try to add new task.</p>';
    }
    else
    {
        for( let i = 0 ; i < toDoList["task"].length; i++)
        {
           let newTask = toDoList["task"][i];
           pending.innerHTML += '<div class="pending-list">'
           +'<div class="pen-title">'+toDoList["task"][i].title+'</div>'+
           '<div class="pen-desc">'+toDoList["task"][i].desc+'</div>'+
           '<div class="pen-rem"><button class="del" onClick="deleteTask('+i+')">delete</button></div>' +
           '</div>';
        }
    }
}

function deleteTask(n)
{
        let tasks = localStorage.getItem('tasks');
        let obj = JSON.parse(tasks);
        console.log(obj["task"]);
        obj["task"].splice(n,1);
        console.log(obj["task"]);
        localStorage.setItem('tasks', JSON.stringify(obj));

        location.reload();

}


window.addEventListener("load", ()=>{
    displayTask();
});

addTask.addEventListener("click",()=>{
    const toDoTitle = document.getElementById('title').value;
    const toDoDesc = document.getElementById('desc').value;
    
    createTask(toDoTitle,toDoDesc);
})



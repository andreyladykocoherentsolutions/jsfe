function deleteTask() {
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}

function markAsComplete() {
    if (this.className.indexOf('uncompleted') !== -1) {
        this.className = this.className.replace(/\buncompleted\b/,'');
        this.className = this.className.replace(/\bcompleted\b/,'');
        this.className = this.className + " completed";
        this.className = this.className.trim();
        var deleteButton = document.createElement("div");
        deleteButton.appendChild(document.createTextNode("DELETE"));
        deleteButton.addEventListener('click', deleteTask, false);
        this.appendChild(deleteButton);
    } else {
        //Already done
    }
}

document.getElementById("addTaskButton").addEventListener('click', function () {
    var taskList = document.getElementById("taskList");
    var newTaskName = document.getElementById("newTaskName");

    var newTask = document.createElement("div");
    newTask.appendChild((document.createTextNode(newTaskName.value)));


    var newTaskLiDiv = document.createElement("div");
    newTaskLiDiv.addEventListener('click', markAsComplete, false);
    newTaskLiDiv.className = 'taskLine uncompleted';
    newTaskLiDiv.appendChild(newTask);


    var newTaskLi = document.createElement("li");
    newTaskLi.appendChild(newTaskLiDiv);

    taskList.appendChild(newTaskLi);
}, false);


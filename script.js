function addTask(){
    let taskInput= document.getElementById("taskInput");
    let taskDate = document.getElementById("taskDate");
    let taskList= document.getElementById("taskList");
    
        if(taskInput.value.trim() === ""){
                    alert('Please enter a task!');
                    return;
                }
                let li =document.createElement("li");
                li.textContent = taskInput.value + "-" +taskDate.value;
                li.addEventListener(click ,function(){
                    li.classList.toggle("completed")
                });

            let li =document.createElement("li");
            li.textContent = taskInput.value;
            
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", function() {
            taskList.removeChild(li);
        });
    
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    
        taskInput.value = "";
    }

   
    
            
function addTask(){
    lettaskInput= document.getElementById("taskInput");
    let taskList= document.getElementById("taskList");
    
        if(taskInput.value.trim()===""){
                    alert('Please enter a task!');
                    return;
                }
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
    //funtion to display date.
    
    function displayDate(){
        let dateElement = document.getElementById("date");
        let currentDate = new Date();
        let dateString = currentDate.toDateString();
        dateElement.textContent ="" + dateString;
    }
    window.onload = displayDate;
    
    
        
    
    
            
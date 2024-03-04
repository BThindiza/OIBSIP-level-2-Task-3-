function addTask(){
    let taskInput= document.getElementById("taskInput");
    let taskList= document.getElementById("taskList");
    
        if(taskInput.value.trim() === ""){
                    alert('Please enter a task!');
                    return;
                }
                var li = document.createElement("li");
                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.addEventListener("change", function() {
                    if (checkbox.checked) {
                        li.style.textDecoration = "line-through";
                    } else {
                        li.style.textDecoration = "none";
                    }
                });
            
                li.textContent = taskInput.value + " - " + getCurrentDate();
                li.appendChild(checkbox);
                taskList.appendChild(li);
            
                taskInput.value = "";
            }
            
            function getCurrentDate() {
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); 
                var yyyy = today.getFullYear();
            
                return mm + '/' + dd + '/' + yyyy;
            }
            
            document.getElementById("currentDate").textContent = "Today's Date: " + getCurrentDate();
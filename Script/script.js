let remainingTasks = 6;
let completedSteps = 24; 

document.querySelectorAll("#Completed-btn").forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault(); 

        // const taskName =document.getElementById("card-title").innerText;
          const taskName = this.closest('.card').querySelector('h3').innerText;
          const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second: '2-digit'});


        alert("Board updated Successfully"); 
        
        if (remainingTasks > 0) {
            remainingTasks -= 1;
            document.querySelector(".countTask").innerText = remainingTasks;

            if (remainingTasks === 0) {
                alert("Congratulations! You have completed all tasks!");
            }    
        }
        completedSteps += 1;
        document.querySelector(".countCheckbox").innerText = completedSteps;

        this.disabled = true;

        const activityLogContainer = document.querySelector(".activity-log");
        const addDiv = document.createElement("div");
        addDiv.classList.add("bg-[#F4F7FF]", "p-4", "mt-4", "mb-4", "rounded-xl");
        addDiv.innerHTML = `You have completed The Task <strong>${taskName}</strong> at ${currentTime}`;
        activityLogContainer.appendChild(addDiv);
        


    })
})

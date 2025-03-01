let taskCount = 6;
let checkboxCount = 24; 

document.querySelectorAll("#Completed-btn").forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault(); 
        alert("Board updated Successfully"); 
        
        if (taskCount > 0) {
            taskCount -= 1;
            document.querySelector(".countTask").innerText = taskCount;
        }
        checkboxCount += 1;
        document.querySelector(".countCheckbox").innerText = checkboxCount;

        // this.style.display = "none";
        this.disabled = true;
    });
});

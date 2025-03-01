document.getElementById("remove-history-btn").addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector(".activity-log").innerHTML = '';
})
let count = 1;
document.getElementById("add-btn").addEventListener("click", function () {
    const inputValue = document.getElementById("input-field").value;
    if (inputValue == "") {
        alert("Enter any task and click add button.");
    }
    else if (inputValue >= 0 || inputValue <= 0) {
        alert("Only number value is not valid input. Please enter task name.")
    }
    else {
        const tableBody = document.getElementById("table-body");
        const tableContent = document.createElement("tr");
        tableContent.innerHTML = `
                <td>${count++} </td>
                <td>${inputValue} </td>
                <td><button class="btn btn-success done-task mx-1">Done</button> <button class="btn btn-danger delete-task">Delete</button></td>
        `;
        tableBody.appendChild(tableContent);

        const doneButtons = document.getElementsByClassName("done-task");
        for (const button of doneButtons) {
            button.addEventListener("click", function (event) {
                event.target.parentNode.parentNode.style.textDecoration = "line-through";
            })
        }
        const deleteButtons = document.getElementsByClassName("delete-task");
        for (const button of deleteButtons) {
            button.addEventListener("click", function (event) {
                event.target.parentNode.parentNode.style.display = "none";
            })
        }
        document.getElementById("input-field").value = "";
    }
})
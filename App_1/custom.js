var n = 0;
function add_list() {
    // Creating Li & appending the value of input in li
    var name = document.getElementById("name").value
    var li = document.createElement("li")
    li.id = n++;
    li.addEventListener("click", function () {
        this.classList.toggle("checked");
    });
    var text = document.createTextNode(name)
    li.appendChild(text)

    if (name === "") {
        alert("You must write something")
    }
    else {
        document.getElementById("mylist").appendChild(li)
    }
    // To Empty the Input field after appending text in li
    document.getElementById("name").value = "";

    // Creating Delete Button & appending in li
    var deleteButton = document.createElement("btn");
    var txt = document.createTextNode("Delete");
    deleteButton.className = "delete btn btn-danger";
    deleteButton.appendChild(txt);
    li.appendChild(deleteButton)

    // Creating Edit Button & appending in li
    var editButton = document.createElement("btn");
    editButton.innerText = "Edit";
    editButton.className = "edit btn btn-info";
    li.appendChild(editButton);

    // Click on a close button to hide the current list item
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var divClose = this.parentElement;
            divClose.style.display = "none";
        }
    }

    // Edit Button Function 
    var editBtn = document.querySelectorAll('.edit')

    editBtn.forEach((btn) => {
        var divEdit = btn.parentElement.firstChild;
        btn.addEventListener('click', () => {
            var divEdit = btn.parentElement.firstChild;
            
            var updateButton = document.createElement("btn");
            updateButton.innerText = "Update";
            updateButton.className = "update btn btn-success";
            btn.replaceWith(updateButton)
            
            var editField = document.createElement("input")
            editField.setAttribute("type", "text");
            editField.setAttribute("value", divEdit.textContent);
            divEdit.replaceWith(editField)

            updateButton.addEventListener('click', () => {

                if (editField.value === "") alert("Field is empty")
                else {
                    editField.replaceWith(editField.value)
                    updateButton.replaceWith(editButton)
                }
            })
        })
    })
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("delete");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var divClose = this.parentElement;
        divClose.style.display = "none";
    }
}
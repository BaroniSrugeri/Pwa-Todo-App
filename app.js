document.getElementById('toto-form').addEventListener("submit", function(e){
    e.preventDefault();
    const input= document.getElementById(
        "todo-input");
        addTodo(input.value);
        input.value = "";
});
function addTodo(task){
    const list = document.getElementById("todo-list");
    const listItem = document.createElement("li");
    listItem.textContent = task;
    list.appendChild(listItem);

}

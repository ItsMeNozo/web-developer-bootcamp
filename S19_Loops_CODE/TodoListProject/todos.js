let cmd = prompt("Enter command."); 
const todos = ["fry eggs", "walk dog"]; 

while (cmd !== "quit" && cmd !== "q")
{
    if (cmd === "list")
    {
        console.log("********************************"); 
        for (let i = 0; i < todos.length; i++)
            console.log(`${i}: ${todos[i]}`);
        console.log("********************************"); 
    }
    else if (cmd === "new")
    {
        let todo = prompt("New todo: "); 
        todos.push(todo);
    }
    else if (cmd === "delete")
    {
        cmd = parseInt(prompt("Enter the index of the todo you want to delete: ")); 

        if (isNaN(cmd))
        {
            console.log("Error! Make sure you input a number.");
            continue; 
        }
         
        console.log("Deleted", todos.splice(cmd, 1));
    }
    cmd = prompt("Enter command."); 

}

console.log("You quit the app!");
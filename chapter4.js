let todo = [];
let req = prompt("Enter your request");

while (true) {
    if(req == "quit"){
        console.log("Quitting app");
        break;
    }

    if(req == "list"){
        console.log("-------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("-------------");
    }
    else if(req == "add"){
        let task = prompt("Enter your task to add in todo");
        todo.push(task);
        console.log("Task Added!");
    }
    else if(req == "delete"){
        let idx = prompt("Enter the index to delete a task");
        todo.splice(idx, 1);
        console.log("Task deleted");
    }
    else {
        console.log("Wrong Request!")
    }

    req = prompt("Enter your request");
}
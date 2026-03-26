let list = ["Eat", "Sleep", "Walk"];
let req = prompt("Enter opreation: ");
while (true)
{
    if (req == "quit")
    {
        console.log("Quitting");
        break;
    }
    else if (req == "add")
    {
        
        a = prompt("Enter todo-item: ");
        list.push(a);
        console.log("Added");
    }
    else if (req == "delete")
    {
        index = Number(prompt("Enter index: "));
        list.splice(index, 1);
        console.log("Deleted"); 
    }
    else if (req == "list")
    {
        for (i of list)
        {
            console.log(i);
        }
    }
    else{
        console.log("Invalid");
    }
     req = prompt("Enter opreation: ");
}

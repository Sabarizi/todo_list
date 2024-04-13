#! /usr/bin/env node

import inquirer from "inquirer";

//array  done
//function
//operation

let todos : string[] = ["shopping","cooking","playing"];
async function createTodo(todos:string[]) {
    do{ 
    let ans = await inquirer.prompt({
        type: "list",
        message: "select an operation",
        name: "select",
        choices: ["add","update","view","delete"],
    })
if(ans.select == "add"){
    let addTodo = await inquirer.prompt({
        type: "input",
        message: "Add items in the list,",
        name : "todo",
    });
    todos.push(addTodo.todo);
}
if(ans.select == "update"){
    let updateTodo = await inquirer.prompt({
        type: "list",
        message: "update items in the list",
        name : "todo",
        choices : todos.map(item => item)
    });
     let addTodo = await inquirer.prompt({
        type: "input",
        message: "Add items in the list,",
        name : "todo",
    });
    let newTodo = todos.filter(val => val !== updateTodo.todo);
    todos =[...newTodo,addTodo.todo];
}
if(ans.select == "view"){
    console.log("*** To Do List ***");
    console.log(todos);

    
    
}
if(ans.select == "delete"){
    let deleteTodo = await inquirer.prompt({
        type: "list",
        message: "update items in the list",
        name : "todo",
        choices : todos.map(item => item)
    });
    let newTodo = todos.filter(val => val !== deleteTodo.todo);
    todos =[...newTodo ];
    console.log(todos);
    
}
}while(true)
}
  

createTodo(todos);



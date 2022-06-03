const main_todo = document.getElementById("to_do");
const main_do = document.getElementById("do");
let element_todo;
const element_do = [];
let list_todo = [];
let list_do = [];
let div_container;
let div_container_do;



let task = [
    {
        id: 1,
        title: "Progrmacion con Python",
        description: "Tomar el Curso de Programacion con Python",
        date : "03/06/2022, 10:00",
        status : false
    },
    {
        id: 2,
        title: "Progrmacion con C#",
        description: "Tomar el Curso de Programacion con C#",
        date : "04/06/2022, 10:00",
        status : false
    },
    {
        id: 3,
        title: "Progrmacion con Java",
        description: "Tomar el Curso de Programacion con Java",
        date : "05/06/2022, 10:00",
        status : false
    },
    {
        id: 4,
        title: "Progrmacion con PHP",
        description: "Tomar el Curso de Programacion con PHP",
        date : "06/06/2022, 10:00",
        status : true
    },
    
];

task = task.filter(item => {
    if (!item.status) {
        return item;
    } else {
        list_do.push(item);
    }
});

let h2 = document.createElement("h2");
h2.textContent = `To-do ${task.length}`;
main_todo.appendChild(h2);

let h2_do = document.createElement("h2");
h2_do.textContent = `Do ${list_do.length}`;
main_do.appendChild(h2_do);


div_container = document.createElement("div");
task.forEach(({id, title, description, date, status}) => {
    const div_body = document.createElement("div");
    div_body.className = "main-task-todo__boody";
    div_body.innerHTML = `
                <input type="checkbox" class="task-list" name="${id}" id="${id}" onclick="orderTask(${id})">
                <div class="main-task-todo__detail">
                    <label for="${id}">${title}</label>
                    <p>${description}</p>
                    <p><span></span> ${date}</p>
                </div>
    `;
    div_container.appendChild(div_body);
    
});

main_todo.appendChild(div_container);

div_container_do = document.createElement("div");

list_do.forEach(({id, title, description, date, status}) => {
    const div_body = document.createElement("div");
    div_body.className = "main-task-do__boody";
    div_body.innerHTML = `
                <input type="checkbox" class="task-list" name="${id}" id="${id}" onclick="orderTaskDo(${id})">
                <div class="main-task-todo__detail">
                    <label for="${id}">${title}</label>
                    <p>${description}</p>
                    <p><span></span> ${date}</p>
                </div>
    `;
    div_container_do.appendChild(div_body);
    
});

main_do.appendChild(div_container_do);


function orderTask(id) {
    //console.log(main_todo);
    const data = document.getElementById(id);
    //list_todo=[];
    //list_do=[];
    //console.log(data);
    if (data.checked) {
        console.log("marcado");
        main_todo.removeChild(div_container);
        main_do.removeChild(div_container_do);
        task = task.map(item => {
            if (item.id === id){
                item.status = true;
                return item;   
            }else {
                return item;
            }               
        });

        task = task.filter(item => {
            if (!item.status) {
                return item;
            } else {
                list_do.push(item);
            }
        });
        console.log(task);
        console.log(list_do);

        listTask(task);
        listTaskDo(list_do);
    } else {

    }
}

function orderTaskDo(id) {
    //console.log(main_todo);
    const data = document.getElementById(id);
    //list_todo=[];
    //list_do=[];
    //console.log(data);
    if (data.checked) {
        console.log("marcado");
        main_todo.removeChild(div_container);
        main_do.removeChild(div_container_do);
        list_do = list_do.map(item => {
            if (item.id === id){
                item.status = false;
                return item;   
            }else {
                return item;
            }               
        });

        list_do = list_do.filter(item => {
            if (item.status) {
                return item;
            } else {
                task.push(item);
            }
        });
        console.log(task);
        console.log(list_do);

        listTask(task);
        listTaskDo(list_do);
    } else {

    }
}



function listTask(task){
    main_todo.removeChild(h2);
    h2 = document.createElement("h2");
    h2.textContent = `To-do ${task.length}`;
    main_todo.appendChild(h2);

    div_container = document.createElement("div");
    div_container.className = "main-task-todo__container";

    task.forEach(({id, title, description, date, status}) => {
        const div_body = document.createElement("div");
        div_body.className = "main-task-todo__boody";
        div_body.innerHTML = `
                    <input type="checkbox" class="task-list" name="${id}" id="${id}" onclick="orderTask(${id})">
                    <div class="main-task-todo__detail">
                        <label for="${id}">${title}</label>
                        <p>${description}</p>
                        <p><span></span> ${date}</p>
                    </div>
        `;
        div_container.appendChild(div_body);
        
    });

    main_todo.appendChild(div_container);
}



function listTaskDo(task){
    main_do.removeChild(h2_do);
    h2_do = document.createElement("h2");
    h2_do.textContent = `Do ${task.length}`;
    main_do.appendChild(h2_do);

    div_container_do = document.createElement("div");
    div_container_do.className="main-task-todo__container"
    task.forEach(({id, title, description, date, status}) => {
        const div_body = document.createElement("div");
        div_body.className = "main-task-do__boody";
        div_body.innerHTML = `
                    <input type="checkbox" class="task-list" name="${id}" id="${id}" onclick="orderTaskDo(${id})">
                    <div class="main-task-todo__detail">
                        <label for="${id}">${title}</label>
                        <p>${description}</p>
                        <p><span></span> ${date}</p>
                    </div>
        `;
        div_container_do.appendChild(div_body);
        
    });

    main_do.appendChild(div_container_do);
}

//main_todo.appendChild(div);
//main_todo.append(element_todo);


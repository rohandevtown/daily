// console.log("Hello World!");

// const state = {
//     taskList: [
//         {           
//             image: "",
//              title: "",
//              type: "",
//              description: "",
//         },
//          {           
//             image: "",
//              title: "",
//              type: "",
//              description: "",
//         },
//          {           
//             image: "",
//              title: "",
//              type: "",
//              description: "",
//         },
//          {           
//             image: "",
//              title: "",
//              type: "",
//              description: "",
//         }
//     ]
// }


const state = {
    taskList: [],
}

// DOM
const taskContents = document.querySelector(".task__contents");
const taskModal = document.querySelector(".task__modal__body");


// console.log(taskContents);
// console.log(taskModal)

const htmlTaskContent = ({id, title, description, type, url}) => `
    <div class="col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
        <div class="card shadow-sm task__card">
            <div class="card-header d-flex justify-content-end task__card__header">
                <button type="button" class="btn btn-outline-info mr-2" name=${id} onclick='editTask.apply(this, arguments)'>
                    <i class="fas fa-pencil-alt" name=${id}></i>
                </button>
                  <button type="button" class="btn btn-outline-danger mr-2" name=${id} onclick='deleteTask.apply(this, arguments)'>
                    <i class="fas fa-trash-alt" name=${id}></i>
                </button>
            </div>
            <div class="card-body">
            ${
                url ? `<img width="100%" src=${url} alt="card image cap" class="card-image-top md-3 rounded-lg"/>` :
                 `<img width="100%" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAACUCAMAAADLemePAAAAMFBMVEXx8/XCy9L09ve/yNDGztXN1Nrs7/HT2d/o6+7Z3uPh5enJ0dfk6Ovc4eXQ19zV299BB7LwAAAEOElEQVR4nO2a2baDIAwAkU0Utf//t9e17gUCgtyTea7LNBgSgBT/GpL6BZ4F9XIG9XIG9XIG9XIG9XIG9XIG9XIG9XIG9XIG9XIG9XIG9XIG9XIG9XIG9XIG9XIG9XIG9eLDgt3pXXq84KKsqupTdpqHuOF79BgXn0YRukBUW2rO/CL5Fj3Gq0GNbKFUqkp4Cb5Dj+lakr3bbEikKj0E36DHivZKbVWswLdOr9cPy8vA7QU1LILJ9ZhQBrlRUFYcIphaj1XSwm4U/AD8Uus1dnKjoHIPYFI9pi1Dtwg6j9CUeky42Q0BFG5+CfVYJ93kBj/i9gUm1Cud5UZql4o7nV7pODC/AZQOAzSVHgPGjowD1PoxifRYB7YbaG2fk0hPeNkR2lg+x1ePQcp5xv3shg/Qrtv10us70LLshPviget8d+VnlWA89Jhuxw5UNqXjlQ6V2D2ys3gSXI99vx9KbD+FiZ/dnQOdOX5gPbadt6jLbapAdoSWRj+oHtvnPqqAF/r5GSs0cPSaw6PM/+RkFyCtbDD5QfVOMbANX5C0Yu0H1TulB7tEzdqgcsbvD6jHjmPTPE5G/Goxdz+o3qlVo5WFHrdZNnLl1/wH1VMQPRb4w5sR4fXOg9OcOhm0xTOhQ+sVn1NquX/Ggn5Grud2hQmqd3pVi7rsHPFQ3C4Rgqf1+hA+cwFYPWbX9383/RFYT+9yJ22Nds8NzR/Ph5fUfONHa3NecV/1C+Dn0RDxZt7ZodI8KbBQXdCt32VZ4dWtd+0w/SmL3amQfcIdV1+/32JEwXusfnoqA8IjL/7lSCtlTw/NAarO/3QcvQhDc/BrTuGLo/dEJX3ld0qfMfRYsNUVI8fC91ovyImgLzqa3amp3umxQnftdDCoz/f1R/Agx7siZM2FY3rZ6LGiq+XmYNBw7qkuQQcSdjxYa1747eunVW+tQra/JrL2PNf1aK154bf7/FY9cXt4pgGemRm5aHwfZvu2ix479acbqAJsk8z3jZc1F7abR4ueqayoHY8kLHaRh+b0ric94/IjlU5b9l8iZs2Vdcdq1LMbQdJiR+YYvKhZc+U7PAc9216MuuaYGG3QJXJ5TzJs49t+/VQ6blRGqjXPL7oUn2Q4+uRwYf3bZx+843JTRObZjxTcaRHE4VgeE+nsyFycEecdKYs90YkUc8L6llPvR35N5zdXtlYNBU8yJ6xvOS4tga5UNhk09E6eM8NLAi811jCPbZdYM273Q681bVZGbGFv6WcH6KX096k1/eyatCUCrDfsWtwHMHFamemHp8fV6r7GfmYX1hnqVfJeLQuPaSVVLRYWer2px18SuwBcJFD9P2I3cdz6gpzefzP7Jv7xbbzYUCmKaaWQFbwMeh7uFVBSf4TmXIvqP311K5RIqZSS9F/aIQiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCICn4A49MS2/QrYSCAAAAAElFTkSuQmCC" alt="card image cap" class="card-image-top md-3 rounded-lg"/>`
            }
            <h4 class="card-title">${title}</h4>
            <p class="card-title trim-3-lines text-muted">${description}</p>
            <div class="tags text-white d-flex flex-wrap">
                <span class="badge bg-primary m-1">
                    ${type}
                </span>
            </div>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-outline-primary float-right" data-bs-toggle="modal" data-bs-target="#showTask" id=${id} onclick='openTask.apply(this, arguments)'>
                    Open Task
                </button>
            </div>
        </div>
    </div>
`;

const htmlModalContent = ({id, title, description, url}) => {
    const date = new Date(parseInt(id));
    return `
    <div id=${id}>
     ${
                url ? `<img width="100%" src=${url} alt="card image cap" class="img-fluid md-3 rounded-lg"/>` :
                `<img width="100%" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAACUCAMAAADLemePAAAAMFBMVEXx8/XCy9L09ve/yNDGztXN1Nrs7/HT2d/o6+7Z3uPh5enJ0dfk6Ovc4eXQ19zV299BB7LwAAAEOElEQVR4nO2a2baDIAwAkU0Utf//t9e17gUCgtyTea7LNBgSgBT/GpL6BZ4F9XIG9XIG9XIG9XIG9XIG9XIG9XIG9XIG9XIG9XIG9XIG9XIG9XIG9XIG9XIG9XIG9XIG9eLDgt3pXXq84KKsqupTdpqHuOF79BgXn0YRukBUW2rO/CL5Fj3Gq0GNbKFUqkp4Cb5Dj+lakr3bbEikKj0E36DHivZKbVWswLdOr9cPy8vA7QU1LILJ9ZhQBrlRUFYcIphaj1XSwm4U/AD8Uus1dnKjoHIPYFI9pi1Dtwg6j9CUeky42Q0BFG5+CfVYJ93kBj/i9gUm1Cud5UZql4o7nV7pODC/AZQOAzSVHgPGjowD1PoxifRYB7YbaG2fk0hPeNkR2lg+x1ePQcp5xv3shg/Qrtv10us70LLshPviget8d+VnlWA89Jhuxw5UNqXjlQ6V2D2ys3gSXI99vx9KbD+FiZ/dnQOdOX5gPbadt6jLbapAdoSWRj+oHtvnPqqAF/r5GSs0cPSaw6PM/+RkFyCtbDD5QfVOMbANX5C0Yu0H1TulB7tEzdqgcsbvD6jHjmPTPE5G/Goxdz+o3qlVo5WFHrdZNnLl1/wH1VMQPRb4w5sR4fXOg9OcOhm0xTOhQ+sVn1NquX/Ggn5Grud2hQmqd3pVi7rsHPFQ3C4Rgqf1+hA+cwFYPWbX9383/RFYT+9yJ22Nds8NzR/Ph5fUfONHa3NecV/1C+Dn0RDxZt7ZodI8KbBQXdCt32VZ4dWtd+0w/SmL3amQfcIdV1+/32JEwXusfnoqA8IjL/7lSCtlTw/NAarO/3QcvQhDc/BrTuGLo/dEJX3ld0qfMfRYsNUVI8fC91ovyImgLzqa3amp3umxQnftdDCoz/f1R/Agx7siZM2FY3rZ6LGiq+XmYNBw7qkuQQcSdjxYa1747eunVW+tQra/JrL2PNf1aK154bf7/FY9cXt4pgGemRm5aHwfZvu2ix479acbqAJsk8z3jZc1F7abR4ueqayoHY8kLHaRh+b0ric94/IjlU5b9l8iZs2Vdcdq1LMbQdJiR+YYvKhZc+U7PAc9216MuuaYGG3QJXJ5TzJs49t+/VQ6blRGqjXPL7oUn2Q4+uRwYf3bZx+843JTRObZjxTcaRHE4VgeE+nsyFycEecdKYs90YkUc8L6llPvR35N5zdXtlYNBU8yJ6xvOS4tga5UNhk09E6eM8NLAi811jCPbZdYM273Q681bVZGbGFv6WcH6KX096k1/eyatCUCrDfsWtwHMHFamemHp8fV6r7GfmYX1hnqVfJeLQuPaSVVLRYWer2px18SuwBcJFD9P2I3cdz6gpzefzP7Jv7xbbzYUCmKaaWQFbwMeh7uFVBSf4TmXIvqP311K5RIqZSS9F/aIQiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCICn4A49MS2/QrYSCAAAAAElFTkSuQmCC" alt="card image cap" class="img-fluid md-3 rounded-lg"/>`
            }
            <strong class="text-sm text-muted">Created on ${date.toDateString()}</strong>
            <h2 class="my-3">${title}</h2>
            <p class="lead">${description}</p>
    </div>
    `
}



const updateLocalStorage = () => {
    localStorage.setItem('task', JSON.stringify({
        tasks: state.taskList,
    }))
}


const loadInitialData = () => {
    const localStorageCopy = JSON.parse(localStorage.task);

    if(localStorageCopy) state.taskList = localStorageCopy.tasks


    state.taskList.map((cardDate)=>{
        taskContents.insertAdjacentHTML("beforeend", htmlTaskContent(cardDate))
    })
}


// Spread Operator
// const data = {
//     name: "rohan",
//     age: 27
// }
// undefined
//     console.log(data)
// VM486:1 {name: 'rohan', age: 27}
// undefined
// console.log({data})
// VM534:1 {data: {…}}data: {name: 'rohan', age: 27}[[Prototype]]: Object
// undefined
// console.log({...data})
// VM592:1 {name: 'rohan', age: 27}
// undefined
// console.log({...data, height: 5.11})
// VM611:1 {name: 'rohan', age: 27, height: 5.11}

const handleSubmit = () => {
    const id = `${Date.now()}`
    const input = {
        url: document.getElementById('imageUrl').value,
        title: document.getElementById('taskTitle').value,
        description: document.getElementById('taskDescription').value,
        type: document.getElementById('tags').value,
    };

    taskContents.insertAdjacentHTML("beforeend", htmlModalContent({
        ...input, id
    }))

    state.taskList.push({...input, id});
    updateLocalStorage()
}



const openTask = (e) => {
    if(!e) e= window.event;

    const getTask = state.taskList.find(({id}) => id === e.target.id)
    taskModal.innerHTML = htmlModalContent(getTask);
}


const deleteTask = (e) => {
    if(!e) e= window.event;

    const targetId = e.target.getAttribute("name");
    const type = e.target.tagName;
    // console.log(type)
    const removeTask = state.taskList.filter(({id})=>id!==targetId);
    state.taskList = removeTask
    // console.log(removeTask)

    updateLocalStorage();
    
    if(type === "BUTTON"){
        console.log(e.target.parentNode.parentNode.parentNode)
        return e.target.parentNode.parentNode.parentNode.parentNode.removeChild(
            e.target.parentNode.parentNode.parentNode
        )
    }
     return e.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(
            e.target.parentNode.parentNode.parentNode.parentNode
        )
}


const editTask = (e) => {
    if(!e) e= window.event;

 const targetId = e.target.id;
 const type =  e.target.tagName;

 let parentNode;
 let taskTitle;
 let taskDescription;
 let tags;
 let submitButton;

 if(type==="BUTTON"){
    parentNode = e.target.parentNode.parentNode
 }else{
 parentNode = e.target.parentNode.parentNode.parentNode
 }

//  taskTitle = parentNode.childNodes;
//  console.log(taskTitle)

 taskTitle = parentNode.childNodes[3].childNodes[3];
//  console.log(taskTitle);
taskDescription = parentNode.childNodes[3].childNodes[5];
tags = parentNode.childNodes[3].childNodes[7].childNodes[1];
// console.log(tags)
submitButton = parentNode.childNodes[5].childNodes[1];
// console.log(submitButton);

taskTitle.setAttribute("contenteditable", "true")
taskDescription.setAttribute("contenteditable", "true")
tags.setAttribute("contenteditable", "true")

submitButton.setAttribute('onclick', "saveEdit.apply(this, arguments)")
submitButton.removeAttribute("data-bs-toggle");
submitButton.removeAttribute("data-bs-target");
submitButton.innerHTML = "Save Changes"
}


// nxt session
// const saveEdit = (e) => {
//     if(!e) e= window.event;

// const targetId = e.target.id;

// }
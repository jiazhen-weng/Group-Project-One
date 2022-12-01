function createTaskHTML(task) {
    //use different background color for different task status
    const toDoBg = 'images/Sticky-Note-01-Yellow.svg';
    const inProgressBg = 'images/Sticky-Note-02-Pink.svg';
    const reviewBg = 'images/Sticky-Note-04-Purple.svg';
    const doneBg = 'images/Sticky-Note-02-Green.svg';
    let stickyNote = "";
    let flexOrder = "";
    let statusColor = ""

    switch (task.status) {
        case 'To Do':
            stickyNote = toDoBg;
            statusColor = "#FFFF90"
            flexOrder = "1";
            break;
        case 'In Progress':
            stickyNote = inProgressBg;
            statusColor = "#FCC3C9"
            flexOrder = "2";
            break;
        case 'Review':
            stickyNote = reviewBg;
            statusColor = "#DC88DD"
            flexOrder = "3";
            break;
        case 'Done':
            stickyNote = doneBg;
            statusColor = "#CAED9D"
            flexOrder = "4";
            break;
    }

    return `<div class="col-12 col-sm-6 col-lg-3 col-xl-2 mx-1" style="margin:2em !important; order: ${flexOrder}" id="cardWrapper-${task.id}">    
                <div class="card mx-0" style="width: 15rem; background-color: lightsteelblue; border:none; max-width:270px;">
                    <div class="card-body mx-auto" style="background-image: url(${stickyNote});" id="card-body-${task.id}">
                        <div id="taskDetail-${task.id}">
                            <h5 class="card-title"  id="cardTaskName">&#x1F4CC ${task.name}</h5>
                            <p class="card-text">。${task.description}</p>
                            <p class="card-text">。Assigned to: ${task.assignedTo.filter(name => name !== '').join(', ')}</p>
                            <p class="card-text">。Due on: ${task.dueDate}</p>
                            <p class="card-text">。Status: ${task.status}</p>
                            <br>
                        </div>
                        <!-- Button trigger modal -->
                        <button type="button" class="card-button btn btn-outline-success" style="visibility: ${task.status === 'Done' ? "hidden" : "visible"}" id="doneBtn-${task.id}">Mark as done</button>
                        <br>
                        <button type="button" class="card-button btn btn-info" data-toggle="modal" data-target="#task${task.id}">View</button>
                        <button type="button" class="card-button btn btn-primary" id="editBtn-${task.id}">Edit</button>
                        <button type="button" class="card-button btn btn-danger" id="deleteBtn-${task.id}">Delete</button>
                    </div>
                    <div class="modal fade" id="task${task.id}" tabindex="-1" role="dialog"
                             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content"  style="font-family:-system; font-size: normal;">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLongTitle1">Task UID: ${task.id}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <!--List group-->
                                        <div class="list-group">
                                            <a href="#" class="list-group-item list-group-item-action">
                                                <div class="d-flex w-100 justify-content-between">
                                                    <h5 class="mb-1">Task Name</h5>
                                                </div>
                                                <p class="mb-1">${task.name}</p>
                                            </a>
                                            <a href="#" class="list-group-item list-group-item-action">
                                                <div class="d-flex w-100 justify-content-between">
                                                    <h5 class="mb-1">Description</h5>
                                                </div>
                                                <p class="mb-1">${task.description}</p>
                                                
                                            </a>
                                            <a href="#" class="list-group-item list-group-item-action">
                                                <div class="d-flex w-100 justify-content-between">
                                                    <h5 class="mb-1">Assigned to</h5>
                                                </div>
                                                <p class="mb-1">${task.assignedTo.filter(name => name !== '').join(', ')}</p>
                                                
                                            </a>
                                            <a href="#" class="list-group-item list-group-item-action">
                                                <div class="d-flex w-100 justify-content-between">
                                                    <h5 class="mb-1">Due Date</h5>
                                                </div>
                                                <p class="mb-1">${task.dueDate}</p>
                                                
                                            </a>
                                            <a href="#" class="list-group-item list-group-item-action">
                                                <div class="d-flex w-100 justify-content-between">
                                                    <h5 class="mb-1">Status</h5>
                                                </div>
                                                <p class="mb-1" style = "background-color: ${statusColor};">${task.status}</p>
                                                
                                            </a>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>`;
}

function render(task) {
    let cardRow = ""
    switch (task.status) {
        case 'To Do':
            cardRow = "todo-row"
            break;
        case 'In Progress':
            cardRow = "progress-row"
            break;
        case 'Review':
            cardRow = "review-row"
            break;
        case 'Done':
            cardRow = "done-row"
            break;
}
document.getElementById(`${cardRow}`).innerHTML = document.getElementById(`${cardRow}`).innerHTML + createTaskHTML(task);
}

function refreshTaskCard() {
    window.location.reload();
}


export { render, refreshTaskCard };
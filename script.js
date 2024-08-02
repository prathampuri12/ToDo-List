function addTask() {
    const newTask = document.createElement('li'); // idhr hm ek new tasks add krna chahte hain li(hm li ko create krna chahte hain)
    const taskList = document.getElementById('taskList');
    taskList.appendChild(newTask); // hum yaha par upar li wala task append kar rhe hain ... add kr rhe hain
    newTask.textContent = document.getElementById('inputTask').value; // iski wajah se hme list mei jo hai voh visible hoga ..agr ye na likhte toh ye show he nai hota 
    document.getElementById('inputTask').value = ""; // jab hm kuch new add kren .. uske likhe jaane ke baad hme jo box hai add new task wala voh empty krna hai
    deleteTask(newTask);
}

function deleteTask(newTask) {
    const deleteBtn = document.createElement('button'); // ye jo button hai hm usse jha pr ul  yaani ki list items hain udhr append krna chahte hain
    deleteBtn.textContent = "Delete"; // delete buttn pr delete likha hona chiaye 
    newTask.appendChild(deleteBtn); // ab hm newtask mei append kr dnege delete button
    deleteBtn.onclick = function() { // jb bhi delete btn pr click hoga tab delete functioncall hoga aur newtask remove hojayega 
        newTask.remove();
    }
}
let uuid = localStorage.getItem("uuid");
var storedTasks = JSON.parse(localStorage.getItem(`${uuid}`));
 let tasks=[];
if(storedTasks)
 tasks =storedTasks
 
let app= new function()
// arrays, functions, objects are objects
{
    this.elem=document.getElementById('tasks');
    this.FetchTasks=function()
    {
        let data='';
        if(tasks.length>=0)
        {
          for(i=0;i<tasks.length;i++)
            {
                data += '<tr>';
                data += '<td>'+(i+1)+". " + tasks[i] + '</td>';
                data += '<td><button onclick="app.Edit(' + i + ')"  class="btn-save">Edit</button></td>';
                data += '<td><button onclick="app.Delete(' + i + ')"  class="btn-cancel">Delete</button></td>'
                data += '</tr>';

            }
            this.Counter(tasks.length);
            return this.elem.innerHTML = data;

        }

         

    }
    //to display all the items
    this.Add =  () => {
        elem = document.getElementById('add-todo');
        // Get the value
        var task = elem.value;
    
        if (task.trim() !=='') {
          // Add the new value
          tasks.push(task.trim());
          // Reset input value
          elem.value = '';
          // Dislay the new list
          this.FetchTasks();
          localStorage.setItem(`${uuid}`, JSON.stringify(tasks));

        
        }
      };
    //adds new elements
    this.Edit = function (item) {
        let elem = document.getElementById('edit-todo');
        // Display value in the field
        elem.value = tasks[item];
        // Display fields
        document.getElementById('edit-box').style.display = 'block';
        self = this;
    
        document.getElementById('save-edit').onsubmit = function() {
          // Get value
          var task = elem.value;
    
          if (task) {
            // Edit value
            tasks.splice(item, 1, task.trim());
            // Display the new array
            self.FetchTasks();
            // Hide fields
            CloseInput();
            localStorage.setItem(`${uuid}`, JSON.stringify(tasks));
          }
        }
      };
    //edits an item
    this.Delete = function (item) {
        // Delete the current row
        tasks.splice(item, 1);
        // Display the new list
        CloseInput();
        app.FetchTasks();
        localStorage.setItem(`${uuid}`, JSON.stringify(tasks));

      };
    //deletes an item
    this.Counter= function(data)
    {
        let elem   = document.getElementById('counter');
        let name = 'tasks';

        if (data) {
          document.getElementById('task_counter').style.display='block';
          document.getElementById('todo-list-header').style.display='block';
            if(data ==1){
                name = 'task'
            }
          elem.innerHTML = data + ' ' + name ;
        } 
        else {
          document.getElementById('task_counter').style.display='none';
          document.getElementById('todo-list-header').style.display='none';
          elem.innerHTML = "you don't have " + name;
        }

    }
    //the count of items in the array
}
app.FetchTasks();// to always update
function CloseInput()
{
    document.getElementById('edit-box').style.display="none";
}
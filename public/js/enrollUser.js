// //drop down lists all users and enrolls the user into the group
// document.querySelector("#user-group-list").addEventListener("c ", async function enrollUserHandler(event) {
//   event.preventDefault();
//   var element = event.target;
//   if (event.target.matches(".add-user-button")) {//checks if element clicked on has add-user class
//     alert("bye");
//         var study_group_id = element.id.substring(9);//removes text from id to get id number
//         var user_id = element.querySelector(".user_names").value;//gets the form value
//         if (study_group_id && user_id) {
//             const response = await fetch(`/api/enrollments/${user_id}`, {//post fetch to enrollment api
//               method: 'POST',
//               body: JSON.stringify({ study_group_id }),
//               headers: { 'Content-Type': 'application/json' },
//             });
//             if (!response.ok) {
//               alert(response.statusText);
//             }
//         }
//     }  
//   });
document.querySelector("#user-group-list").addEventListener("submit", async function enrollUserHandler(event) {
  event.preventDefault();

  var element = event.target;

  if (element.matches(".add-user")) {
        var study_group_id = element.id.substring(9);
        var user_id = element.querySelector(".user_names").value;
        if (study_group_id && user_id) {
            const response = await fetch(`/api/enrollments/${user_id}`, {
              method: 'POST',
              body: JSON.stringify({ study_group_id }),
              headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
              document.location.replace(`/groups/${study_group_id}`);
            } else {
              alert(response.statusText);
            }
        }
    }  
  });

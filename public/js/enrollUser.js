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
            if (!response.ok) {
              alert(response.statusText);
            }
        }
    }  
  });


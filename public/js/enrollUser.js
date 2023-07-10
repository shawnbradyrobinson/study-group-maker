document.querySelector("#user-group-list").addEventListener("submit", async function enrollUserHandler(event) {
  event.preventDefault();

  console.log('hi');

  var element = event.target;

  console.log(event.target);

  if (element.matches("form")) {
    console.log('hi');
        var study_group_id = element.id.substring(9);
        var user_id = element.querySelector(".user_names").value;
        console.log(user_id);
        console.log(study_group_id);
        if (study_group_id && user_id) {
          console.log(study_group_id, user_id);
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


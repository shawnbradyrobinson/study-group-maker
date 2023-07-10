//event handler that allows the user to join the group
const enrollmentsHandler = async (event) => {
    event.preventDefault();
    const study_group_id = document.querySelector('#enroll_user').parentNode.id.substring(6);// grabs parent id and removes text to get the id
    if (study_group_id) {
      const response = await fetch(`/api/enrollments/`, {//does a post fetch with the group id
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
  };

  document
    .querySelector('#enroll_user')
    .addEventListener('click', enrollmentsHandler);
const enrollmentsHandler = async (event) => {
    event.preventDefault();
    const study_group_id = document.querySelector('#enroll_user').parentNode.id.substring(6);
    if (study_group_id) {
      const response = await fetch(`/api/enrollments/`, {
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

// const deleteGroupHandler = async (event) => {

//   if(event.target.hasAttribute('data-id')) {
    
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/groups/${id}`, {

//       method: 'DELETE',
//     });

//     if(response.ok) {

//       document.location.replace('/profile');

//     } else {

//       alert('Could not delete project.')
//     }
//   }
// };

  document
    .querySelector('#enroll_user')
    .addEventListener('click', enrollmentsHandler);
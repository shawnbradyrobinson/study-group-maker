const enrollmentsFormHandler = async (event) => {
    event.preventDefault();
  
    const group_id = document.querySelector('#group_id').value.trim();
    if (group_id) {
      const response = await fetch('/api/groups', {
        method: 'POST',
        body: JSON.stringify({ group_id }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/groups/group_id');
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
    .addEventListener('submit', enrollmentsFormHandler);
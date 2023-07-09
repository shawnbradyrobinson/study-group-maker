  const groupFormHandler = async (event) => {
    event.preventDefault();
    const group_name = document.querySelector('#group_name').value.trim();
    const group_description = document.querySelector('#group_description').value.trim();
    const topic_id = Number(document.querySelector('#topic_id').value.trim());
    const skill_level = document.querySelector('#skill_level').value.trim();
    const zoom_link = document.querySelector('#zoom_link').value.trim();
    const meet_time = document.querySelector('#meet_time').value.trim();
    if (group_name && group_description && topic_id && skill_level && zoom_link && meet_time) {
      const response = await fetch('/api/groups', {
        method: 'POST',
        body: JSON.stringify({ group_name, group_description, topic_id, skill_level, zoom_link, meet_time }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

const deleteGroupHandler = async (event) => {

  if(event.target.hasAttribute('data-id')) {
    
    const id = event.target.getAttribute('data-id');
    console.log("--------------------------");
    console.log("We are inside of the event target has attribute code block right now");
    console.log("--------------------------");
    console.log(`event.target value is ${id}`);
    const response = await fetch(`/api/groups/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    }).then(() => {
      console.log("Deleting the group...");
    }).catch(err => {
      alert(err);
    });

  //   if(response.ok) {
  //     console.log("Deleting the group...");
  //     document.location.replace('/profile');

  //   } else {

  //     alert('Could not delete project.')
  //   }
  // }
  }
};
  
  document
    .querySelector('#create_group')
    .addEventListener('submit', groupFormHandler);

  document
    .querySelector('#deleteButton')
    .addEventListener('click', deleteGroupHandler);
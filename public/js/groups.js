  const groupFormHandler = async (event) => {
    event.preventDefault();
  
    const group_name = document.querySelector('#group_name').value.trim();
    const group_description = document.querySelector('#group_description').value.trim();
    const topic_id = Number(document.querySelector('#topic_id').value.trim());
    const skill_level = document.querySelector('#skill_level').value.trim();
    const zoom_link = document.querySelector('#zoom_link').value.trim();
    const meet_time = document.querySelector('#meet_time').value.trim();
    // console.log(group_name, topic_id, skill_level, zoom_link, meet_time)
    //if (group_name && group_description && topic_id && skill_level && zoom_link && meet_time) {
      const response = await fetch('/api/groups', {
        method: 'POST',
        body: JSON.stringify({ group_name, group_description, topic_id, skill_level, zoom_link, meet_time }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/groups');
      } else {
        alert(response.statusText);
      }
    //}
  };
  
  document
    .querySelector('#create_group')
    .addEventListener('submit', groupFormHandler);
//queryselector that finds if the element has a deletebutton class and 
document.querySelector("#user-group-list").addEventListener("click", async function deleteGroupHandler(event) {
    if(event.target.matches('.deleteButton')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/groups/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      }).then(() => {
        location.reload();
      }).catch(err => {
        alert(err);
      });
    }
  });
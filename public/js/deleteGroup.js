document.querySelector("#user-group-list").addEventListener("click", async function deleteGroupHandler(event) {
    alert("hi1")
    if(event.target.matches('.deleteButton')) {
      alert("hi");
      const id = event.target.getAttribute('data-id');
      // console.log("--------------------------");
      // console.log("We are inside of the event target has attribute code block right now");
      // console.log("--------------------------");
      // console.log(`event.target value is ${id}`);
      const response = await fetch(`/api/groups/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      }).then(() => {
        location.reload();
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
  });
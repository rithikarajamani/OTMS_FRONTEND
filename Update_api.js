const UpdateApi = async () => {
    const userId = document.getElementById('userId').value;
    const taskTitle = document.getElementById('taskTitle').value;
    const taskDesc = document.getElementById('taskDesc').value;
    const priority = document.getElementById('priority').value;
    const taskStatus = document.getElementById('taskStatus').value;
    const plannedStartDate = document.getElementById('plannedStartDate').value;
    const plannedCompletionDate = document.getElementById('plannedCompletionDate').value;
    const actualStartDate = document.getElementById('actualStartDate').value;
    const actualCompletionDate = document.getElementById('actualCompletionDate').value;
    const activeStatus = document.getElementById('activeStatus').value;
    const assigneeId = document.getElementById('assigneeId').value;
    const assignerId = document.getElementById('assignerId').value;
    const createdBy = document.getElementById('createdBy').value;
    const updatedBy = document.getElementById('updatedBy').value;
  
    try {
      const response = await fetch(`http://localhost:8080/otms/api/task/update/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "userId": userId,
          "taskTitle": taskTitle,
          "taskDesc": taskDesc,
          "priority": priority,
          "taskStatus": taskStatus,
          "plannedStartDate": plannedStartDate,
          "plannedCompletionDate": plannedCompletionDate,
          "actualStartDate": actualStartDate,
          "actualCompletionDate": actualCompletionDate,
          "activeStatus": activeStatus,
          "assigneeId": assigneeId,
          "assignerId": assignerId,
          "createdBy": createdBy,
          "updatedBy": updatedBy,
        }),
      });
  
      if (response.status !== 200) {
        console.log('Error updating data');
        alert('Data Updation failed!!');
      } else {
        console.log('Data Updated:', await response.json());
        alert('Data Updated!!');
      }
    } catch (error) {
      console.error('Data Updation:', error.message);
      alert('Data Updation failed!!');
    }
  };
  
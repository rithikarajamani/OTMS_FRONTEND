const Delete_api = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8080/otms/api/task/delete/${userId}`, {
        method: 'DELETE',
      });
  
      if (response.status !== 200) {
        console.log('Error deleting data');
        alert('Data Deletion failed!!');
      } else {
        console.log('Data Deleted:', await response.json());
        alert('Data Deleted!!');
      }
    } catch (error) {
      console.error('Data Deletion:', error.message);
      alert('Data Deletion failed!!');
    }
  };
  
  // Usage
  // Pass the userId of the task you want to delete
  Delete_api(1);
  
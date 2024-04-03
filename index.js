document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage') ;
      const courseNameInput = document.getElementById('courseName'); 
  
      const studentName = studentNameInput.value;   //Obtains value of name input
      const personalMessage = personalMessageInput.value;   // Obtains value of message input
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content dynamically
      certificateContent.innerHTML = `
      <h2 style="font-size: 2.8rem">Certificate of achievement</h2>
      This is to certify that
      <h3 style="font-size: 1.5rem">${studentName}</h3>
      has almost completed the
      <h3>${courseName}</h3>
      with legendary perseverance and world-class bad-assery for never giving up.
      <img src="logo.png" style="max-width: 300px; height: auto;margin-top:30px">
      <h4>${personalMessage}</h4>
    `;
    
      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = ''; 
      courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
      modal.style.display = 'none'
    });
  });
  
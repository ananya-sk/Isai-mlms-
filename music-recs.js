document.addEventListener('DOMContentLoaded', function () {
  // Mock data for users and songs
  const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    // Add more users as needed
  ];

  const songs = [
    { id: 101, title: 'Song 1' },
    { id: 102, title: 'Song 2' },
    // Add more songs as needed
  ];

  // Function to populate dropdown options
  function populateDropdownOptions(selectElement, data) {
    data.forEach(item => {
      const option = document.createElement('option');
      option.value = item.id;
      option.text = item.name || item.title;
      selectElement.appendChild(option);
    });
  }

  // Populate user and song dropdowns
  const userDropdown = document.getElementById('user_id');
  const songDropdown = document.getElementById('song_id');

  populateDropdownOptions(userDropdown, users);
  populateDropdownOptions(songDropdown, songs);
});

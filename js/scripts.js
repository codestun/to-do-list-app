function newItem() {

  // Adding a new item to the list:

  // Create a new list item element
  let li = $('<li></li>');

  // Get the value from the input field
  let inputValue = $('#input').val();

  // Add the input value as the content of the list item
  li.append(inputValue);

  if (inputValue === '') {

    // Show an alert if the input value is empty
    alert("You must write something!");
  } else {

    // Append the list item to the list
    $('#list').append(li);
  }

  // Crossing an item out:
  function crossOut() {

    // Toggle the "strike" class to cross out or remove the strike on the list item
    li.toggleClass("strike");
  }
  // Toggle the "strike" class on double-click
  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });
}

$(document).ready(function() {
    
    // Pressing Enter triggers as a click in function below
    $(document).keypress(function(e) {
        if(e.keyCode == 13) {
            e.preventDefault();
            $('#add').click();
        } 
    });
    
    // Appends new list item to unordered list on click
   $(document).on('click', '#add', function() {
       var item = $('#items').val();
       if(item.length == 0 || item.length > 10) {
           $('#items').val('');
           alert('Please enter an item (max length 10 characters).');
       } else {
            $('#items').val('');
            $('<li class="new"></li>').appendTo('#list ul').html('<button class="checkbox">✓</button><span class="listItem">' + item + '</span><button class="delete">X</button>');
       }
   });
    
    // Strike through on completed list item
    $(document).on('click', '.checkbox', function() {
        $(this).closest('li').toggleClass('completed');
    });
    
    // Removes list item from dom when delete clicked
    $(document).on('click', '.delete', function() {
        $(this).closest('li').remove();
    });
    
   // Resets entire list when reset button clicked
    $(document).on('click', '#reset', function() {
        $('#list ul').empty();
        $('#items').val('');
    });
    
});
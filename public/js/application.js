$(document).ready(function() {
  $('#get_color').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      url: '/color',
      type: 'post'
    }).done(function(data) {
      var cell_number = data.cell_number;
      var cell_hex = data.hex;
      $('ul li:nth-child(' + cell_number + ')').css('background-color', cell_hex);
    });
  });
});

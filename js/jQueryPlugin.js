var $grid = $('.all-product').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  // auto typing


  var autoTyped = new Typed('.auto-input',{
    strings : ["Sohag hossain", "web designer", "Developer"],
    typeSpeed : 100,
    backSpeed :100,
    loop: true})
    
  
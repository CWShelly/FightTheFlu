

var x = function(event){
    event.preventDefault();
    var xData = $('form').serialize();
    $.post('api/join', xData);
    console.log(xData);

    var x = $('input[name=username]').val();
    $('#thankyou').append('<p>' +'Thank you, ' + x + '.</p>');
    $('input[name=username]').val('');
    $('input[name=email]').val('');

};

$('#myCarousel1').carousel({
    interval: 1000
});


$('#myCarousel2').carousel({
    interval: false
});

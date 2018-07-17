// window.onload = function () {
//     var elem = document.getElementById('dynamic');

//     console.log(elem);
//     elem.innerText = 'dynamic content';
// }

$.when($.ready).then(function() {
    $('#dynamic').text('dynamic content');
    //console.log($('#dynamic'));
    $('.card button.select').click(function(){
        $(this).parents('.card').toggleClass('selected');
    });

    $('button.view').click(function(){
        $('#dynamic').text($('.card.selected p').text());
    });
});

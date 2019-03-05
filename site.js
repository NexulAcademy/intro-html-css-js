var myText = 'Hello from JavaScript';

// a standard JavaScript function
function updateElement(id, text) {
    var elem = document.getElementById(id);
    elem.innerHTML = '<p>' + text + '</p>';
    console.log('elem:', elem);
}

// using jQuery ...
$.when($.ready).then(function() {
    //1. arbitrary content update
    updateElement('dynamic', myText);

    //2. setup some event handlers for user interaction
    $('.card button.select').click(function(){
        $(this).parents('.card').toggleClass('selected');
    });

    $('button.view').click(function(){
        $('#dynamic').text($('.card.selected p').text());
    });
});



// comparison code - without jquery - not 100% equivalent (ask why!)
// window.onload = function () {
//     var elem = document.getElementById('dynamic');

//     console.log(elem);
//     elem.innerText = myText;

//      //or this way
//     updateElement('dynamic', myText);
// }
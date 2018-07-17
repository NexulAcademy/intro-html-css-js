// window.onload = function () {
//     var elem = document.getElementById('dynamic');

//     console.log(elem);
//     elem.innerText = 'dynamic content';
// }

$.when($.ready).then(function() {
    $('#dynamic').text('dynamic content');
    //console.log($('#dynamic'));
});

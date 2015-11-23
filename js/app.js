/*
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
/*var nav = $('.nav-item');
var firstNav = nav.first().find('a');
firstNav.attr('href','#1');
*/
// your code goes here!
/*
$('#input').on('change', function() {
    var val;
    val = $(this).val();// Your code goes here!
    $('h1')[1].innerText = val;
});
*/
/*
var f1 = $('#family1');
$('<div id=\'family2\'> </div>').insertAfter('#family1');
$('<div id=\'bruce\'> </div>').insertAfter('#family2');
$('#family2').append('<div id=\'bruce\'> </div>');
$('#bruce').append('<div id=\'madison\'> </div>');
$('#bruce').append('<div id=\'hunter\'> </div>');
*/

$('p').each(function (){
   var pLen;
   pLen = $(this).text().length;
   $(this).append('<h1>' + pLen  + '</h1>'); 
});

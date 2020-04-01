var e = $(".custom-select");

$('.bb1').on('input', function() {
    $('.bb1text').text('$' + $(this).val() + 'k');
    $('#rw1').text(Math.round(($(this).val() / parseInt($('#br1').text()))))
})

$('.rv1').on('input', function() {
    $('.rv1text').text('$' + $(this).val() + 'k');
    $('#br1').text($('.exp1').val() - $(this).val());
    $('#gr').text(Math.round((($('.rv2').val() / $(this).val()) - 1)*100))
    $('#rw1').text(Math.round(($(".bb1").val() / parseInt($('#br1').text()))))
})

$('.exp1').on('input', function() {
    $('.exp1text').text('$' + $(this).val() + 'k');
    $('#br1').text($(this).val() - $('.rv1').val());
    $('#rw1').text(Math.round(($(".bb1").val() / parseInt($('#br1').text()))))
})

$('.bb2').on('input', function() {
    $('.bb2text').text('$' + $(this).val() + 'k');
    $('#rw2').text(Math.round(($(this).val() / parseInt($('#br2').text()))))
})

$('.rv2').on('input', function() {
    $('.rv2text').text('$' + $(this).val() + 'k');
    $('#br2').text($('.exp2').val() - $(this).val());
    $('#gr').text(Math.round((($(this).val() / $('.rv1').val()) - 1)*100))
    $('#rw2').text(Math.round(($(".bb2").val() / parseInt($('#br2').text()))))
})

$('.exp2').on('input', function() {
    $('.exp2text').text('$' + $(this).val() + 'k');
    $('#br2').text($(this).val() - $('.rv2').val());
    $('#rw2').text(Math.round(($(".bb2").val() / parseInt($('#br2').text()))))
})


$(function () {
    $('.keys span:not(.eval)').click(function () {

        if ($('.screen').text() == 0) {
            $('.screen').text('');
        }

        $('.screen').text($('.screen').text() + $(this).text());

    });

    $('.reset').click(function () {
        $('.screen').text(0);
    });

    $('.eval').click(function () {

        let getScreen = $('.screen').text();

        let arr = getScreen.split(' ');

        let strToNum = [];

        for (let a of arr) {
            if ($.isNumeric(a)) {
                strToNum.push(parseInt(a));
            } else {

                switch (a) {
                    case '+': strToNum.push('+');
                        break;
                    case '-': strToNum.push('-');
                        break;
                    case '÷': strToNum.push('/');
                        break;
                    case 'x': strToNum.push('*');
                        break;
                    default: false;
                }

            }
        }

        let result = eval(strToNum.join(""));

        $('.screen').text(result);

    });

});

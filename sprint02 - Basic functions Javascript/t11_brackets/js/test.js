describe("checkBrackets", function () {
    describe("Strings with brackets", function () {
        function makeTest(expected, str) {
            it(expected + " numbers of brackets '()' must be added to string: " + str, function () {
                assert.equal(checkBrackets(str), expected);
            });
        }

        var brackets = [
            '1)()(())2(()',
            '1)(1)((2)))2((6)',
            '1a-3_43)(11s)))(da(f2)))2((6ew2)',
            '1][))a-3_43{}[11s)))(da(f2)))]2((6ew2)',
            '1§))((()1a±)((.2˜))à)˜2((6(()',
            '(1)(1)((2)))2((6))',
            '(1)((2)()(#23))2((6))))){}#232fdsdfasew{}()$3((())es',
            '{{{{{))()()*)84230e890()()()())))))*()',
            '(1)_Sasfd4351fF))_)#()',
            '___]e)))((//dsr5%%4242#$#!)*()(44(44431)(63463(2)))345342((6)',
            '(1)((244**((4(((()2((____$32426)',
            '(1werwgtew!!)((2]]]Fdsdsfsdgr26)',
            '____((((()___$322_+21/...,_(',
            '<.dsr/re[@gmailc.rerg}}434)))((430))((',
            'dsfsrewWEQvdsd@@@))(()()()()(ˆ5$r4)*26)',
            ']]]wed]c]a/()()#4${}(()dw.rerg,rpqpfr94275029*&%#@13-)))',
            '}{{{32()))))))))#99(*)*)#21',
            '()()(())'
        ];
        var expected = [2, 3, 2, 7, 5, 1, 4, 8, 1, 2, 2, 2, 3, 5, 1, 5, 9, 0];
        for (var i = 0; i < brackets.length; i++) {
            makeTest(expected[i], brackets[i]);
        }
    });

    describe("Strings without brackets", function () {
        function makeTest(expected, str) {
            it(expected + " numbers of brackets '()' must be added to string: " + str, function () {
                assert.equal(checkBrackets(str), expected);
            });
        }

        var brackets = [
            'defs043430gf_43[][]',
            'Only not widrthetr __rerffsd',
            'Free set rer3 53q1',
            '0240-2424+4242ss__21dk',
        ];
        var expected = [1, 4, -1, -1];
        for (var i = 0; i < brackets.length; i++) {
            makeTest(expected[i], brackets[i]);
        }
    });

    describe("Different types data", function () {
        function makeTest(expected, str) {
            it(expected + " numbers of brackets '()' must be added to string: " + typeof (str), function () {
                assert.equal(checkBrackets(str), expected);
            });
        }

        var brackets = [
            games = {name: 'Need for Speed'},
            43434,
            NaN,
            null,
            1.98,
            undefined
        ];
        var expected = [10, -1, -1, -1, 5, 6];
        for (var i = 0; i < brackets.length; i++) {
            makeTest(expected[i], brackets[i]);
        }
    });

});
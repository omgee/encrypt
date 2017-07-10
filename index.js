var Algorithm = (function () {
    function Algorithm() {
    }
    Algorithm._init = function () {
        Algorithm._alphabet = "\u0439\u0446\u0443\u043A\u0435\u043D\u0433\u0448\u0449\u0437\u0445\u044A\u0444\u044B\u0432\u0430\u043F\u0440\u043E\u043B\u0434\u0436\u044D\u044F\u0447\u0441\u043C\u0438\u0442\u044C\u0431\u044E\u0419\u0426\u0423\u041A\u0415\u041D\u0413\u0428\u0429\u0417\u0425\u042A\u0424\u042B\u0412\u0410\u041F\u0420\u041E\u041B\u0414\u0416\u042D\u042F\u0427\u0421\u041C\u0418\u0422\u042C\u0411\u042E ,.?!-qwertyuiopasdfghjklzxcvbnm";
    };
    Algorithm._getNumericKey = function (key) {
        var newKey = "";
        for (var i = 0; i < key.length; i++) {
            newKey += "" + key.charCodeAt(i);
        }
        return newKey;
    };
    Algorithm._changeAlphabet = function () {
        var oldAlphabet = Algorithm._alphabet;
        var newAlphabet = "";
        while (oldAlphabet.length != 0) {
            for (var _i = 0, _a = Algorithm._key; _i < _a.length; _i++) {
                var char = _a[_i];
                if (oldAlphabet.length === 0)
                    break;
                var charInt = parseInt(char) > oldAlphabet.length - 1 ? oldAlphabet.length - 1 : parseInt(char);
                newAlphabet += "" + oldAlphabet[charInt];
                oldAlphabet = oldAlphabet.replace(oldAlphabet[charInt], "");
            }
        }
        Algorithm._alphabet = newAlphabet;
    };
    Algorithm.encrypt = function (text, key) {
        Algorithm._init();
        Algorithm._key = Algorithm._getNumericKey(key);
        Algorithm._changeAlphabet();
        var newText = "";
        for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
            var char = text_1[_i];
            Algorithm._changeAlphabet();
            newText += "" + String.fromCharCode(222 + Algorithm._alphabet.indexOf(char));
        }
        return newText;
    };
    Algorithm.decrypt = function (text, key) {
        Algorithm._init();
        Algorithm._key = Algorithm._getNumericKey(key);
        Algorithm._changeAlphabet();
        var newText = "";
        for (var _i = 0, text_2 = text; _i < text_2.length; _i++) {
            var char = text_2[_i];
            Algorithm._changeAlphabet();
            newText += "" + Algorithm._alphabet[char.charCodeAt(0) - 222];
        }
        return newText;
    };
    return Algorithm;
}());
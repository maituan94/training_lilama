(function () {
    var whitePlasticInput = $("#whitePlasticInput");
    var blackPlasticInput = $("#blackPlasticInput");
    var metalInput = $("#metalInput");

    var setBtn = $("#setBtn");
    var clearBtn = $("#clearBtn");

    setBtn.click(set);

    clearBtn.click(clear);

    function set() {
        var dataObj = {
            whitePlasticInput: whitePlasticInput.val(),
            blackPlasticInput: blackPlasticInput.val(),
            metalInput: metalInput.val(),
        }

        $.get(url + '?"WHITE_OUT"='+dataObj.whitePlasticInput, function () { })
        $.get(url + '?"BLACK_OUT"='+dataObj.blackPlasticInput, function () { })
        $.get(url + '?"METAL_OUT"='+dataObj.metalInput, function () { })
    }

    function clear() {
        whitePlasticInput.val(0);
        blackPlasticInput.val(0)
        metalInput.val(0)
    }

})();
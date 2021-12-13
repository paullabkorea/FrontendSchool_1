const TextManager = (() => {

    // 원시값으로 만들면 인스턴스간에 값 공유가 불가능합니다.
    let value = { data: "Hello Lions!" };

    function innerTextManager() { }

    innerTextManager.prototype.getValue = function () {
        return value.data;
    }

    innerTextManager.prototype.setValue = function (newValue) {
        value = newValue;
    }

    return innerTextManager;
})();
let calc = {
    "+"(a,b){
        return a+b;
    }
};
//分别用两种方式来导出 exports  module.exports
//1. module.exports
//module.exports = calc;
//2. exports.c = calc
exports.c = calc;
/*
~(function () {
    module.exports = exports = {};
    let calc = {
        "+"(a,b){
            return a+b;
        }
    };
    exports.c = calc;
    return module.exports //{c:calc}
})();*/

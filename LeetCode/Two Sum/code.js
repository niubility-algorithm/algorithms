const {Tracer, Array1DTracer, LogTracer, Array2DTracer, ChartTracer, Randomize, Layout, VerticalLayout} = require('algorithm-visualizer');

const tracerArray = new Array1DTracer('入参数组');
const tracerBit = new Array1DTracer('Bit数组');
const logger = new LogTracer('两数之和');

Layout.setRoot(new VerticalLayout([tracerArray, tracerBit, logger]));

var twoSum = function (nums, target) {
    var volume = 32;
    var bitMode = volume - 1;
    var t = new Array(32).fill(0);

    tracerBit.set(t);

    for (var i = 0; i < nums.length; i++) {
        var c = (target - nums[i]) & bitMode;
        if (t[c] !== 0) return [t[c] - 1, i];
        t[nums[i] & bitMode] = i + 1;
    }
    return [-1, -1];
};

(function main() {
    var nums = [2, 7, 11, 15];
    tracerArray.set(nums);

    var idx = twoSum(nums, 9);

    logger.println(idx);

})();


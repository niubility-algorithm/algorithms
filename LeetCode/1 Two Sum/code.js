const {Tracer, Array1DTracer, LogTracer, Array2DTracer, ChartTracer, Randomize, Layout, VerticalLayout} = require('algorithm-visualizer');

const tracerArray = new Array1DTracer('入参数组');
const tracerBit = new Array1DTracer('Bit数组');
const logger = new LogTracer('两数之和');

Layout.setRoot(new VerticalLayout([tracerArray, tracerBit, logger]));

var twoSum = function (nums, target) {
    var volume = 16;
    var bitMode = volume - 1;
    var t = new Array(16).fill(0);
    // 设置bit数组
    tracerBit.set(t);

    for (var i = 0; i < nums.length; i++) {
        tracerArray.select(i);
        Tracer.delay();

        var c = (target - nums[i]) & bitMode;
        if (t[c] !== 0) return [t[c] - 1, i];

        var bitIdx = nums[i] & bitMode;
        var bitVal = i + 1;
        t[bitIdx] = bitVal;
        logger.println('数据存放-> bitIdx：' + bitIdx + ' bitVal：' + bitVal);

        tracerArray.deselect(i);
        tracerBit.patch(bitIdx, bitVal);
    }
    return [-1, -1];
};

(function main() {
    var nums = [3, 7, 1, 10, 4, 2];
    tracerArray.set(nums);

    var idx = twoSum(nums, 9);

    logger.println('两数之和(Idx)：' + '[' + idx + ']');

})();


// import visualization libraries {
const {Tracer, Array1DTracer, LogTracer, Array2DTracer, ChartTracer, Randomize, Layout, VerticalLayout} = require('algorithm-visualizer');
// }

// define tracer variables {
const array1DTracer = new Array1DTracer('Array');
const logger = new LogTracer('无重复字符的最长子串');

Layout.setRoot(new VerticalLayout([array1DTracer, logger]));
// }

var s = "ababcabcdabcdeabcdefabac";

(function main() {
    array1DTracer.set(s);

    var beginIdx = 0, endIdx = 0, maxSize = 0;
    for (var i = 0; i < s.length; i++) {

        endIdx = i;

        var existIdx = s.indexOf(s.charAt(i), beginIdx);
        if (existIdx < endIdx) {
            array1DTracer.select(beginIdx, i - 1);
            array1DTracer.patch(i);
            beginIdx = existIdx + 1;

            Tracer.delay();
            array1DTracer.deselect(0, beginIdx);
            array1DTracer.depatch(i);

            logger.println('碰撞长度：' + (endIdx - beginIdx + 1));
        }

        var e = endIdx - beginIdx + 1;

        if (maxSize < e) {
            maxSize = e;
        }

    }

    array1DTracer.println('最长长度：' + maxSize);

})();
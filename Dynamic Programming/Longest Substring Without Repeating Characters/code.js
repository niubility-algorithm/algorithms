// import visualization libraries {
const {Tracer, Array1DTracer, LogTracer, Array2DTracer, ChartTracer, Randomize, Layout, VerticalLayout} = require('algorithm-visualizer');
// }

// define tracer variables {
const tracer = new Array1DTracer('Array');
const logger = new LogTracer('无重复字符的最长子串');

Layout.setRoot(new VerticalLayout([array2dTracer, logger]));
// }

var s = "ababcabcdabcdeabcdefabac";

(function main() {
    tracer.set(s);

    var beginIdx = 0, endIdx = 0, maxSize = 0;
    for (var i = 0; i < s.length; i++) {

        endIdx = i;

        var existIdx = s.indexOf(s.charAt(i), beginIdx);
        if (existIdx < endIdx) {
            tracer.select(beginIdx, i - 1);
            tracer.patch(i);
            beginIdx = existIdx + 1;

            Tracer.delay();
            tracer.deselect(0, beginIdx);
            tracer.depatch(i);

            logger.println('碰撞长度：' + (endIdx - beginIdx + 1));
        }

        var e = endIdx - beginIdx + 1;

        if (maxSize < e) {
            maxSize = e;
        }

    }

    tracer.println('最长长度：' + maxSize);

})();
// import visualization libraries {
const { Tracer, Array1DTracer,LogTracer, Array2DTracer, ChartTracer, Randomize, Layout, VerticalLayout } = require('algorithm-visualizer');
// }

// define tracer variables {
const array2dTracer = new Array1DTracer('Array');
const logger = new LogTracer('无重复字符的最长子串');

Layout.setRoot(new VerticalLayout([array2dTracer,logger]));
// }

var s = "ababcabcdabcdeabcdefabac";

(function main() {
    array2dTracer.set(s);

    var beginIdx = 0, endIdx = 0, maxSize = 0;
    for (var i = 0; i < s.length; i++) {

        endIdx = i;

        var existIdx = s.indexOf(s.charAt(i), beginIdx);
        if (existIdx < endIdx) {
            array2dTracer.select(beginIdx, i-1);

            beginIdx = existIdx + 1;

            Tracer.delay();
            array2dTracer.deselect(0, beginIdx);

        }

        var e = endIdx - beginIdx + 1;

        if (maxSize < e) {
            maxSize = e;
        }

    }

    logger.println(maxSize);

})();
// Generated by CoffeeScript 1.6.1
(function() {

  socr.tools.fCal = (function() {
    return {
      computeP: function(x, ndf, ddf) {
        var fDist, pVal;
        if (x == null) {
          x = 0.1;
        }
        if (ndf == null) {
          ndf = 5;
        }
        if (ddf == null) {
          ddf = 5;
        }
        fDist = new FDistribution(ndf, ddf);
        return pVal = 1 - fDist.CDF(x);
      }
    };
  })();

}).call(this);

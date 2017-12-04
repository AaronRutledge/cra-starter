export class NiceScale {

    constructor(min, max, maxTicks) {
        this.minPoint = min;
        this.maxPoint = max;
        this.maxTicks = maxTicks || 8;
        this.tickSpacing;
        this.range;
        this.niceMin;
        this.niceMax;
        this.ticks = [];
    }

    niceScale() {
        let min = this.minPoint;
        let max = this.maxPoint;
        this.calculate(min, max);
        this.calcTicksArray();

        return {
            tickSpacing: this.tickSpacing,
            niceMinimum: this.niceMin,
            niceMaximum: this.niceMax,
            maxTicks: this.maxTicks,
            ticks: this.ticks
        };
    }
    calcTicksArray() {
        this.ticks = [];
        const numTicks = this.niceMax / this.tickSpacing; // determine how many ticks we need
        for (var i = 0; i <= numTicks; i++) {
            this.ticks.push(i * this.tickSpacing)
        }
    }

    /**
     * Calculate and update values for tick spacing and nice
     * minimum and maximum data points on the axis.
     */
    calculate(min, max) {
        this.range = this.niceNum(max - min, false);
        this.tickSpacing = this.niceNum(this.range / (this.maxTicks - 1), true);
        this.niceMin =
            Math.floor(min / this.tickSpacing) * this.tickSpacing;
        this.niceMax =
            Math.ceil(max / this.tickSpacing) * this.tickSpacing;
    }

    /**
     * Returns a "nice" number approximately equal to range Rounds
     * the number if round = true Takes the ceiling if round = false.
     *
     *  localRange the data range
     *  round whether to round the result
     *  a "nice" number to be used for the data range
     */
    niceNum(localRange, round) {
        let exponent; /** exponent of localRange */
        let fraction; /** fractional part of localRange */
        let niceFraction; /** nice, rounded fraction */

        exponent = Math.floor(Math.log10(localRange));
        fraction = localRange / Math.pow(10, exponent);

        if (round) {
            if (fraction <= 1.5)
                niceFraction = 1;
            else if (fraction <= 3)
                niceFraction = 2;
            else if (fraction <= 7)
                niceFraction = 5;
            else
                niceFraction = 10;
        } else {
            if (fraction <= 1)
                niceFraction = 1;
            else if (fraction <= 2)
                niceFraction = 2;
            else if (fraction <= 5)
                niceFraction = 5;
            else
                niceFraction = 10;
        }

        return niceFraction * Math.pow(10, exponent);
    }

    /**
     * Sets the minimum and maximum data points for the axis.
     *
     *  minPoint the minimum data point on the axis
     *  maxPoint the maximum data point on the axis
     */
    setMinMaxPoints(localMinPoint, localMaxPoint) {
        this.minPoint = localMinPoint;
        this.maxPoint = localMaxPoint;
    }

    /**
     * Sets maximum number of tick marks we're comfortable with
     *
     *  maxTicks the maximum number of tick marks for the axis
     */
    setMaxTicks(localMaxTicks) {
        this.maxTicks = localMaxTicks;
    }
}

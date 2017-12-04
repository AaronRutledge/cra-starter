var ValueFormatters = require('./valueFormatters');
export const doubleSort = (secondary, a, b, order, prop) => {
    order = order || 'asc';

    let aVal1 = ValueFormatters.accessor(null, a, prop);
    let bVal1 = ValueFormatters.accessor(null, b, prop);

    let aVal2 = ValueFormatters.accessor(null, a, secondary);
    let bVal2 = ValueFormatters.accessor(null, b, secondary);


    if ((typeof aVal1 === 'undefined' || aVal1 === null) || (aVal1 === '--')) {
        if (prop !== secondary) {
            if (aVal2 < bVal2) {
                return -1
            }
            else if (aVal2 > bVal2) {
                return 1
            }
            else {

                return 0
            }
        }
        else {
            return 0
        }
    }
    else if (typeof aVal1 === 'string') {
        aVal1 = aVal1.toLowerCase().trim();
    }
    if ((typeof bVal1 === 'undefined' || bVal1 === null) || (bVal1 === '--')) {
        if (prop !== secondary) {
            if (aVal2 < bVal2) {
                return -1
            }
            else if (aVal2 > bVal2) {
                return 1
            }
            else {

                return 0
            }
        }
        else {
            return 0
        }

    }
    else if (typeof bVal1 === 'string') {
        bVal1 = bVal1.toLowerCase().trim();
    }
    if (typeof aVal2 === 'string') {
        aVal2 = aVal2.toLowerCase().trim();
    }
    if (typeof bVal2 === 'string') {
        bVal2 = bVal2.toLowerCase().trim();
    }


    if (order === 'asc') {
        if (aVal1 < bVal1) {
            return -1
        }
        else if (aVal1 > bVal1) {
            return 1
        }
        else {
            if (prop !== secondary) {
                if (aVal2 < bVal2) {
                    return -1
                }
                else if (aVal2 > bVal2) {
                    return 1
                }
                else {

                    return 0
                }
            }
            else {
                return 0
            }
        }
    }
    else {
        if (aVal1 < bVal1) {
            return 1
        }
        else if (aVal1 > bVal1) {
            return -1
        }
        else {
            if (prop !== secondary) {
                if (aVal2 < bVal2) {
                    return -1
                }
                else if (aVal2 > bVal2) {
                    return 1
                }
                else {

                    return 0
                }
            }
            else {
                return 0
            }
        }
    }
}

export const doubleSortFlat = (a, b, prop, secondary, direction) => {

    let aVal1 = a[prop]
    let bVal1 = b[prop]

    let aVal2 = a[secondary]
    let bVal2 = b[secondary]

    aVal1 = typeof aVal1 === 'string' ? aVal1.toLowerCase().trim() : aVal1;
    bVal1 = typeof bVal1 === 'string' ? bVal1.toLowerCase().trim() : bVal1;
    aVal2 = typeof aVal2 === 'string' ? aVal2.toLowerCase().trim() : aVal2;
    bVal2 = typeof bVal2 === 'string' ? bVal2.toLowerCase().trim() : bVal2;

    if (aVal1 === null || typeof aVal1 === 'undefined') {
        return 1
    }
    if (bVal1 === null || typeof bVal1 === 'undefined') {
        return -1
    }

    if (direction === 'asc') {
        if (aVal1 < bVal1) {
            return -1
        }
        else if (aVal1 > bVal1) {
            return 1
        }
        else {

            if (aVal2 < bVal2) {
                return -1
            }
            else if (aVal2 > bVal2) {
                return 1
            }

            else {
                return 0
            }

        }
    }
    else {
        if (aVal1 < bVal1) {
            return 1
        }
        else if (aVal1 > bVal1) {
            return -1
        }
        else {

            if (aVal2 < bVal2) {
                return -1
            }
            else if (aVal2 > bVal2) {
                return 1
            }

            else {
                return 0
            }

        }
    }

}
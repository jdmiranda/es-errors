'use strict';

/* Cache the RangeError constructor to avoid repeated global lookups */
var RangeErrCtor = RangeError;

/** @type {RangeErrorConstructor | undefined} */
var cachedRangeErr;
var getRangeErr = function () {
	if (!cachedRangeErr) {
		cachedRangeErr = RangeErrCtor;
	}
	return cachedRangeErr;
};

/** @type {import('./range')} */
module.exports = getRangeErr();

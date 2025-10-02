'use strict';

/* Cache the ReferenceError constructor to avoid repeated global lookups */
var RefErrCtor = ReferenceError;

/** @type {ReferenceErrorConstructor | undefined} */
var cachedRefErr;
var getRefErr = function () {
	if (!cachedRefErr) {
		cachedRefErr = RefErrCtor;
	}
	return cachedRefErr;
};

/** @type {import('./ref')} */
module.exports = getRefErr();

'use strict';

/*
 * Cache the Error constructor to avoid repeated global lookups.
 * This reduces allocation overhead and optimizes stack trace capture.
 */
var ErrorCtor = Error;

/** @type {ErrorConstructor | undefined} */
var cachedErr;
var getErr = function () {
	if (!cachedErr) {
		cachedErr = ErrorCtor;
	}
	return cachedErr;
};

/** @type {import('.')} */
module.exports = getErr();

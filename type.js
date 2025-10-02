'use strict';

/* Cache the TypeError constructor to avoid repeated global lookups */
var TypeErrCtor = TypeError;

/** @type {TypeErrorConstructor | undefined} */
var cachedTypeErr;
var getTypeErr = function () {
	if (!cachedTypeErr) {
		cachedTypeErr = TypeErrCtor;
	}
	return cachedTypeErr;
};

/** @type {import('./type')} */
module.exports = getTypeErr();

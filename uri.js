'use strict';

/* Cache the URIError constructor to avoid repeated global lookups */
var URIErrCtor = URIError;

/** @type {URIErrorConstructor | undefined} */
var cachedURIErr;
var getURIErr = function () {
	if (!cachedURIErr) {
		cachedURIErr = URIErrCtor;
	}
	return cachedURIErr;
};

/** @type {import('./uri')} */
module.exports = getURIErr();

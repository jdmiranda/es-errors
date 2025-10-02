'use strict';

/* Cache the SyntaxError constructor to avoid repeated global lookups */
var SyntaxErrCtor = SyntaxError;

/** @type {SyntaxErrorConstructor | undefined} */
var cachedSyntaxErr;
var getSyntaxErr = function () {
	if (!cachedSyntaxErr) {
		cachedSyntaxErr = SyntaxErrCtor;
	}
	return cachedSyntaxErr;
};

/** @type {import('./syntax')} */
module.exports = getSyntaxErr();

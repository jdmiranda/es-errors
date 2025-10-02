'use strict';

/* Cache the EvalError constructor to avoid repeated global lookups */
var EvalErrCtor = EvalError;

/** @type {EvalErrorConstructor | undefined} */
var cachedEvalErr;
var getEvalErr = function () {
	if (!cachedEvalErr) {
		cachedEvalErr = EvalErrCtor;
	}
	return cachedEvalErr;
};

/** @type {import('./eval')} */
module.exports = getEvalErr();

'use strict';

/*
 * Performance benchmark for error constructor optimizations
 * Measures the impact of caching and lazy initialization
 */

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var E = require('./index');
var Eval = require('./eval');
var Range = require('./range');
var Ref = require('./ref');
var Syntax = require('./syntax');
var Type = require('./type');
var URI = require('./uri');

// Benchmark: Error constructor access
suite.add('Error constructor access (optimized)', function () {
	var err = new E('test error');
})
.add('Error constructor access (native)', function () {
	var err = new Error('test error');
})

// Benchmark: TypeError constructor access (most commonly used)
.add('TypeError constructor access (optimized)', function () {
	var err = new Type('type error');
})
.add('TypeError constructor access (native)', function () {
	var err = new TypeError('type error');
})

// Benchmark: RangeError constructor access
.add('RangeError constructor access (optimized)', function () {
	var err = new Range('range error');
})
.add('RangeError constructor access (native)', function () {
	var err = new RangeError('range error');
})

// Benchmark: Multiple error types (simulating real-world usage)
.add('Mixed error constructors (optimized)', function () {
	var e1 = new E('error');
	var e2 = new Type('type');
	var e3 = new Range('range');
})
.add('Mixed error constructors (native)', function () {
	var e1 = new Error('error');
	var e2 = new TypeError('type');
	var e3 = new RangeError('range');
})

// Event listeners
.on('cycle', function (event) {
	console.log(String(event.target));
})
.on('complete', function () {
	console.log('\n=== Performance Summary ===');
	console.log('Fastest is ' + this.filter('fastest').map('name'));
	console.log('\nOptimization Impact:');
	this.forEach(function (bench) {
		if (bench.name.indexOf('optimized') !== -1) {
			var baseName = bench.name.replace(' (optimized)', ' (native)');
			var nativeBench = suite.filter(function (b) {
				return b.name === baseName;
			})[0];
			if (nativeBench) {
				var improvement = ((bench.hz / nativeBench.hz - 1) * 100).toFixed(2);
				console.log(bench.name + ': ' + improvement + '% performance change vs native');
			}
		}
	});
})
.run({ async: true });

/**
 *
 * This function will flatten an Array of elements ie. primities, arrays, objects :  'n' deep
 * Import it like so: import sfm from 'smoothFlatMap'
 *
 * **************************************************************************
 * **************************************************************************
 * @function
 * @param {array} - first argument must be an array. An array of objects, or an array of arrays.
 * @param {function} optional - second argument is callback which will be called during the recursive phase. This function
 * MUST handle unique use cases of your data. For instance, if you just want to deal with nested arrays, you don't need it.
 * BUT, if your array contains objects which need plucking at, you need to supply the function to do this.
 *
 * Note: This is a simple utility and is not intended to address all use cases, variants. You must know your data :-)
 * Note: Lastly, I use es6, so please be aware of this.
 */

"use strict";

// utils
const isObject = (x) => x != null && !Array.isArray(x) && typeof x === 'object';

const isArrayWithLength = (a) => Array.isArray(a) && a.length;



const sfm = (array = [], fn = (x) =>  Array.from(x)) => array.reduce( (p,c) => (isObject(c) || isArrayWithLength(c) ) ? p.concat(sfm(fn(c), fn))  : [...p,c], []);

export default sfm;
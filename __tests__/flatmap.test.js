import sfm from '../src/index';

test('Return an empty array', function() {
	const arr = [];

	expect(sfm(arr)).toEqual([]);
})

test('reduce a nested array 1 level deep', function() {
	const arr = [1,2,3,[44,55,66,77,88], 100];

	expect(sfm(arr)).toEqual([1,2,3,44,55,66,77,88,100]);
})

test('reduce a nested array 3 levels deep', function() {
	const arr = [1,2,3,[44,55,66,77,88, [99,999]], 100];

	expect(sfm(arr)).toEqual([1,2,3,44,55,66,77,88,99,999,100]);
})

test('reduce a nested array 4 levels deep', function() {
	const arr = [1,2,3,[44,55,66,77,[5555, 4444, [9999]],88], 100];

	expect(sfm(arr)).toEqual([1,2,3,44,55,66,77,5555, 4444, 9999, 88,100]);
})

test('reduce a nested array 6 levels deep', function() {
	const arr = [1,2,3,[44,55,66,77,['hello', 'inner', [9999, ['5 levels here we come', ['6 levels woohoo!']]]],88], 100];

	expect(sfm(arr)).toEqual([1,2,3,44,55,66,77,"hello", "inner",9999,"5 levels here we come", "6 levels woohoo!", 88,100]);
})

test('reduce a nested array 10 levels deep', function() {
	const arr = [1,2,3,[44,55,66,77,[[['5 levels here we come', ['6 levels woohoo!', ['7 levels', ['8 levels', ['9 levels', ['10 levels']]]]]]]],88], 100];

	expect(sfm(arr)).toEqual([1,2,3,44,55,66,77,"5 levels here we come", "6 levels woohoo!", "7 levels", "8 levels", "9 levels", "10 levels", 88,100]);
})

test('reduce a nested object with callback', function() {
	const obj = [{ x: 1, y: {x: 77, y:{x:88, y:99}}, z: 'no z' }, { x: 3, y: 4, z: 'no z again' }, { x: 5, y: 6, z: 'more no zsss' }];

	expect(sfm(obj, ({x,y}) => Array.of(x,y))).toEqual([1,77,88,99,3,4,5,6]);
})


test('Using nested objects with a more unique callback.', function() {
	const obj = [{ x: 1, y: {x: 77, y:{x:88, y:99, name: ['first', 'second']}} }, { x: 3, y: 4 }, { x: 5, y: 6 }];

	expect(sfm(obj, o => Object.values(o))).toEqual([1,77,88,99,'first','second', 3,4,5,6]);
})
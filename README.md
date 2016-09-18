# smooth-flatmap

Small Utility to flatten an array of arrays, or an array of objects.
This utility is written in es6.

## Usage
import sfm from 'smooth-flatmap';

###### arguments
> 1. array
> 2. function - optional

The array that is passed in, would look something like:
 In that case that you want to flatten arrays of arrays
 > ```[4,5,6,[55,66,77, [99,9999,9999]]]```
 
 In the case that you want to flatten an array of objects
 > ```[{x: 1, y: 2},{x: 11, y: 22},{x: 111, y: {x: 2222, y: 3333}}]```
 
 The function that is passed in, a callback, would look something like:
 > using es6 syntax: 
 
###### Array of Arrays
  If I just want to flatten an array of arrays, You wouldn't need to pass in an argument. The utility auto does this for us.
  But, lets say we wanted to extract, from the arrays, only values greater than 50. 
  *NOTE*: In this case, you would not ask the flatmap to do this. If you want to filter, do it after you get your values.
  > ```sfm([4,5,6,56,[3,4,5,59,66,[1,2,3,4,5,6,7]]]).filter( v => v > 50)```
  
###### Array of Objects: 
  What if I only wanted to pluck off certain key/values, ok, this is fine.
  
```
  const myObj = [
      {name:"Ronnie", band: "Dio"},
      {name:"Geddy", band:  {name: "Not Sure", band: "TwentyOne Pilots"}},
      {name:"Klaus", band: "Scorpions"}
    ]
```
  
  (I know the data doesn't make sense :-) )
  Lets say we want only the bands from the this array of objects.
  ```
  sfm(myObj, ({band}) => Array.of(band)) //  ["Dio","TwentyOne Pilots","Scorpions"]
  ```
  > Remember, because we must always be dealing with arrays. Your callback should return an array.
  
  Note: See the tests for more examples.

/* 

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
Symbol       Value
I            1
IV           4
V            5
IX           9
X            10
XL           40
L            50
XC           90
C            100
CD           400
D            500
CM           900 
M            1000

*/

/**
input - 3549

i = 0, str = ""

while(num > 0), 3549 > 0
	division = 3549 / 1000 = 3
	num / remainder = 3549 % 1000 = 549
	while(div > 0), 3 > 0 
		str += "M", div--
	2 > 0
		str += MM, div--
	1 > 0
		str += MMM, div--
	i++;

i = 1, 900	
while(549 > 0)
	division = 549 / 900 = 0
	num = 549 % 900 = 549
	while(div > 0)
	i++
i = 2, 500
while(549 > 0)
	division = 549 / 500 = 1
	num = 549 / 500 = 49
	while(div > 0)
		str += MMMD
		div--
	while(div > 0)
	i++
i = 3, 4, 5,
i = 6, 40
while(49 > 0)
	division = 49 / 40 = 1
	num = 49 / 40 = 9
	while(div > 0)
		str += MMMDXL
		div--
	div = 0
	i++
i = 7, 8
i = 8, 9
	division = 9 / 9 = 1
	num = 9 % 9 = 0
	while(div > 0)
		str += MMMDXLIX
	i++	
i = 10,
num = 0

MMMDXLIX
 */
const intToRoman = (number) => {
  let num = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let sym = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD", 	
    "D",
    "CM",
    "M",
  ];
  let i = 12;
  let str = "";
  while (number > 0) {
    // console.log(i)
    let div = Math.floor(number / num[i]);
    number = number % num[i];
    console.log(number, div); 
    while (div > 0) {
      str += sym[i];
      // console.log(str)
      div--;
      console.log(div);
    }
    i--;
  }
  return str;
};

var romanMatrix = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

/**
 input - 3

recursion 
	
	i = 0, 3 >= mat[0][0] 1000 -> no
	1
	2
	3
	.
	.
	.
	.
	i = 12, 3 >= 1 
		return I + fn(3 - 1)
		2 >= 1
		return I + I + fn(2 - 1)
		1 >= 1
		return I + I + I + fn(0) -> III

input - 349

	i = 0, 349 >= 1000 -> no
	.
	.
	.
	.
	.
	i = 4, 349 >= 100
		return C + fn(349 - 100)
		249 >= 100
		return C + C + fn(249 - 100)
		149 >= 100
		return C + C + C + fn(149-100)
		49 >= 100
	i = 5
	.
	.
	i = 8, 49 >= 40 
		return C + C + C + XL + (49 - 40)
	i = 9, 9 >= 10
	i = 10,9 >= 9
		return C + C + C + XL + IX
	i = 11, 0 
 */

function convertToRoman(num) {
  if (num === 0) {
    return "";
  }
  for (var i = 0; i < romanMatrix.length; i++) {
    if (num >= romanMatrix[i][0]) {
      return romanMatrix[i][1] + convertToRoman(num - romanMatrix[i][0]);
    }
  }
}

// console.log(intToRoman(3));
console.log(intToRoman(3549));
console.log(intToRoman(359));



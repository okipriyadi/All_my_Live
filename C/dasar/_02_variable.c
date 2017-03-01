/*
Data types
C has several types of variables, but there are a few basic types:

1. Integers - whole numbers which can be both positive and negative.
   Defined using char, int, short, long or long long.
2. Unsigned integers - whole numbers which can only be positive.
   Defined using unsigned char, unsigned int, unsigned short, unsigned long or unsigned long long.
3. Floating point numbers - real numbers (numbers with fractions).
   Defined using float and double.
4. Structures - will be explained later, in the Structures section.

The different types of variables define their bounds.
1. A char can range only from -128 to 127,
2. a long can range from -2,147,483,648 to 2,147,483,647.

Note that C does not have a boolean type. Usually, it is defined using the
following notation:
#define BOOL char
#define FALSE 0
#define TRUE 1

Defining variables
For numbers, we will usually use the type int, which an integer in
the size of a "word" the default number size of the machine which your
program is compiled on. On most computers today, it is a 32-bit number,
which means the number can range from -2,147,483,648 to 2,147,483,647
(same as long).

To define the variables foo and bar, we need to use the following syntax:
*/
#include <stdio.h>

int main() {
  int a = 3;
  float b = 4.5;
  double c = 5.25;
  float sum;
  /*
   * STRING
    Each of the characters in the string is just an element in an array, which is
    why you can refer to the individual characters in the string by using an index,
    like s[0] and s[1]
    But what happens when C wants to read the contents of the string? Say
	it wants to print it out. Now, in a lot of languages, the computer keeps
	pretty close track of the size of an array, but C is more low-level than most
	languages and can’t always work out exactly how long an array is. If C is going
	to display a string on the screen, it needs to know when it gets to the end of
	the character array. And it does this by adding a sentinel character.
	The sentinel character is an additional character at the end of the string that
	has the value \0. Whenever the computer needs to read the contents of the
	string, it goes through the elements of the character array one at a time, until
	it reaches \0. That means that when the computer sees this:
	s = "Shatner"
	it actually stores it in memory like this:
	==================================================
	S    |h    |a    |t    |n    |e    |r    |\0   |
	s[0] |s[1] |s[2] |s[3] |s[4] |s[1] |s[1] |s[1] |
	==================================================
   \0 adalah ASCII character dengan nilai 0
   oleh karena itu di dalam kode kita mendefinisikan ex:card_name seperti ini:
   char card_name[3];
   walaupun sebenarnya card_name hanya akan diisi oleh satu atau dua karakter saja
   tetapi karena akhiran string membutuhkan sentinel characte we have to allow for an extra
   character in the array.
   */
  char s[3] = "abcdef";
  printf("The card value is char s[3]: %s\n", s);
  printf("The s[0] card value is: %c\n", s[0]);
  printf("The s[1] card value is: %c\n", s[1]);
  printf("The s[2] card value is: %c\n", s[2]);
  printf("The s[3] card value is: %c\n", s[3]);
  printf("The s[4] card value is: %c\n", s[4]);
  printf("The s[5] card value is: %c\n", s[5]);
  /*
   * ARRAY
   * mendifinisikan array
   */

  printf("\nThe sum of a, b, and c is %f.", sum);
  return 0;
}

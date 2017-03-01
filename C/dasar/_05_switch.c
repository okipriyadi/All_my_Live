/*
* Program to evaluate face values.
* Released under the Vegas Public License.
* (c)2014 The College Blackjack Team.
*/


/*you can’t use a switch
statement to check a string of characters
or any kind of array. The switch
statement will only check a single value.
*/

#include <stdio.h>
#include <stdlib.h>
int main()
{
	char card_name[3];
	puts("Enter the card_name: ");
	scanf("%2s", card_name);
	int val = 0;
	switch(card_name[0]) {
		case 'K':
			val = val + 50;
			break;
		case 'L':
			puts("Jackpot!");
			val = val + 80;
		case 'M':
			val = val + 20;
			break;
		default:
			val = 0;

	}
	printf("The card value is: %i\n", val);
	return 0;
}

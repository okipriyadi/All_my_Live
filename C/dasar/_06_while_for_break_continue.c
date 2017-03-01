do while
=======================================
		do {
		/* Buy lottery ticket */
		} while(have_not_won);
=======================================



while
=======================================
		int counter = 1;
		while (counter <11) {
			printf("%i green bottles, hanging on a wall\n", counter);
			counter++;
		}
=======================================


for
=======================================
		for (counter = 1; counter < 11; counter++) {
		printf("%i green bottles, hanging on a wall\n", counter);
		}
=======================================

break
=======================================
		while(feeling_hungry) {
			eat_cake();
			if (feeling_queasy) {
				break
			}
			drink_coffee();
			}
=======================================


continue
=======================================
	while(feeling_hungry) {
		if (not_lunch_yet) {
			/* Go back to the loop condition */
			continue;
		}

		eat_cake();
	}
=======================================

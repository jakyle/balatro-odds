import type { Deck, DeckType } from "$lib/models/deck";
import type { Suite } from "$lib/models/suite";
import type { Value } from "$lib/models/value";

export const getDeck = (deck: DeckType): Deck => {
	switch (deck) {
		case "standard":
			return makeStandardDeck();
	}

}

function makeStandardDeck(): Deck {

	const values: Value[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
	const suites: Suite[] = ["hearts", "diamonds", "clubs", "spades"];

	return {
		type: "standard",
		cards: values.flatMap(value => suites.map(suite => ({ value, suite })))
	};
}
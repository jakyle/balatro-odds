import { Deck, type DeckType } from "$lib/models/deck";
import type { Suite } from "$lib/models/suite";
import type { Value } from "$lib/models/value";

export const getDeck = (deck: DeckType): Deck => {
	switch (deck) {
		case "Red":
			return makeRedDeck();
	}

}

const deckDescriptions: Record<DeckType, string> = {
	"Red": '<p><span class="text-red-600">+1</span> discard <span class="font-bold">every</span> round</p>',
};


function makeRedDeck(): Deck {

	const values: Value[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
	const suites: Suite[] = ["hearts", "diamonds", "clubs", "spades"];
	const deckType = 'Red';
	return new Deck(deckType, deckDescriptions[deckType], values.flatMap(value => suites.map(suite => ({ value, suite }))));
}

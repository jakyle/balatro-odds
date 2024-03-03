import type { Suite } from "./suite";
import type { Value } from "./value";

export type Card = {
	value: Value;
	suite: Suite;
	state: 'discarded' | 'hand' | 'deck';
}

export type HandCard = {
	card: Card;
	selected: boolean;
}
import type { Card } from "./card";

export type DeckType =
	| 'standard';

export type Deck = {
	type: DeckType,
	cards: Card[]
}
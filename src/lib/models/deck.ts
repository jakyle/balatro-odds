import type { Card } from "./card";
import type { Suite } from "./suite";

export type DeckType =
	| 'Red';

export class Deck {

	constructor(public type: DeckType, public description: string, public cards: Card[]) { }

	public discard: Card[] = [];

	public get valueTotals(): [Suite, number][] {
		const result = Object.entries(this.cards.reduce((acc, card) => {
			acc[card.value] = (acc[card.value] || 0) + 1;
			return acc;
		}, {} as Record<string, number>));

		const order = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];

		result.sort((a, b) => order.indexOf(a[0]) - order.indexOf(b[0]));

		return result as unknown as [Suite, number][];
	}

	public get aceTotal() {
		return this.cards.filter(card => card.value === 'A').length;
	}

	public get faceTotal() {
		return this.cards.filter(card => ['K', 'Q', 'J'].includes(card.value)).length;
	}

	public get numberTotal() {
		return this.cards.filter(card => !isNaN(parseInt(card.value))).length;
	}

	public get spadesTotal() {
		return this.cards.filter(card => card.suite === 'spades').length;
	}

	public get heartsTotal() {
		return this.cards.filter(card => card.suite === 'hearts').length;
	}

	public get diamondsTotal() {
		return this.cards.filter(card => card.suite === 'diamonds').length;
	}

	public get clubsTotal() {
		return this.cards.filter(card => card.suite === 'clubs').length;
	}

	public cardsBySuite(suite: Suite) {
		return this.cards.filter(card => card.suite === suite);

	}
}
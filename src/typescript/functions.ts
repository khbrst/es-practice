export const testRestParameter = () => {
  function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
  }

  const employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
  console.log(employeeName);
};

export const testThisParameters = () => {
  interface Card {
    suit: string;
    card: number;
  }
  interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
  }
  const deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    // tslint:disable-next-line:object-literal-sort-keys
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker(this: Deck) {
      return () => {
        const pickedCard = Math.floor(Math.random() * 52);
        const pickedSuit = Math.floor(pickedCard / 13);

        return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
      };
    },
  };

  const cardPicker = deck.createCardPicker();
  const pickedCard = cardPicker();

  console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
};

export const testThisParametersInCallbacks = () => {
  interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
  }
  class Handler {
    public info: string | undefined;
    public onClickGood = (e: Event) => { this.info = e.type; };
  }

  const uiElement: UIElement = {
    addClickListener(onclick: (this: void, e: Event) => void): void {
      // it is library implementation
    },
  };
  const h = new Handler();
  uiElement.addClickListener(h.onClickGood);
};

export const testFunctionOverloads = () => {
  const suits = ["hearts", "spades", "clubs", "diamonds"];

  function pickCard(x: Array<{ suit: string; card: number; }>): number;
  function pickCard(x: number): { suit: string; card: number; };
  function pickCard(x: any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x === "object") {
      const pickedCard = Math.floor(Math.random() * x.length);
      return pickedCard;
    } else if (typeof x === "number") {
      const pickedSuit = Math.floor(x / 13);
      return { suit: suits[pickedSuit], card: x % 13 };
    }
  }

  const myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
  const pickedCard1 = myDeck[pickCard(myDeck)];
  console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

  const pickedCard2 = pickCard(15);
  console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
};

import { List } from "phosphor-react";
import { Card } from "./Card";

interface IAllCards {
  cards: ICard[]
}

export const AllCards = ({ cards }: IAllCards) => {
  return (
    <div className="bg-container mt-5 p-5 rounded-md">
      <div className="flex items-center gap-3">
        <List size={24} />
        All cards ( {cards.length} )
      </div>

      {cards.sort((a, b) => a.studyAt > b.studyAt ? 0 : -1).map(card => (
        <Card card={card} key={card.studyAt} />
      ))}

    </div>
  );
}
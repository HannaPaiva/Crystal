import BackgroundHeroComponent, {
  BackgroundHeroProps,
} from "@/components/BackgroundHeroComponent";
import { CardComponentProps } from "@/components/CardComponent";
import CardListComponent from "@/components/CardListComponent";
import MenuComponent from "@/components/MenuComponent";
import * as React from "react";

const cards: CardComponentProps[] = [
  {
    title: "Exploring Ancient Ruins",
    description: "Embark on a journey to discover ancient civilizations.",
    date: "2023-08-27",
  },
  {
    title: "Culinary Adventure in Paris",
    description:
      "Savor the flavors of Parisian cuisine as you explore the city.",
    date: "2023-09-15",
  },
  {
    title: "Hiking the Grand Canyon",
    description:
      "Experience the breathtaking views and landscapes of the Grand Canyon.",
    date: "2023-10-10",
  },
  {
    title: "Art and Culture in Florence",
    description:
      "Immerse yourself in the art, history, and culture of Florence, Italy.",
    date: "2023-11-05",
  },
  {
    title: "Relaxing on a Tropical Island",
    description: "Unwind on the pristine beaches of a tropical paradise.",
    date: "2023-12-20",
  },
  {
    title: "Skiing in the Swiss Alps",
    description: "Hit the slopes and enjoy winter sports in the Swiss Alps.",
    date: "2024-01-15",
  },
  {
    title: "Wildlife Safari in Africa",
    description:
      "Encounter majestic wildlife on an unforgettable African safari.",
    date: "2024-02-28",
  },
  {
    title: "Photography Expedition in Iceland",
    description:
      "Capture the beauty of Iceland's landscapes and natural wonders.",
    date: "2024-03-20",
  },
  {
    title: "Cultural Festival in Tokyo",
    description:
      "Celebrate traditional and modern Japanese culture at a Tokyo festival.",
    date: "2024-04-10",
  },
];

const backgroundHeroData: BackgroundHeroProps = {
  imageUrl: "https://source.unsplash.com/random?wallpapers",
  title: "CardListSection layout",
  description:
    "Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.",
  mainButtonLabel: "Main call to action",
  secondaryButtonLabel: "Secondary action",
};

export default function Album() {
  return (
    <>
      <MenuComponent marginBottom={false} variant="white" />
      <BackgroundHeroComponent {...backgroundHeroData} />
      <CardListComponent cards={cards} />
    </>
  );
}

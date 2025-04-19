import MenuComponent from "@/components/MenuComponent";
import CarouselComponent, {
  CarouselComponentProps,
} from "@/components/CarouselComponent";
import HeroComponent, { HeroComponentProps } from "@/components/HeroComponent";
import InfoHeroComponent, {
  InfoHeroProps,
} from "@/components/InfoHeroComponent";
import ImageGridComponent, {
  ImageGridComponentProps,
} from "@/components/ImageGridComponent";
import ColoredCardsComponent, {
  ColoredCardsProps,
} from "@/components/ColoredCardsComponent";
import MapComponent from "@/components/MapComponent";
import FeedbacksComponent from "@/components/FeedbacksComponent";

const carouselData: CarouselComponentProps = {
  carouselImages: [
    "/assets/images/renata-1.jpg",
    "/assets/images/renata-2.jpg",
    "/assets/images/renata-3.jpg",
  ],
  title: "Crystal Beleza e Bem Estar",
  description:
    "Experimente o luxo e a elegância dos nossos tratamentos exclusivos para elevar seu bem-estar a um novo patamar.",
};

const heroData: HeroComponentProps = {
  title: "Equilíbrio e Versatilidade",
  description:
    "O yoga é praticado por cerca de 300 milhões de pessoas em todo o mundo, sendo uma das atividades físicas mais difundidas e versáteis.  Sua popularidade se deve à capacidade de promover equilíbrio entre corpo e mente, além de ser adaptável a diferentes níveis de habilidade.",
  mainCTA: "Venha conhecer",
};

const backgroundHeroData: InfoHeroProps = {
  imageUrl: "/assets/images/yoga/yoga-7.jpg",
  title: "Benefícios do Yoga para outras modalidades",
  cards: [
    {
      title: "Musculação",
      descriptions: [
        "O yoga ajuda a alongar e relaxar músculos encurtados pelo treino de força. Isso equilibra o aumento de massa muscular, prevenindo rigidez e melhorando a amplitude de movimento.",
        "A prática regular de yoga reduz a tensão muscular e melhora a mobilidade das articulações, o que pode diminuir o risco de lesões em exercícios de levantamento de peso e resistência.",
      ],
    },
    {
      title: "Corrida",
      descriptions: [
        "O yoga trabalha alongamentos dinâmicos e estáticos que aumentam a mobilidade do quadril, joelho e tornozelo, permitindo uma corrida mais fluida e eficiente.",
        "A prática de pranayama (controle da respiração) no yoga melhora a capacidade pulmonar, otimizando a eficiência respiratória durante corridas de longa distância.",
      ],
    },
    {
      title: "Ciclismo",
      descriptions: [
        "O ciclismo tende a encurtar os músculos do quadril e causar tensão na lombar. O yoga alonga essas regiões, aliviando tensões e melhorando a postura durante o pedal.",
        "A prática de posturas de equilíbrio no yoga fortalece o core, proporcionando maior estabilidade e controle durante subidas e descidas em pedaladas longas.",
      ],
    },
  ],
};

const coloredCardsData: ColoredCardsProps = {
  imageUrl: "/assets/images/yoga/yoga-7.jpg",
  title: "Modalidades e Serviços",
  cards: [
    {
      title: "Yoga",
      descriptions: [
        "A prática regular de yoga melhora a flexibilidade, força e equilíbrio, essenciais para o bem-estar geral e para o desempenho físico em outras modalidades.",
        "O yoga reduz o estresse e melhora a concentração, ajudando na recuperação muscular e no foco durante outras atividades físicas.",
      ],
    },
    {
      title: "Meditação",
      descriptions: [
        "A meditação melhora a clareza mental e a resiliência emocional, contribuindo para um melhor controle do estresse em situações de alta pressão.",
        "Práticas meditativas aumentam a concentração e a autoconsciência, beneficiando a performance e a consistência em treinos e competições.",
      ],
    },
    {
      title: "Para empresas",
      descriptions: [
        "Oferecer sessões de yoga para funcionários melhora o bem-estar, reduz o estresse ocupacional e aumenta a produtividade no ambiente corporativo.",
        "A implementação de programas de yoga corporativo promove um ambiente mais saudável, reduzindo o absenteísmo e melhorando a moral dos colaboradores.",
      ],
    },
    {
      title: "Massagem",
      descriptions: [
        "O yoga complementa a massagem, promovendo relaxamento profundo e ajudando a liberar tensões musculares, melhorando a recuperação física.",
        "Combinado à massagem, o yoga potencializa o alívio de dores e tensões, promovendo uma recuperação mais rápida e eficiente após atividades físicas.",
      ],
    },
  ],
};

const mapInfo = {
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.3585106405776!2d-46.861546623854615!3d-23.483592978853306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03b6b8bc2965%3A0x8131bf924bf83f34!2sEspa%C3%A7o%20Renata%20Sanches!5e0!3m2!1spt-BR!2sbr!4v1733706673191!5m2!1spt-BR!2sbr&disableDefaultUI=truehttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.3585106405776!2d-46.861546623854615!3d-23.483592978853306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03b6b8bc2965%3A0x8131bf924bf83f34!2sEspa%C3%A7o%20Renata%20Sanches!5e0!3m2!1spt-BR!2sbr!4v1733706673191!5m2!1spt-BR!2sbr&disableDefaultUI=true",
  title: "Venha Conhecer a Melhor Vista de Alphaville",
  description:
    "No nosso estúdio de yoga, você pratica em um ambiente único, cercado pela tranquilidade e a beleza natural de Alphaville. Com amplas janelas e um espaço harmonioso, oferecemos uma vista panorâmica que inspira serenidade e conexão com a natureza.",
  linkText: "Venha nos Visitar",
};

const images: ImageGridComponentProps = {
  title: "Nosso Trabalho",
  images: [
    "/assets/images/yoga/yoga-1.jpg",
    "/assets/images/yoga/yoga-2.jpg",
    "/assets/images/yoga/yoga-6.jpg",
    "/assets/images/yoga/yoga-5.jpg",
    "/assets/images/yoga/yoga-4.jpg",
    "/assets/images/yoga/yoga-7.jpg",
  ],
};

const feedbackData: any = [
  {
    name: "Mariana Pitta",
    rating: 5,
    review:
      "O espaço é incrível e a Renata mto profissional, carinhosa e atenciosa. A Yoga me desafia e ao mesmo tempo me traz uma paz indescritível. Saio da aula energizada. Obrigada Re pela sua entrega e por toda ajuda nas aulas.",
  },
  {
    name: "Eliêne Máciel",
    rating: 5,
    review:
      "Quero deixar minha gratidão pela experiência que tive com a professora Renata, sou de Goiás e sempre vou a São Paulo e numa dessas vezes tive a felicidade de fazer a pratica de yoga com ela que tem uma guiança firme e gentil. Amei a experiência super indico.",
  },
  {
    name: "Deise Tartaglia",
    rating: 5,
    review:
      "Tive a oportunidade de praticar com as duas professoras e ambas foram mto atenciosas e acolhedoras. Acompanharam de perto observando cada posição! Gostei mto!",
  },
  {
    name: "Mayara Duarte",
    rating: 5,
    review:
      "Hoje tive minha primeira experiência com meditação em grupo. Cheguei com dor nas costas e respiração compronetida, sai respirando bem melhor e a dor sumiu, no final da sessão tiramos cartas do oráculo da vida que me confirmaram mais ainda...",
  },
  {
    name: "LUH EMAIL PESSOAL",
    rating: 5,
    review:
      "A prática com a Renata foi simplesmente transformadora. Eu simplesmente ameiiii. Uma profissional totalmente diferenciada",
  },
  {
    name: "Christian Poras",
    rating: 5,
    review:
      "Olá, nunca pratiquei Yoga ou alongamentos e as experiências com a Renata tem sido muito boas, mesmo com as dificuldades e limitações que tenho com alongamento, que sei faz parte do processo. A introdução dela da cultura de Yoga, respiração, tem sido reveladora e cativante, Além dela ser uma ótima orientadora da prática. Christian 47y",
  },
];

export default function Home() {
  return (
    <>
      <MenuComponent marginBottom={false} variant="white" />
      <CarouselComponent {...carouselData} />
      <HeroComponent {...heroData} />
      <InfoHeroComponent {...backgroundHeroData} />
      <ImageGridComponent {...images} />
      <MapComponent {...mapInfo} />
      <ColoredCardsComponent {...coloredCardsData} />
      <FeedbacksComponent feedbacks={feedbackData} />
    </>
  );
}

import {
  Attributions,
  Contribution,
  Description,
  Engineering,
  Experiments,
  Home,
  HumanPractices,
  Notebook,
  Results,
  Safety,
  Team,
  Education,
  Entrepreneurship,
  Hardware,
  Inclusivity,
  Measurement,
  Model,
  Plant,
  Software,
  Sustainable,
} from "./contents";

interface Base {
  name: string | undefined;
}

class Folder implements Base {
  name: string | undefined;
  folder: Page[] | undefined;
}

class Page implements Base {
  name: string | undefined;
  title: string | undefined;
  path: string | undefined;
  component: React.FC | undefined;
  backgroundImage?: string;
}

const Pages: (Page | Folder)[] = [
  {
    name: "HOME",
    title: "Home",
    path: "/",
    component: Home,
    backgroundImage: "https://static.igem.wiki/teams/5439/banner/home.gif", 
  },
  {
    name: "PROJECT",
    folder: [
      {
        name: "Contribution",
        title: "Contribution",
        path: "/contribution",
        component: Contribution,
        backgroundImage: "https://static.igem.wiki/teams/5439/banner/bannerwikihome1680x640.gif", 
      },
      {
        name: "Description",
        title: "Description",
        path: "/description",
        component: Description,
        backgroundImage: "https://static.igem.wiki/teams/5439/banner/home.gif", 
      },
      {
        name: "Engineering",
        title: "Engineering Success",
        path: "/engineering",
        component: Engineering,
        backgroundImage: "https://static.igem.wiki/teams/5439/banner/home.gif", 
      },
      {
        name: "Experiments",
        title: "Experiments",
        path: "/experiments",
        component: Experiments,
        backgroundImage: "https://static.igem.wiki/teams/5439/banner/home.gif", 
      },
      {
        name: "Notebook",
        title: "Notebook",
        path: "/notebook",
        component: Notebook,
        backgroundImage: "https://static.igem.wiki/teams/5439/banner/home.gif", 
      },
      {
        name: "Results",
        title: "Results",
        path: "/results",
        component: Results,
        backgroundImage: "https://static.igem.wiki/teams/5439/banner/home.gif", 
      },
    ],
  },  
  {
    name: "HUMAN PRACTICES",
    title: "Human Practices",
    path: "/human-practices",
    component: HumanPractices,
    backgroundImage: "https://static.igem.wiki/teams/5439/banner/home.gif", 
  },
  {
    name: "TEAM",
    folder: [
      {
        name: "Team",
        title: "Team",
        path: "/team",
        component: Team,
        backgroundImage: "https://static.igem.wiki/teams/5439/banner/home.gif", 
      },
      {
        name: "Attributions",
        title: "Attributions",
        path: "/attributions",
        component: Attributions,
        backgroundImage: "https://static.igem.wiki/teams/5439/banner/home.gif", 
      },
    ],
  },
  {
    name: "SAFETY",
    title: "Safety",
    path: "/safety",
    component: Safety,
    backgroundImage: "https://static.igem.wiki/teams/5439/banner/home.gif", 
  },
  {
    name: "Awards",
    folder: [
      {
        name: "Education",
        title: "Education",
        path: "/education",
        component: Education,
        backgroundImage: "https://static.igem.wiki/teams/5439/banner/home.gif", 
      },
      {
        name: "Entrepreneurship",
        title: "Entrepreneurship",
        path: "/entrepreneurship",
        component: Entrepreneurship,
        backgroundImage: "https://static.igem.wiki/teams/5439/banner/home.gif", 
      },
      {
        name: "Hardware",
        title: "Hardware",
        path: "/hardware",
        component: Hardware,
        backgroundImage: "https://static.igem.wiki/teams/5439/banner/home.gif", 
      },
      {
        name: "Inclusivity",
        title: "Diversity and Inclusion",
        path: "/inclusivity",
        component: Inclusivity,
        backgroundImage: "https://static.igem.wiki/teams/5439/banner/home.gif", 
      },
      {
        name: "Measurement",
        title: "Measurement",
        path: "/measurement",
        component: Measurement,
        backgroundImage: "https://static.igem.wiki/teams/5439/banner/home.gif", 
      },
      {
        name: "Model",
        title: "Model",
        path: "/model",
        component: Model,
        backgroundImage: "https://static.igem.wiki/teams/5439/banner/home.gif", 
      },
      {
        name: "Plant",
        title: "Plant",
        path: "/plant",
        component: Plant,
        backgroundImage: "https://static.igem.wiki/teams/5439/banner/home.gif", 
      },
      {
        name: "Software",
        title: "Software",
        path: "/software",
        component: Software,
        backgroundImage: "https://static.igem.wiki/teams/5439/banner/home.gif", 
      },
      {
        name: "Sustainable",
        title: "Sustainable Development Goals",
        path: "/sustainable",
        component: Sustainable,
        backgroundImage: "https://static.igem.wiki/teams/5439/banner/home.gif", 
      },
    ],
  },
];

export default Pages;

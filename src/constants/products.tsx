import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "https://matlab-hero.vercel.app/",
    title: "MATLAB Hero",
    description:
      "A dedicated learning platform centered around mastering MATLAB.",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "aceternity",
    content: (
      <div>
        <p>
          MATLAB Hero is your ultimate resource for mastering MATLAB, whether you’re a beginner or an advanced user. Our platform offers a wide range of tutorials, exercises, and real-world examples to help you enhance your MATLAB skills. From matrix operations to complex simulations, MATLAB Hero covers everything you need to become proficient.
        </p>
        <p>
          Whether you are looking to automate tasks, solve engineering problems, or analyze data, MATLAB Hero provides the tools and guidance to help you succeed. Our courses are designed to make learning intuitive and engaging, with practical examples and step-by-step instructions. Join our community of learners and take your MATLAB expertise to the next level.
        </p>
      </div>
    ),
  },
  {
    href: "https://imdb-sentiment-analyzer.streamlit.app/",
    title: "IMDB-Sentiment-Analysis",
    description:
      "Practice for technical interviews with hands on coding challenges.",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["Python", "NLTK", "scykit-learn"],
    slug: "algochurn",
    content: (
      <div>
        <p>
          This app uses a machine learning model to analyze the sentiment of your moview review. This app is designed to predict the sentiment of your reviews as either positive or negative. It uses a pre-trained machine learning model and a TF-IDF vectorizer trained on 50,000 IMDB reviews.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://cardify-ashfin.vercel.app/",
    title: "Cardify",
    description:
      "Cardify is a flashcard application built with Next.js. It allows users to create, view, and manage flashcards to help with studying and learning.",
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam, sidefolioMoonbeam2],
    stack: ["Nextjs", "Tailwindcss", "Firebase"],
    slug: "moonbeam",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://tailwindmasterkit.com",
    title: "HelpBot",
    description:
      "AI customer support Chatbot",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
        HelpBot is a cutting-edge AI customer support chatbot built using Next.js and Material-UI (MUI). HelpBot provides a user-friendly and engaging experience for customers seeking assistance.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
];

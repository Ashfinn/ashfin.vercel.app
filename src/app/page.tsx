import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Obidur Rahman</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m an aspiring Mathematician that loves{" "}
        <Highlight>working with AI</Highlight> and creating web apps that can impact
        millions of lives
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Currently a 2nd-year Math Major with a{" "}
        <Highlight>strong experience in Computer Science</Highlight> and a focus on using Machine Learning to solve global challenges.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;m Currently working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
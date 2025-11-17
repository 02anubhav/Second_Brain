import Container from "./container";

export default function Feature() {
  return (
    <Container className="py-20">
      <div className="flex gap-8 justify-between items-baseline">
        <Heading>Built for Busy Minds That Need Clarity.</Heading>
        <Description>
          Organize your thoughts, ideas, and resources in one place. Brainly
          helps you declutter your mind and focus on what truly matters.
        </Description>
      </div>
    </Container>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-4xl w-full sm:text-6xl font-manrope font-extrabold tracking-wide  px-4 leading-15">
      {children}
    </h1>
  );
}

function Description({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg w-full sm:text-xl font-inter px-4 text-gray-600 tracking-wide leading-7">
      {children}
    </p>
  );
}

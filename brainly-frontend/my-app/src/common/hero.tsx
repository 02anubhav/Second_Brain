import Button from "@/app/components/ui/button";
import Container from "./container";

export default function Hero() {
  return (
    <Container className="py-20">
      <div>
        <Heading>
          Save now without thinking
          <br /> Return later without searching.
        </Heading>
        <SubHeading>
          A smart way to bookmark what matters —
          <span className=" text-indigo-500 italic ml-4 ">
            anytime, anywhere.
          </span>
        </SubHeading>
        <div className="flex gap-8 items-center px-4">
          <Button variant="primary" size="lg" text="Start your free trial" />
          <p className="text-gray-500 text-lg">Learn More</p>
        </div>
      </div>
    </Container>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-4xl w-full sm:text-6xl font-extrabold font-manrope px-4 mb-8 leading-15">
      {children}
    </h1>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-xl sm:text-2xl text-gray-600 font-inter px-4  mb-8">
      {children}
    </h1>
  );
}

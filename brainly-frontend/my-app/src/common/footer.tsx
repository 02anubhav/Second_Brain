import Container from "./container";
export default function Footer() {
  return (
    <Container className="py-16">
      <footer className="text-center text-sm font-medium max-w-[270px] mx-auto text-gray-400 tracking-wide">
        Design & Developed by
        <span className="font-semibold"> AnubhavXCode</span> &copy;{" "}
        {new Date().getFullYear()}. All rights reserved.
      </footer>
    </Container>
  );
}

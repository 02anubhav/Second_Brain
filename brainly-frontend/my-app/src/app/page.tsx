"use client";

import Card from "@/common/card";
import Container from "@/common/container";
import Feature from "@/common/feature";
import Hero from "@/common/hero";

export default function Home() {
  return (
    <Container className="h-screen py-16">
      <Hero />
      <Feature />
      <div className="flex gap-4">
        <Card />
        <Card />
        <Card />
      </div>
    </Container>
  );
}

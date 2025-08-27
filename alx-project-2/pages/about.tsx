"use client";
import Button from "@/components/common/Button";

export default function About() {
  return (
    <div className="p-6 space-y-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>

      <div className="flex flex-wrap gap-4">
        <Button size="small" shape="rounded-sm">
          Small Button
        </Button>

        <Button size="medium" shape="rounded-md">
          Medium Button
        </Button>

        <Button size="large" shape="rounded-full">
          Large Button
        </Button>
      </div>
    </div>
  );
}

import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      title: "Understanding CSS Flexbox",
      body: "CSS Flexbox is a layout model that allows for efficient alignment and distribution of space among items in a container. It is designed to provide a more flexible way of organizing content compared to traditional layout models. This post will guide you through the basic concepts, properties, and how to use Flexbox to create responsive web designs.",
    },
    {
      id: 2,
      title: "Introduction to TypeScript",
      body: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static typing to the language, which can help prevent errors and improve code quality. In this blog post, we'll explore the fundamentals of TypeScript, its key features, and why it’s becoming increasingly popular among developers.",
    },
    {
      id: 3,
      title: "Best Practices for Responsive Web Design",
      body: "Responsive web design ensures that your website looks great and functions well on all devices, from desktops to smartphones. This blog post will cover best practices for designing responsive websites, including fluid grids, flexible images, and media queries, to help you create websites that adapt to different screen sizes.",
    },
    {
      id: 4,
      title: "Getting Started with Next.js",
      body: "Next.js is a popular React framework that enables server-side rendering and static site generation. It provides a robust set of features for building fast and scalable web applications. In this post, we'll discuss how to get started with Next.js, from installation to creating your first project, and the benefits it offers.",
    },
    {
      id: 5,
      title: "Exploring Cloud Applied Generative AI Engineering",
      body: "Generative AI is revolutionizing industries by enabling machines to create content, designs, and solutions autonomously. This post delves into the field of Cloud Applied Generative AI Engineering, exploring its applications, tools, and how it is being used to drive innovation across various sectors.",
    },
    {
      id: 6,
      title: "Building a Real-Time Chat Application",
      body: "Real-time chat applications have become a vital component of modern web applications, enabling instant communication between users. This blog post walks you through the steps to build a real-time chat application using modern web technologies, focusing on backend setup, WebSocket implementation, and UI/UX design considerations.",
    },
  ]);
}

"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { useChat } from "ai/react";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>
          Usando Vercel SDK para criar um chat bot.
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <ScrollArea className="h-[400px] w-full space-y-4 pr-4">
          {messages.map((messages) => {
            return (
              <div
                key={messages.id}
                className="flex gap-3 text-slate-600 text-sm mb-4"
              >
                {messages.role === "user" && (
                  <Avatar>
                    <AvatarFallback>DA</AvatarFallback>
                    <AvatarImage src="https://github.com/abyssmado.png"></AvatarImage>
                  </Avatar>
                )}
                {messages.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>AI</AvatarFallback>
                    <AvatarImage src="https://github.com/chatgpt.png"></AvatarImage>
                  </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {messages.role === "user" ? "Usuário" : "AI"}:
                  </span>
                  {messages.content}
                </p>
              </div>
            );
          })}
        </ScrollArea>
      </CardContent>

      <CardFooter>
        <form className="space-x-2 w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="Como posso te ajudar?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateAge, updateName, updateSlot } from "../models/student";
import { createChatBotMessage, createClientMessage } from "react-chatbot-kit";
import { IMessage } from "react-chatbot-kit/build/src/interfaces/IMessages";

const messages = {
  slot: "Pick a slot",
  name: "Enter your name",
  age: "Enter your age",
};

const ActionProvider = ({
  setState,
  children,
}: {
  setState: any;
  children: any;
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGotIt = () => {
    const clientMessage = createClientMessage("Got it!", {});
    const message = createChatBotMessage(messages.slot, {
      widget: "slot",
      payload: [
        {
          time: "5:00 PM",
          date: "Sep 15",
        },
        {
          time: "6:00 PM",
          date: "Sep 15",
        },
        {
          time: "7:00 PM",
          date: "Sep 15",
        },
        {
          time: "5:00 PM",
          date: "Sep 16",
        },
      ],
    });

    setState((state: { messages: IMessage[] }) => {
      const lastMessage = state.messages[state.messages.length - 1];
      const messages = state.messages.slice(0, state.messages.length - 1);

      lastMessage.widget = "";

      return {
        ...state,
        messages: [...messages, lastMessage, clientMessage, message],
      };
    });
  };

  const handleSlot = (slot: string) => {
    const clientMessage = createClientMessage(slot, {
      payload: { custom: true },
    });
    const message = createChatBotMessage(messages.name, {});

    dispatch(updateSlot(slot));

    setState((state: { messages: IMessage[] }) => {
      const lastMessage = state.messages[state.messages.length - 1];
      const messages = state.messages.slice(0, state.messages.length - 1);

      lastMessage.widget = "";

      return {
        ...state,
        messages: [...messages, lastMessage, clientMessage, message],
      };
    });
  };

  const handleName = (name: string) => {
    const message = createChatBotMessage(messages.age, {});

    dispatch(updateName(name));

    setState((state: any) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };

  const handleAge = (age: number) => {
    const message = createChatBotMessage(
      "Thank you. In 5 seconds, the bot will exit.",
      {}
    );
    const exitCountDown = createChatBotMessage("5", {
      delay: 500,
    });

    dispatch(updateAge(age));

    setState((state: any) => ({
      ...state,
      messages: [...state.messages, message, exitCountDown],
    }));

    const handle = setInterval(() => {
      setState((state: any) => {
        const lastMessage = state.messages[state.messages.length - 1];
        lastMessage.message = String(Number(lastMessage.message) - 1);

        console.log(
          `${new Date()} - ${lastMessage.message} (handle ${handle}))`
        );

        if (lastMessage.message === "1") {
          console.log(
            `${new Date()} - ${
              lastMessage.message
            } (should be 1 and cancelling handle ${handle})`
          );
          clearInterval(handle);
          setTimeout(() => navigate("/success"), 1000);
        }

        return {
          ...state,
          messages: [
            ...state.messages.slice(0, state.messages.length - 1),
            lastMessage,
          ],
        };
      });
    }, 1000);
  };

  const handleMessage = (message: string) => {
    setState((state: { messages: IMessage[] }) => {
      const lastBotMessage = state.messages
        .slice()
        .reverse()
        .find((message) => message.type === "bot");

      switch (lastBotMessage!.message) {
        case messages.name:
          handleName(message);
          break;
        case messages.age:
          handleAge(Number(message));
          break;
      }

      return state;
    });
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleMessage,
            handleGotIt,
            handleSlot,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;

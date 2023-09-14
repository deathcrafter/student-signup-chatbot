import { createChatBotMessage } from "react-chatbot-kit";
import IWidget from "react-chatbot-kit/build/src/interfaces/IWidget";
import SlotButtons from "./components/SlotButtons";
import GotIt from "./components/GotIt";

const gotItWidget: IWidget = {
  widgetName: "got-it",
  widgetFunc: (props) => <GotIt {...props} />,
  mapStateToProps: [],
  props: {},
};

const slotWidget: IWidget = {
  widgetName: "slot",
  props: {},
  mapStateToProps: [],
  widgetFunc: (props) => <SlotButtons {...props} />,
};

const config = {
  initialMessages: [
    createChatBotMessage("Hello! Welcome to the student info system!", {
      widget: "got-it",
    }),
  ],
  botName: "Student Info Bot",
  widgets: [slotWidget, gotItWidget],
};

export default config;

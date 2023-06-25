import { Conversation } from "@prisma/client";
import { FC } from "react";

interface ConversationBoxProps {
  data: Conversation;
  selected: boolean;
}

const ConversationBox: FC<ConversationBoxProps> = ({ data, selected }) => {
  return <div>ConversationBox</div>;
};

export default ConversationBox;

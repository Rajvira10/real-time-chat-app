import { FC } from "react";

interface IParams {
  conversationId: string;
}

const ConversationId = async ({ params }: { params: IParams }) => {
  return <div>page</div>;
};

export default ConversationId;

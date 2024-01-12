import { M_MessageContainer } from "../../style/message/mesagePage";
import { MessageInput } from "./MessageInput";
import { MyMessage } from "./MyMessage";
import { OtherMessage } from "./OtherMessage";
import { OtherMessageInfoDetail } from "./OtherMessageInfoDetail";

const MessagePage = () => {
  return (
    <>
      <OtherMessageInfoDetail />
      <M_MessageContainer>
        <OtherMessage />
        <MyMessage />
        <MyMessage />
        <MyMessage />
        <MyMessage />
        <MyMessage />
        <MyMessage />
        <MyMessage />
        <MyMessage />
        <MyMessage />
        <MyMessage />
        <MyMessage />
        <MyMessage />
        <MyMessage />

        <MyMessage />
        <MyMessage />
        <MyMessage />        <MyMessage />
      </M_MessageContainer>
      <MessageInput />
    </>
  )
};

export default MessagePage;

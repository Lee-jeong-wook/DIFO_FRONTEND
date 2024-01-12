import {M_MessageListBox, 
  M_MessageListContainer, 
  M_MessageListMain, 
  M_MessageListName, 
  M_MessageListTime, 
  M_MessageListDetail,
  M_MessageListWriterImg
} from "../../style/messageList/messageList"

const MessageListPage = () => {
  return <>
    <M_MessageListContainer>
      <M_MessageListBox>
        <M_MessageListMain>
          <M_MessageListWriterImg />
          <M_MessageListDetail>
            <M_MessageListName>
              안녕
            </M_MessageListName>
            <M_MessageListTime>
              12980
            </M_MessageListTime>
          </M_MessageListDetail>
        </M_MessageListMain>
      </M_MessageListBox>
    </M_MessageListContainer>
  </>;
};

export default MessageListPage;

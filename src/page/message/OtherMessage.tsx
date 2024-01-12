import {
    M_OtherMessageContainer,
    M_OtherMessageProfile,
    M_OtherMessageMain,
    M_OtherMessageText
  } from "../../style/message/otherMessage"

  export const OtherMessage = () => {
    return(
    <M_OtherMessageContainer>
        <M_OtherMessageProfile />
        <M_OtherMessageMain>
            <M_OtherMessageText>
                안뇽안뇽안뇽안뇽
            </M_OtherMessageText>
        </M_OtherMessageMain>
      </M_OtherMessageContainer>
    )
  }
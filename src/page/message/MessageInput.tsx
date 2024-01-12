import {M_MessageInputContainer, M_MessageBtn, M_MessageInput } from "../../style/message/messageInput"

export const MessageInput = () => {
    return(
        <M_MessageInputContainer>
            <M_MessageInput />
            <M_MessageBtn>전송</M_MessageBtn>
        </M_MessageInputContainer>
    )
}
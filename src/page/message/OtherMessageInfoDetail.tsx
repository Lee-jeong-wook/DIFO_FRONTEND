import {
    M_OtherInfoContainer,
    M_OtherInfoBox,
    M_OtherInfoProfile,
    M_OtherInfoName
  } from "../../style/message/otherInfo"

export const OtherMessageInfoDetail = () => {
    return (
    <M_OtherInfoContainer>
        <M_OtherInfoBox>
          <M_OtherInfoProfile />
          <M_OtherInfoName>
            안뇽
          </M_OtherInfoName>
        </M_OtherInfoBox>
    </M_OtherInfoContainer>
    )
}
import React from "react";
import styled from "styled-components";
import holidays from "../holidays";

const StyledHeader = styled.h1`
  padding: 16px;
`;

const StyledSpan = styled.span`
  color: red;
`;

const Header = ({ today }) => {
  const month = today.split("-")[0];
  const day = today.split("-")[1];
  const holiday = holidays.filter(holiday => holiday.date === today);
  const label = holiday.length > 0 ? holiday[0].label : "";

  return (
    <StyledHeader>
      {`오늘은 ${month}월 ${day}일 `}
      <StyledSpan>{label}</StyledSpan>
      {`입니다. `}
      {/* 여기에 태극기 추가 */}
    </StyledHeader>
  );
};

export default Header;

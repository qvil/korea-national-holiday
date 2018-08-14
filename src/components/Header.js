import React from "react";
import styled from "styled-components";
import holidays from "../holidays";
import { Flag } from "components";

const StyledHeader = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const StyledSpan = styled.span`
  color: red;
`;

const Header = ({ today }) => {
  const month = today.split("-")[0];
  const day = today.split("-")[1];
  const holiday = holidays.filter(holiday => holiday.date === today);
  const isHoliday = holiday.length > 0;
  const label = isHoliday ? holiday[0].label : "";

  return (
    <StyledHeader>
      <div>
        {`오늘은 ${month}월 ${day}일 `}
        <StyledSpan>{label}</StyledSpan>
        {`입니다. `}
      </div>
      <Flag up={isHoliday} />
    </StyledHeader>
  );
};

export default Header;

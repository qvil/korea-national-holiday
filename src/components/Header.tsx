import styled from "styled-components";
import holidayJson from "../lib/holiday/holiday.json";

const StyledHeader = styled.h1`
  display: flex;
  align-items: center;
  padding: 16px;
  margin: 0;
`;

const StyledSpan = styled.span`
  color: red;
`;

const Header = ({ today }) => {
  const month = today.split("-")[0];
  const day = today.split("-")[1];
  const holiday = holidayJson.holiday.filter(holiday => holiday.date === today);
  const isHoliday = holiday.length > 0;
  const label = isHoliday ? holiday[0].label : "";

  return (
    <StyledHeader>
      {`오늘은 ${month}월 ${day}일 `}
      <StyledSpan>{label}</StyledSpan>
      {`입니다. `}
      {isHoliday ? <img src={"/static/images/flag.png"} /> : null}
    </StyledHeader>
  );
};

export default Header;

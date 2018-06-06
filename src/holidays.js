import React from "react";
import { SamilMovement } from "components";

const EmptyComponent = () => <div />;
const holidays = [
  { label: "삼일절", date: "3-1", component: SamilMovement },
  { label: "현충일", date: "6-6", component: EmptyComponent },
  { label: "제헌절", date: "7-17", component: EmptyComponent },
  { label: "광복절", date: "8-15", component: EmptyComponent },
  { label: "개천절", date: "10-3", component: EmptyComponent },
  { label: "한글날", date: "10-9", component: EmptyComponent }
];

export default holidays;

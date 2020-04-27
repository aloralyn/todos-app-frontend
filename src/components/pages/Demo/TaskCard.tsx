import React, { useState } from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { DateTime } from "luxon";
import styled from "styled-components";
import { Task } from "./AddTaskForm";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";

const Card = styled.div`
  display: flex-grid;
  text-align: left;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  :hover {
    background-color: #404040;
  }
`;

const LeftContainer = styled.div`
  margin-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  width: 3%;
`;

const CenterContainer = styled.div`
  width: 65%;
`;

const EllipsisContainer = styled.div`
  width: 8%;
  margin-top: 10px;
  text-align: right;
`;

const RightContainer = styled.div`
  width: 20%;
  text-align: right;
`;

const NonselectableItem = styled.div`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Title = styled(NonselectableItem)`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.015em;
  color: #fff;
  font-weight: 500;
  padding-bottom: 2px;
`;

const Details = styled(NonselectableItem)`
  color: #fff;
  opacity: 0.6;
  font-size: 14px;
  -webkit-transition: opacity 0.2s linear;
  transition: opacity 0.2s linear;
`;

const Date = styled(NonselectableItem)`
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.015em;
  margin-top: 2px;
  margin-right: 10px;
`;

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FunctionComponent<TaskCardProps> = ({ task }) => {
  const [showCheckCircle, setShowCheckCircle] = useState(false);
  const date = DateTime.local();
  const formattedDate = date
    .toLocaleString(DateTime.DATE_SHORT)
    .replace(/\//g, ".");
  const weekday = date.toFormat("cccc").toLowerCase();

  return (
    <Card
      onMouseOver={() => setShowCheckCircle(true)}
      onMouseOut={() => setShowCheckCircle(false)}
    >
      <LeftContainer>
        {showCheckCircle ? (
          <RiCheckboxCircleLine color="fff" />
        ) : (
          <RiCheckboxBlankCircleLine color="#fff" />
        )}
      </LeftContainer>
      <CenterContainer>
        <Title unselectable="on">{task.title}</Title>
        <Details>{task.description}</Details>
      </CenterContainer>
      {showCheckCircle ? (
        <EllipsisContainer>
          <AiOutlineEllipsis size={23} color="#fff" />
        </EllipsisContainer>
      ) : null}
      <RightContainer>
        <Date>
          {formattedDate}
          <br />
          {weekday}
        </Date>
      </RightContainer>
    </Card>
  );
};

export default TaskCard;

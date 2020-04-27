import React, { useState } from "react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { DateTime } from "luxon";
import styled from "styled-components";
import Card from "../../atoms/Card";
import Title from "../../atoms/Title";
import P1 from "../../atoms/P1";
import P2 from "../../atoms/P2";
import CircleCheckIcon from "../../atoms/CheckCircleIcon";

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

export type Task = {
  title: string;
  description: string;
  dateCreated?: Date;
};

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
        <CircleCheckIcon isChecked={showCheckCircle} />
      </LeftContainer>
      <CenterContainer>
        <Title>{task.title}</Title>
        <P2>{task.description}</P2>
      </CenterContainer>
      <EllipsisContainer>
        {showCheckCircle ? <AiOutlineEllipsis size={23} color="#fff" /> : null}
      </EllipsisContainer>
      <RightContainer>
        <P1>
          {formattedDate}
          <br />
          {weekday}
        </P1>
      </RightContainer>
    </Card>
  );
};

export default TaskCard;

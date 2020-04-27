import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import InputField from "../../forms/InputField";
import TextArea from "../../forms/TextArea";
import SquareButton from "../../forms/buttons/SquareButton";

const FormContainer = styled.div`
  width: 650px;
  @media only screen and (max-width: 700px) {
    width: 500px;
  }
`;

const TitleInput = styled(InputField)`
  margin-bottom: 15px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export type Task = {
  title: string;
  description: string;
  dateCreated?: Date;
};

interface AddTaskFormProps {
  tasks: Task[];
  addTask: any;
}

const AddTaskForm: React.FunctionComponent<AddTaskFormProps> = ({
  addTask,
}) => {
  const { register, reset, handleSubmit } = useForm<Task>();

  const onSubmit = handleSubmit(({ title, description }) => {
    const newTask = {
      title: title,
      description: description,
      date: new Date(),
    };
    addTask(newTask);
    reset();
  });

  return (
    <FormContainer>
      <form onSubmit={onSubmit}>
        <TitleInput
          id="title"
          name="title"
          description="Title"
          register={register}
          required
        />
        <TextArea
          id="description"
          label="description"
          name="description"
          description="Description"
          register={register}
          required
        />
        <ButtonContainer>
          <SquareButton onClick={onSubmit} />
        </ButtonContainer>
      </form>
    </FormContainer>
  );
};

export default AddTaskForm;

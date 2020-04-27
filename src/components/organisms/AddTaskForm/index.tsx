import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import FormContainer from "../../atoms/FormContainer";
import FormInput from "../../molecules/FormInput";
import FormTextArea from "../../molecules/FormTextArea";
import AddTaskButton from "../../molecules/AddTaskButton";

const ButtonContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

export type Task = {
  title: string;
  description: string;
  dateCreated?: Date;
};

interface AddTaskFormProps {
  tasks?: Task[];
  addTask?: any;
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
        <FormInput
          id="title"
          name="title"
          placeholder="Title"
          register={register}
          required
        />
        <FormTextArea
          id="description"
          name="Description"
          placeholder="Description"
          maxLength={150}
          register={register}
          required
        />
      </form>
      <ButtonContainer>
        <AddTaskButton onClick={onSubmit} />
      </ButtonContainer>
    </FormContainer>
  );
};

export default AddTaskForm;

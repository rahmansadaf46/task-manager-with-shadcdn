import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all"| "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "dada",
      title: "Task 1",
      description: "This is the first task",
      dueDate: "2023-10-01",
      isCompleted: false,
      priority: "High",
    },
        {
      id: "dadasasasa",
      title: "Task 2",
      description: "This is the second task",
      dueDate: "2023-10-01",
      isCompleted: false,
      priority: "Medium",
    },
  ],
  filter: "all"
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter
};

export default taskSlice.reducer;

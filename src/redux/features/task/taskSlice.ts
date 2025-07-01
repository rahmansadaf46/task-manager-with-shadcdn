// import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { removeUser } from "../user/userSlice";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

type DraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "assignedTo"
>;

const initialState: InitialState = {
  tasks: [
    {
      id: "33d3",
      title: "task 1",
      description: "sdcfsdfsdf",
      dueDate: "23-2033",
      isCompleted: false,
      priority: "low",
      assignedTo: null,
    },
  ],
  filter: "all",
};

const createTask = (taskData: DraftTask): ITask => {
  return {
    ...taskData,
    id: nanoid(),
    isCompleted: false,
    assignedTo: taskData.assignedTo ? taskData.assignedTo : null,
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (
      state,
      action: PayloadAction<"all" | "high" | "medium" | "low">
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeUser, (state, action) => {
      state.tasks.forEach((task) =>
        task.assignedTo === action.payload ? (task.assignedTo = null) : task
      );
    });
  },
});

// export const selectTasks = (state: RootState) => {
//   const filter = state.todo.filter;
//   if (filter === "high") {
//     return state.todo.tasks.filter((task) => task.priority === "high");
//   } else if (filter === "low") {
//     return state.todo.tasks.filter((task) => task.priority === "low");
//   } else if (filter === "medium") {
//     return state.todo.tasks.filter((task) => task.priority === "medium");
//   } else {
//     return state.todo.tasks;
//   }
// };

// export const selectFilter = (state: RootState) => {
//   return state.todo.filter;
// };

export const { addTask, toggleCompleteState, deleteTask, updateFilter } =
  taskSlice.actions;

export default taskSlice.reducer;

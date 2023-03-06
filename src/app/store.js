import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import studentReducer from "../features/Student/StudentSlice";
import authReducer from "../features/Auth/AuthSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    student: studentReducer,
    user: authReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       // Ignore these action types
  //       ignoredActions: ["students/getall/fulfilled"],
  //       // Ignore these field paths in all actions
  //       ignoredActionPaths: ["meta.arg", "student.students.bod"],
  //       // Ignore these paths in the state
  //       ignoredPaths: ["items.dates"],
  //     },
  //   }),
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

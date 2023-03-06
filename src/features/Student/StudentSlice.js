import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StudentService from "./StudentService";

const initialState = {
  students: [],
  studentDetail: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new student
export const createStudent = createAsyncThunk(
  "students/create",
  async (studentData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await StudentService.createStudent(studentData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateStudent = createAsyncThunk(
  "students/update/:id",
  async (studentData, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token;
      return await StudentService.updateStudent(studentData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user students
export const getStudents = createAsyncThunk(
  "students/getall",
  async (_, thunkAPI) => {
    try {
      return await StudentService.getStudents();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getStudent = createAsyncThunk(
  "students/:id",
  async (id, thunkAPI) => {
    try {
      return await StudentService.getStudent(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete user student
export const deleteStudent = createAsyncThunk(
  "students/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await StudentService.deleteStudent(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStudents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStudents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.students = action.payload;
      })
      .addCase(getStudents.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getStudent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStudent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.studentDetail = { ...action.payload };
      })
      .addCase(getStudent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(updateStudent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;

        const index = state.students.findIndex(
          (item) => item.id === action.payload.id
        );
        state.students[index] = { ...action.payload };
        state.studentDetail = { ...action.payload };
      })
      .addCase(updateStudent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = studentSlice.actions;
export default studentSlice.reducer;

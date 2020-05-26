import mongoose from 'mongoose';

const { Schema } = mongoose;

export const CourseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  professor: {},
});

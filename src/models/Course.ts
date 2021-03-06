import mongoose from 'mongoose';

const { Schema } = mongoose;

export const CourseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  professor: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  happy: {
    type: Number,
    required: true,
  },
  sad: {
    type: Number,
    required: true,
  },
  angry: {
    type: Number,
    required: true,
  },
  everydayStudy: {
    type: Number,
    required: true,
  },
  midtermStudy: {
    type: Number,
    required: true,
  },
  finalStudy: {
    type: Number,
    required: true,
  },
});

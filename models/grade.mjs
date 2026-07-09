import mongoose from "../db/conn.mjs";

const scoreSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const gradeSchema = new mongoose.Schema({
  learner_id: {
    type: Number,
    required: true,
  },
  class_id: {
    type: Number,
    required: true,
  },
  scores: [scoreSchema],
});

export default mongoose.model("Grade", gradeSchema);
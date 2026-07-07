// models/Prompt.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IPrompt extends Document {
  title: string;
  content: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const PromptSchema = new Schema<IPrompt>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Prevent model recompilation error in development (hot reloading)
export default mongoose.models.Prompt || mongoose.model<IPrompt>("Prompt", PromptSchema);
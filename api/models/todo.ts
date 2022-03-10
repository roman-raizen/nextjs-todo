import mongoose, { Types, Document, Model } from 'mongoose'

export interface ITodo {
  title: string
  completed: boolean
  createdAt: Date
}

export interface ITodoDocument extends ITodo, Document {}
export interface ITodoModel extends Model<ITodoDocument> {}

// defines todo model
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: { createdAt: true, updatedAt: false }
})

export default mongoose.models.Todo || mongoose.model<ITodoDocument, ITodoModel>('Todo', todoSchema)
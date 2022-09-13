import mongoose from 'mongoose'

const CountSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: [true, 'Please provide a unique id.'],
    },
    meal: {
        /* The name of this meal : Breakfast, Lunch, Snacks, Dinner*/

        type: String,
        required: [true, 'Please provide meal type'],
    },
    
    hall: {
        /* The hall of meal chosen True for UDH, False for LDH*/

        type: String,
        required: [true, 'Please provide hall'],
    },
    
    date: {
        type: Date,
        required: [true, 'Please provide date'],
    },
    
    count: {
        type: Number,
    },
})

export default mongoose.models.Count || mongoose.model('Count', CountSchema)

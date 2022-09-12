import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const MealSchema = new mongoose.Schema({
    meal: {
        /* The name of this meal : Breakfast, Lunch, Snacks, Dinner*/

        type: String,
        required: [true, 'Please provide meal type'],
    },
    
    hall: {
        /* The hall of meal chosen True for UDH, False for LDH*/

        type: Boolean,
        required: [true, 'Please provide hall'],
    },
    
    date: {
        type: Date,
        required: [true, 'Please provide date'],
    },
    
    count: {
        type: Number,
    },

    rating: {
        type: Number,
    }
})

export default mongoose.models.Meal || mongoose.model('Meal', MealSchema)

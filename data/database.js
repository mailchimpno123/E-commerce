// Import the Mongoose library
import mongoose from 'mongoose'

// Define an asynchronous function to connect to the database
export const connectDB = async () => {
	try {
		// Connect to the MongoDB database using the MONGO_URI environment variable
		const { connection } = await mongoose.connect(process.env.MONGO_URI, {
			dbName: 'E-commerce',
		})

		// Log a message to the console indicating that the server is connected to the database
		console.log(`Server connected to database ${connection.host}`)
	} catch (error) {
		// If an error occurs while connecting to the database, log an error message to the console and exit the process
		console.log('Some error occured', error)
		process.exit(1)
	}
}

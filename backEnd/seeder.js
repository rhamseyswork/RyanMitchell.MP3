import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js"; // Adjust path as per your project structure
import links from "./data/Links.js"; // Adjust path as per your project structure
import newsLetterUsers from "./data/signupFormUser.js"; // Adjust path as per your project structure
import User from "./models/userModel.js"; // Adjust model path as per your project structure
import Links from "./models/linksModel.js"; // Adjust model path as per your project structure
import NewsLetterUser from "./models/newsLetterModel.js"; // Adjust model path as per your project structure
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Links.deleteMany();
        await NewsLetterUser.deleteMany();

        const createdNewsLetterUsers = await NewsLetterUser.insertMany(newsLetterUsers);

        const adminUser = createdNewsLetterUsers[0]._id;

        const sampleLinks = links.map((link) => ({
            ...link,
            user: adminUser,
        }));

        await Links.insertMany(sampleLinks);

        console.log("Data Imported!".green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Links.deleteMany();
        await NewsLetterUser.deleteMany();

        console.log("Data Destroyed!".red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

// Command-line argument handling
if (process.argv[2] === "-d") {
    destroyData();
} else {
    importData();
}

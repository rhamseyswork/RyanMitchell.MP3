import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import links from "./data/Links.js";
import User from "./models/userModel.js";
import Links from "./models/linksModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Links.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;

        const sampleLinks = links.map((link) => {
            return { ...link, user: adminUser};
        });

        await Links.insertMany(sampleLinks);


        console.log("Data Imported!".green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Links.deleteMany();
        await User.deleteMany();

        console.log("Data Destroyed!".red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

//console.log(process.argv[1]);
if(process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
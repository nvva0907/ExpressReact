import { Sequelize } from "sequelize";

const sequelize = new Sequelize("chatbot", "root", "chatbot@2024", {
    host: "localhost",
    port: 3307,
    dialect: "mysql",
    logging: false,
});

export default sequelize

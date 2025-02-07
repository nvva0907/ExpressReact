import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const User = sequelize.define("User", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  created_by: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  created_time: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    comment: "1: đã xóa, 0: chưa xóa",
  },
  modified_by: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  modified_time: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  account_group_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  code: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  pass_word: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  user_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  is_receive: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  logo: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  logo_name: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
}, {
  tableName: "user_info", // ✅ Đặt tên bảng trùng với DDL
  timestamps: false, // ✅ Vì đã có trường `created_time` & `modified_time`
});

export default User;

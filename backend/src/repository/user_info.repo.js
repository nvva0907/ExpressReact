import User from "../models/user_info.model.js"; // Model Sequelize
import { Op } from "sequelize";
export async function getUsersPaginated(page, pageSize, searchInput) {
    const offset = (page - 1) * pageSize;
    const search = `%${searchInput}%`;

    const { count, rows } = await User.findAndCountAll({
        where: {
            deleted: false,

            [Op.or]: [
                { name: { [Op.like]: search } },
                { email: { [Op.like]: search } },
                { user_name: { [Op.like]: search } },
            ],
        },
        order: [["id", "DESC"]],
        limit: pageSize,
        offset: offset,
    });

    return {
        data: rows,
        totalElements: count,
        totalPages: Math.ceil(count / pageSize),
        currentPage: page,
    };
}
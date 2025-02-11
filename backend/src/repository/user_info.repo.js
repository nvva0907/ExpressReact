import { createPagination } from "../helpers/pagination_response.helper.js";
import User from "../models/user_info.model.js";
import { Op } from "sequelize";
export async function getUsersPaginated(page = 1, pageSize = 10, searchInput) {
    const offset = (page - 1) * pageSize;
    const search = `%${searchInput}%`;
    
    const { count , rows } = await User.findAndCountAll({
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
    return createPagination(rows, count, pageSize, page)
}
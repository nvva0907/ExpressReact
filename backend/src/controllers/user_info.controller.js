import { getUsersPaginated } from "../repository/user_info.repo.js";

export async function getAllPagination(req, res) {
    try {
        const { page = 1, pageSize = 10, search = "" } = req.query;
        const result = await getUsersPaginated(parseInt(page), parseInt(pageSize), search);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

import { getUsersPaginated } from "../repository/user_info.repo.js";

export async function getAllService(page, pageSize, search) {
  // Authorized or any logic here
  const users = await getUsersPaginated(page, pageSize, search);
  return users;
}

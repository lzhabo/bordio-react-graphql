import apiService from "@services/apiService";
import usersService from "@services/usersService";

apiService.init(process.env.API_BASE ?? "http://localhost:4000");
export { apiService, usersService };

import apiService from "./apiService";
import { IUser } from "@src/screens/Auth";

const queries = {
  register: `query Register($password: String!, $name: String!, $email: String!, $country: String!, $gender: String!, $terms: Boolean!) {
  register(password: $password, name: $name, email: $email, country: $country, gender: $gender, terms: $terms) {id name email country gender terms}
}`,
  user: `query User($id: String!){
  user(id: $id){id name email country gender}
}`,
};

export default {
  register: (data: IUser): Promise<IUser & { id: string }> =>
    apiService.makeApiRequest(`graphql`, {
      method: "POST",
      data: {
        query: queries.register,
        variables: data,
      },
    }),

  user: (id: string): Promise<IUser> =>
    apiService.makeApiRequest(`graphql`, {
      method: "POST",
      data: {
        query: queries.user,
        variables: { id },
      },
    }),
};

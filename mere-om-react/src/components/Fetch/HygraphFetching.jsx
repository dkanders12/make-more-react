import { useQuery } from "react-query";
import { request } from "graphql-request";

export const useGetQuery = (query, key) => {
  const baseUrl = `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cluu3cm1f09yh07ums327stbz/master`;

  const { data, isLoading, error } = useQuery({
    queryKey: [key],
    queryFn: async () => request(baseUrl, query),
  });

  return { data, isLoading, error };
};

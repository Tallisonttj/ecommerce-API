import { getUsers } from "@/api/httpClient";
import { useQuery } from "@tanstack/react-query";

export const useAuth = () => useQuery({queryKey: ['auth'], queryFn: () =>  getUsers() })
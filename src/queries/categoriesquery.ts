'use client'
import { getCategory, getProducts } from "@/api/httpClient";
import {useQuery } from "@tanstack/react-query";

export const useCategories = () => useQuery({queryKey: ['categorie'], queryFn: getCategory })
export const useProducts = () => useQuery({queryKey: ['products'], queryFn: () =>  getProducts() })
"use client";


import { CategoriesGrid } from "@/components/product/categoriesGrid";

import { Provider } from "./providers";

const page = () => {
  return (
    <Provider>
      <CategoriesGrid />
    </Provider>
  );
};
export default page;

import { instanceBase } from "@/api/axios";

class CategoryService {
  private BASE_URL = "/categories";

  async getCategories() {
    const response = await instanceBase.get(`${this.BASE_URL}`);
    return response.data;
  }

  async getCategoryById(id: number) {
    const response = await instanceBase.get(`${this.BASE_URL}/${id}`);
    return response.data;
  }
}

export const categoryService = new CategoryService();

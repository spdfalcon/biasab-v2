export interface Pagination {
  page: number;
  limit: number;
  total: number;
}

export interface BaseResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

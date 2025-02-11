export function createPagination(
    data = [],
    totalElements = 0,
    pageSize = 10,
    page = 1
  ) {
    return {
        data: data,
        totalElements: totalElements,
        totalPages: Math.ceil(totalElements / pageSize),
        currentPage: page,
    };
  }
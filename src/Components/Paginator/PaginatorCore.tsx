export class PaginatorCore {
  list: any[];
  capacityPerPage: number;

  get count() {
    return this.list.length;
  }

  get pageCount() {
    let maxNumber = Math.floor(this.count / this.capacityPerPage);
    if (this.count % this.capacityPerPage !== 0) {
      maxNumber++;
    }
    return maxNumber;
  }

  constructor(list: any[], capacityPerPage: number) {
    this.list = list;
    if (capacityPerPage > 0) {
      this.capacityPerPage = capacityPerPage;
    } else {
      throw new Error("capacityPerPage should be greater than zero");
    }
  }

  getPage(targetPage: number): any[] {
    targetPage = Math.floor(targetPage);
    if (targetPage <= this.pageCount && targetPage > 0) {
      return this.list.slice(
        (targetPage - 1) * this.capacityPerPage,
        targetPage * this.capacityPerPage
      );
    }
    return [];
  }
}

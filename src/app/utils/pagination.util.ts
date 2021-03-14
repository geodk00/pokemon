export interface Pagination {
    pages: number;
    currentPage: number;
    offsetStart: number;
    offsetEnd: number;
    itemCount: number;
    limit: number;
    isFirstPage: boolean;
    isLastPage: boolean;
}

export class PaginationUtility {
    
    private pagination: Pagination = {
        pages: 0,
        limit: 0,
        itemCount: 0,
        currentPage: 1,
        isFirstPage: true,
        isLastPage: false,
        offsetEnd: 0,
        offsetStart: 0
    }

    constructor( itemCount :number = 0, limit :number = 20) {
        this.pagination = {
            ...this.pagination,
            offsetEnd: this.pagination.offsetStart + limit,
            itemCount,
            limit,
            pages: Math.floor( itemCount / limit )
        }
    }

    getPagination(): Pagination {
        return this.pagination;
    }

    next(): void {
        const nextOffset = this.pagination.offsetStart + this.pagination.limit
        if (nextOffset > this.pagination.itemCount -1) {
            return;
        }

        this.pagination = {
            ...this.pagination,
            offsetStart: nextOffset,
            offsetEnd: nextOffset + this.pagination.limit,
            currentPage: this.calculateCurrentPage(nextOffset),
            isFirstPage: nextOffset === 0,
            isLastPage: nextOffset === this.pagination.itemCount - this.pagination.limit
        }
    }
    prev(): void {
        if (this.pagination.offsetStart === 0) {
            return;
        }

        const nextOffset = this.pagination.offsetStart - this.pagination.limit;

        this.pagination = {
            ...this.pagination,
            offsetStart: nextOffset,
            offsetEnd: nextOffset + this.pagination.limit,
            currentPage: this.calculateCurrentPage(nextOffset),
            isFirstPage: nextOffset === 0,
            isLastPage: nextOffset === this.pagination.itemCount - this.pagination.limit
        }

    }

    last(): void {
        const lastOffset = this.pagination.itemCount - this.pagination.limit

        this.pagination = {
            ...this.pagination,
            offsetEnd: this.pagination.itemCount,
            offsetStart: lastOffset,
            currentPage: this.calculateCurrentPage(lastOffset),
            isFirstPage: false,
            isLastPage: true
        }
    }

    first(): void {
        this.pagination = {
            ...this.pagination,
            offsetEnd: 0 + this.pagination.limit,
            offsetStart: 0,
            currentPage: 1,
            isFirstPage: true,
            isLastPage: false
        }
    }

    private calculateCurrentPage(offset: number): number {
        return Math.ceil(  offset / this.pagination.limit ) + 1 
    }
}
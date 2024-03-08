import { Notice } from "./notice.model";

export interface DataModel {
    data: Notice[];
    paging: {
      cursors: {
        before: string;
        after: string;
      };
      next: string;
    };
  }
interface IBlogDependencies {
  makeId: () => string;
}

interface IBlogOptions {
  coverImg: string;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

export interface IBlog extends IBlogOptions {
  id: string;
}

export default class BlogFactory {

  private makeId: () => string;

  constructor({makeId}: IBlogDependencies) {
    if (typeof makeId !== "function") {
      throw new Error("Invalid dependencies injected.");
    }

    this.makeId = makeId;
  }

  create({
    title,
    content,
    coverImg,
    createdAt,
    author,
  }: IBlogOptions): IBlog {
    // Business rules for a Blog
    const id = this.makeId()

    if (!title) {
      throw new Error("Blog must have a title");
    }

    if (!content) {
      throw new Error("Blog must have a content");
    }

    if (content.length < 10) {
      throw new Error("Blog content must be at least 10 characters long");
    }

    if (!author) {
      throw new Error("Blog must have an author");
    }

    if (!coverImg) {
      throw new Error("Blog must have a cover image");
    }

    if (!createdAt) {
      throw new Error("Blog must have a creation date");
    }


    return {
      coverImg,
      id,
      title,
      content,
      author,
      createdAt,
    };
  }
}

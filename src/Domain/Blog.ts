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


// Refactor the blog module once you're done with the project with this:

/*
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

class Blog {
  private id: string;
  private coverImg: string;
  private title: string;
  private content: string;
  private author: string;
  private createdAt: Date;

  constructor(id: string, options: IBlogOptions) {
    this.id = id;
    this.coverImg = options.coverImg;
    this.title = options.title;
    this.content = options.content;
    this.author = options.author;
    this.createdAt = options.createdAt;
  }

  // You can add any additional methods or properties specific to the Blog class here
}


export default class BlogFactory {
  private makeId: () => string;

  constructor({ makeId }: IBlogDependencies) {
    if (typeof makeId !== "function") {
      throw new Error("Invalid dependencies injected.");
    }

    this.makeId = makeId;
  }

  create(options: IBlogOptions): Blog {
    // Business rules for a Blog
    const id = this.makeId();

    if (!options.title) {
      throw new Error("Blog must have a title");
    }

    if (!options.content) {
      throw new Error("Blog must have content");
    }

    if (options.content.length < 10) {
      throw new Error("Blog content must be at least 10 characters long");
    }

    if (!options.author) {
      throw new Error("Blog must have an author");
    }

    if (!options.coverImg) {
      throw new Error("Blog must have a cover image");
    }

    if (!options.createdAt) {
      throw new Error("Blog must have a creation date");
    }

    return new Blog(id, options);
  }
}
*/
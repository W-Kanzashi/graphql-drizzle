import { MutationResolvers } from "./generated/graphql.js";
import { db } from "./db/db.js";
import { Books } from "./db/schema.js";

// Use the generated `MutationResolvers` type to type check our mutations!
const mutations: MutationResolvers = {
  // Below, we mock adding a new book. Our data set is static for this
  // example, so we won't actually modify our data.
  // addBook: async (_, { title, author }, { dataSources }) => {
  //   return dataSources.booksAPI.addBook({ title, author });
  // },

  addBookDb: async (_, { title, author }) => {
    const book = await db.insert(Books).values({
      title,
      author,
    });

    console.log(book);

    // return { title: book.title, author: book.author };
    return { title: "Heloo", author: "World" };
  },
};

export default mutations;

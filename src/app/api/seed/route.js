// 1. Import db library
// - import better-sqlite3 library: interacts with sqlite dbs synchronous
import sql from "better-sqlite3";

// 2. Provide dummy data for seeding: best if it is an array of objects
import { dummyMeals } from "@/lib/dummyMeals"

// 3. Create and connect to the db
const db = sql("meals.db");


// 4. Create & populate meals table(seeding)
// - use same pattern to create & populate another table
async function seedMeals() {
  // create table if non-existent
  db.prepare(`
    CREATE TABLE IF NOT EXISTS meals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      image TEXT NOT NULL,
      summary TEXT NOT NULL,
      instructions TEXT NOT NULL,
      creator TEXT NOT NULL,
      creator_email TEXT NOT NULL
    );
  `).run();

  // insertion state,emt
  const mealInsertStatement = db.prepare(`
    INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
    VALUES (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)
    ON CONFLICT(slug) DO NOTHING;
  `);
  // loop the data and run insertion statement in each
  for (const meal of dummyMeals) {
    mealInsertStatement.run(meal);
  }
}

// export async function GET() {
//   return new Response(
//     JSON.stringify({
//       message:
//         "Uncomment this file and remove this line. You can delete this file when you are finished.",
//     }),
//     { headers: { "Content-Type": "application/json" } }
//   );
// }

export async function GET() {
  try {
    await seedMeals();  // Make sure to await the asynchronous seeding process
    return new Response(
      JSON.stringify({ message: "Database seeded successfully" }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "An error occurred during seeding." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}



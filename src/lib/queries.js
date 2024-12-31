import sql from "better-sqlite3";

const db = sql("meals.db")

// fetch all meals from database
export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    //throw new Error("loading meals failed");
    return db.prepare("SELECT * FROM meals").all();
}


export function getMeal(slug) {
    return db.prepare("SELECT * FROM meals WHERE slug=?").get(slug);
}
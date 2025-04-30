import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
    await new Promise((reslove) => { setTimeout(reslove, 2000) });
    // throw new Error("meals Data Error");
    return db.prepare('SELECT * FROM meals').all();
}

export async function getMeal(slug) {
    console.log("get Data DB" + slug);
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}
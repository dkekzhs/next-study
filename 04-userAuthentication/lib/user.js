import db from "./db";

export function createUser(email, password){
    const result = db.prepare('INSERT INTO users (email,password) VALUES (?,?)').bind(email,password)
    .run();

    return result.lastInsertRowid;
}

export function getUserByEmail(email){
    return db.prepare('SELECT * FROM users WHERE email =?')
    .get(email);
}
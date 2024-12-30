const sql = require('better-sqlite3');
const db = sql('meals.db');

const resData = db.prepare("SELECT * FROM meals").all()
console.log(resData);

export async function GET() {
    try{
        return new Response(
            JSON.stringify(resData)
        )
    } catch(error) {
        JSON.stringify({message: `${error} occurred`})
    }

}
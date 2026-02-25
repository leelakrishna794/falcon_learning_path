const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

async function getData(dbPath, table) {
    return new Promise((resolve) => {
        const db = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                console.log(`Error opening ${dbPath}:`, err.message);
                resolve(null);
                return;
            }
        });

        db.all(`SELECT * FROM ${table}`, (err, rows) => {
            if (err) {
                console.log(`Error querying ${table} in ${dbPath}:`, err.message);
                resolve(null);
            } else {
                resolve(rows);
            }
            db.close();
        });
    });
}

async function check() {
    const dbs = ['./career_hq.db', './architect.db'];
    const tables = ['progress', 'missions'];
    const results = {};

    for (const dbPath of dbs) {
        results[dbPath] = {};
        for (const table of tables) {
            const rows = await getData(dbPath, table);
            results[dbPath][table] = rows;
        }
    }
    fs.writeFileSync('db_results.json', JSON.stringify(results, null, 2));
    console.log('Detailed results written to db_results.json');
}

check();

const express = require('express');
const mysql = require('mysql2');

const PORT = 3000; 
const HOST = '0.0.0.0'; 

const pool = mysql.createPool({
    host: 'db', 
    user: 'root',
    password: '123',
    database: 'fiap',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const app = express();
app.use(express.json()); 

app.get('/indicador/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    const query = 'SELECT * FROM ods WHERE codigo = ?';

    pool.query(query, [codigo], (err, results) => {
        if (err) {
            console.error('Error executing SELECT query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.json(results.length > 0 ? results : { message: 'No records found' });
    });
});

    app.get('/objetivos', (req, res) => {
            const queryObjetivos = 'SELECT * FROM ObjetivosODS';
        const queryOds = 'SELECT DISTINCT codigo, descricao FROM ods';
    
        pool.query(queryObjetivos, (err, resultadosObjetivos) => {
            if (err) {
                console.error('Error executing SELECT query for ObjetivosODS:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
    
            pool.query(queryOds, (err, resultadosOds) => {
                if (err) {
                    console.error('Error executing SELECT query for ods:', err);
                    return res.status(500).json({ error: 'Internal Server Error' });
                }
    
                res.json({
                    objetivos: resultadosObjetivos.length > 0 ? resultadosObjetivos : 'No objectives found',
                    ods: resultadosOds.length > 0 ? resultadosOds : 'No ods records found'
                });
            });
        });
    });
    


app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});

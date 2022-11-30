import {pool} from '../db';

export const addAdmin = async (body: { email: string; password: string; }) => {
    try {
        await pool.query(
            "INSERT INTO admins (email, password) VALUES ($1, $2)", [body.email, body.password]
        );
        return console.log("New admin added");
    } catch (err) {
        throw { status: 500, message: err };
    }
};

export const addHost = async (body: { host_name:string; department: string; email: string; phone: number; }) => {
    try {
        await pool.query(
            `INSERT INTO hosts (host_name, department, email, phone)
        VALUES ($1, $2, $3, $4)`, [body.host_name, body.department, body.email, body.phone]
        );
        return console.log("Employee added");
    } catch (err) {
        throw { status: 500, message: err };
    }
};

export const modifyHost = async (body: { host_name: string; department: string; email: any; phone: number; id: number; }) => {
    try {
        await pool.query(
            `UPDATE hosts
         SET host_name = $1, department = $2, email = $3, phone = $4
         WHERE id = $5;
        `, [body.host_name, body.department, body.email, body.phone, body.id]
        );
        return console.log("Employee updated");
    } catch (err) {
        throw { status: 500, message: err };
    }
};

export const updateVisitorsforDelete = async (body: { id: number; }) => {
    try {
        await pool.query(
            `UPDATE visitors
         SET host_id = null
         WHERE host_id = $1;
        `, [body.id]
        );
        return console.log("Visitors updated");
    } catch (err) {
        throw { status: 500, message: err };
    }
};

export const deleteHost = async (body: { id: number; }) => { 
    try {
        await pool.query(
            `DELETE FROM hosts
         WHERE id = $1
        `, [body.id]
        );
        console.log("Employee deleted");
    } catch (err) {
        throw { status: 500, message: err };
    }
};

export const getAdminPassword = async (email: string) => {
    return pool.query(
        "SELECT password FROM admins WHERE email = $1", [email]
    )
    .then(res => {
        if (!res.rows[0]){
            console.log("Doesn't exist")
            return 
        } else {
            return res.rows[0].password
        }
    })
    .catch(err => {
        console.error(err)
        throw {status: err?.status || 500, message: err.message}
    })
};
export const getAllEmployees = async () => {
    return pool.query(
        `SELECT * FROM hosts`
    )
    .then(res => {
        return res.rows
    })
    .catch(err => {
        throw {status: err?.status || 500, message: err.message}
    })
};

export const getVisitors = async () => {
    return pool.query(
        `SELECT * FROM visitors`
    )
    .then(res => {
        return res.rows
    })
    .catch(err => {
        throw {status: err?.status || 500, message: err.message}
    })
};

export const getDailyVisits = async () => {
    return pool.query(
        `SELECT date, count(*) FROM visitors
        WHERE date > current_date - interval '30' day
        GROUP BY date
        ORDER BY date asc`
    )
    .then(res => {
        return res.rows
    })
    .catch(err => {
        throw {status: err?.status || 500, message: err.message}
    })
};

export const getBusiestHosts = async () => {
    return pool.query(
        `SELECT hosts.host_name, count(visitors.host_id)
         FROM hosts
         JOIN visitors
         ON hosts.id = visitors.host_id
         WHERE date > current_date - interval '90' day
         GROUP BY 1, 2`
    )
    .then(res => {
        return res.rows
    })
    .catch(err => {
        throw {status: err?.status || 500, message: err.message}
    })
};
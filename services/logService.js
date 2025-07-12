

export const getAllLogs = async () => {
    const query = 'SELECT * FROM logs ORDER BY timestamp DESC';
    try {
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error fetching logs:', error);
        throw error;
    }   
}
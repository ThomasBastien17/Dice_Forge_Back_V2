class ProfileDatamapper {

    constructor(pool) {
        this.pool = pool;
    }

    async getProfile() {
        const query = 'SELECT * FROM "user"';
        const result = await this.pool.query(query);
        return result.rows[0] || null;
    }

    async getProfileById(id) {
        const query = 'SELECT * FROM "user" WHERE id = $1';
        const result = await this.pool.query(query, [id]);
        return result.rows[0] || null;
    }
    
    async updateProfile(profile) {
        
        const fields = [];
        const values = [];
        let index = 1;

        if (profile.lastname !== undefined) {
            fields.push(`name = $${index++}`);
            values.push(profile.lastname);
        }
        if (profile.firstname !== undefined) {
            fields.push(`image = $${index++}`);
            values.push(profile.firstname);
        }

        fields.push(`updated_at = NOW()`);
        values.push(profile.id);

        const query = `
            UPDATE profile
            SET ${fields.join(', ')}
            WHERE id = $${index}
            RETURNING *;
        `;

        const result = await this.pool.query(query, values);
        return result.rows[0];
    }
}

export default ProfileDatamapper;
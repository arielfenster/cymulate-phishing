db.createUser({
	user: 'admin',
	pwd: 'admin123',
	roles: [{ role: 'dbOwner', db: 'cymulate' }],
});

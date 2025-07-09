const corsOptions = {
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://roje6147.odns.fr', 'http;//172.28.229.157:5173'], // adresse du serveur front
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], // En-têtes autorisés
  credentials: true, 
};

export default corsOptions;


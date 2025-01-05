const corsOptions = {
  origin: ['dice-forge-front.vercel.app', 'http://roje6147.odns.fr'], // adresse du serveur front
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], // En-têtes autorisés
  credentials: true, 
};

export default corsOptions;


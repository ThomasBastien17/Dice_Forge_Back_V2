function errorHandler(err, req, res, next) {
    // Définir un code de statut par défaut si absent
    const status = err.status || 500;

    // Structure de la réponse JSON
    const response = {
        success: false,
        error: {
            message: err.message || 'Internal Server Error',
        },
        timestamp: new Date().toISOString(),
    };

    // Inclure les détails de l'erreur uniquement en mode développement
    if (process.env.NODE_ENV === 'development') {
        response.error.stack = err.stack || null;
        response.error.details = err.details || null;
    }

    // Réponse HTTP
    res.status(status).json(response);
}

export default errorHandler;

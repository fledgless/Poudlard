const MatiereService = require('../Services/MatiereService');

class MatiereController {

    async getAllMatiere(request, response){
        try {
            const matieres = await MatiereService.getAllMatiere();
            response.json(matieres);
        } catch (error) {
            console.log(error);
            response.status(500);
            response.json({error : "Une erreur est survenue lors de la récupération des Matieres"})
        }
    }
}

module.exports = new MatiereController();
import { Router } from 'express';

const router: Router = Router();

interface Client {
    id: Number,
    name: String,
    familyName: String
}

let clients: Array<Client> = [
    { id: 1, name: 'Antonio', familyName: 'Lozano'},
    { id: 2, name: 'Joselyn', familyName: 'Cáceres'},
    { id: 3, name: 'Fernando', familyName: 'Gisbert'},
    { id: 4, name: 'Alexandru', familyName: 'Marian'},
    { id: 5, name: 'Ana', familyName: 'Belén'}
];

// Declaración una ruta/recurso de mi app en NODE
router.get('/:idClient', (req, res) => {

    let client = clients.filter(obj => obj.id === Number(req.params.idClient));
    res.send(client);

});

router.get('/', (req, res) => {
    res.send(clients);
});

export default router;

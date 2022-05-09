/** **************************** ROUTE EXAMPLE **************************** **/

// import { Router } from 'express';

// import ExamplesRepository from '../repositories/ExamplesRepository';
// import CreateExampleService from '../services/CreateExampleService';


// const ExampleRouter = Router();

// const ExamplesRepository = new ExamplesRepository();


// ExampleRouter.get('/', (request, response) => {
//   try {
//     const Examples = ExamplesRepository.all();
//     const balance = ExamplesRepository.getBalance();

//     return response.json({
//       Examples,
//       balance,
//     });
//   } catch (err) {
//     return response.status(400).json({ error: err.message });
//   }
// });



// ExampleRouter.post('/', (request, response) => {
//   try {
//     const { title, value, type } = request.body;

//     const createExample = new CreateExampleService(
//       ExamplesRepository,
//     );

//     const Example = createExample.execute({ title, value, type });

//     return response.json(Example);
//   } catch (err) {
//     return response.status(400).json({ error: err.message });
//   }
// });



// export default ExampleRouter;
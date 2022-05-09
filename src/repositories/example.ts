// import Example from '../models/Example';

// interface Balance {
//   income: number;
//   outcome: number;
//   total: number;
// }

// interface ExampleDTO {
//   title: string;
//   value: number;
//   type: 'income' | 'outcome';
// }

// class ExamplesRepository {
//   private Examples: Example[];

//   constructor() {
//     this.Examples = [];
//   }

//   public all(): Example[] {
//     return this.Examples;
//   }

//   public getBalance(): Balance {
//     const { income, outcome } = this.Examples.reduce(
//       (accumulator: Balance, actualExample: Example) => {
//         switch (actualExample.type) {
//           case 'income':
//             accumulator.income += actualExample.value;
//             break;
//           case 'outcome':
//             accumulator.outcome += actualExample.value;
//             break;
//           default:
//             break;
//         }

//         return accumulator;
//       },
//       {
//         income: 0,
//         outcome: 0,
//         total: 0,
//       },
//     );

//     const total = income - outcome;

//     return { income, outcome, total };
//   }

//   public create({ title, value, type }: ExampleDTO): Example {
//     const Example = new Example({ title, value, type });

//     this.Examples.push(Example);

//     return Example;
//   }
// }

// export default ExamplesRepository;
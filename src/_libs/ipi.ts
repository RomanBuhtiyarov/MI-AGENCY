interface Question {
  number: number;
  text: string;
  type: number;
}

export const ipi = (lang: any) => {
  const questions: Question[] = [];

  for (let i = 1; i <= 30; i++) {
    let type: number;

    if (i === 1 || i === 7 || i === 13 || i === 19 || i === 25) {
      type = 1;
    } else if (i === 2 || i === 8 || i === 14 || i === 20 || i === 26) {
      type = 2;
    } else if (i === 3 || i === 9 || i === 15 || i === 21 || i === 27) {
      type = 3;
    } else if (i === 4 || i === 10 || i === 16 || i === 22 || i === 28) {
      type = 4;
    } else if (i === 5 || i === 11 || i === 17 || i === 23 || i === 29) {
      type = 5;
    } else {
      type = 6;
    }

    questions.push({
      number: i,
      text: lang.ipi_test[`block_${i}`],
      type: type,
    });
  }

  return questions;
};

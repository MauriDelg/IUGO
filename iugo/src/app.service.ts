import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  fibonacci(num: number): number {
    if (num < 2) {
      return num;
    }
    return this.fibonacci(num - 2) + this.fibonacci(num - 1);
  }

  /**
   * La funcion validara que la palabra exista y no este vacia, caso contrario retornara -1
   *
   * Si existe la palabra, instanciara un Map para guardar la cantidad de ocurrencias encontradas.
   * Se recorrera la palabra letra por letra, si ya existe la letra en el Map se continua, sino, se guarda
   * la cantidad de ocurrencias.
   *
   * Luego, se evalua cual es el valor maximo guardado en el Map, y se busca la Key de la primera ocurrencia
   * igualada con el valor maximo, lo que retornara una letra. Con esta letra se busca el index en la palabra
   *  y se retorna.
   *
   */
  firstMostRepeatedLetter(word: string): number {
    if (!word) {
      return -1;
    }

    const characterCounter = new Map<string, number>();
    word.toLocaleLowerCase();

    for (const letter of word) {
      if (characterCounter.has(letter)) continue;
      const count = word.split('').reduce((a, b) => {
        return b === letter ? a + 1 : a;
      }, 0);
      characterCounter.set(letter, count);
    }

    const maxNumber = Math.max(...characterCounter.values());
    for (const letter of characterCounter.keys()) {
      if (characterCounter.get(letter) === maxNumber) {
        return word.indexOf(letter);
      }
    }
  }

  parOImpar(num: number): string {
    return num & 1 ? 'Impar' : 'Par';
  }
}

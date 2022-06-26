import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'values'
})
export class ValuesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 'male':
        return 'Мужской';
      case 'female':
        return 'Женский';
      case true:
        return 'Да';
      case false:
        return 'Нет';
      case 'UK':
        return 'Великобритания';
      case 'UA':
        return 'Украина';
      case 'KZ':
        return 'Казахстан';
      default:
        return value;
    }
  }

}

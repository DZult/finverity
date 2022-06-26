import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fields'
})
export class FieldsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 'first_name':
        return 'Имя'
      case 'last_name':
        return 'Фамилия'
      case 'middle_name':
        return 'Отчество'
      case 'birth_date':
        return 'Дата рождения'
      case 'sex':
        return 'Пол'
      case 'phone':
        return 'Номер телефона'
      case 'group_of_clients':
        return 'Группа клиентов'
      case 'coordinator':
        return 'Координатор'
      case 'is_send_sms':
        return 'Не отправлять СМС'
      case 'index':
        return 'Индекс'
      case 'country':
        return 'Страна'
      case 'region':
        return 'Область'
      case 'city':
        return 'Город'
      case 'street':
        return 'Улица'
      case 'house':
        return 'Дом'
      case 'document_type':
        return 'Тип документа'
      case 'document_series':
        return 'Серия'
      case 'document_number':
        return 'Номер'
      case 'document_issuer':
        return 'Кем выдан'
      case 'document_issue_date':
        return 'Дата выдачи'
      case 'document_file':
        return 'Файл'
      default:
        return ''
    }
  }

}

function createObjectNonProto() {  //объявляем функцию
  return Object.create(null);      //весто нуля можно и объект, но эт уже прототип
}

//Задание 3
//
//Написать функцию, которая создает пустой объект, но без прототипа.
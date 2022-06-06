<template>
  <div class="contacts">
    <h3 class="contacts__heading">Контактная информация</h3>
    <table>
      <tbody>
        <tr>
          <td>Юридический адрес</td>
          <td>
            663713,Красноярский край, Дзержинский район, д.Улюколь, ул. Озерная,
            2
          </td>
        </tr>
        <tr>
          <td>Почтовый адрес</td>
          <td>
            663713, Красноярский край, Дзержинский район, д. Улюколь, ул.
            Озерная -2
          </td>
        </tr>
        <tr>
          <td>Телефон</td>
          <td>(39167) 9-02-46</td>
        </tr>
        <tr>
          <td>Эл. почта</td>
          <td>
            <span><a href="mailto:ulukol@mail.ru">ulukol@mail.ru</a></span>
          </td>
        </tr>
        <tr>
          <td>График работы</td>
          <td>
            Понедельника - пятница с 8.00 до 17.00<br />Перерыв на обед с 12.00
            до 13.00
          </td>
        </tr>
        <tr>
          <td>Схема проезда</td>
          <td>
            <a
              href="http://maps.yandex.ru/?rtext=56.008691%2C92.870529~56.707031%2C94.923305&amp;sll=94.349427%2C56.308453&amp;sspn=4.248962%2C1.305406&amp;rtm=atm&amp;source=route&amp;ll=94.349427%2C56.308453&amp;spn=4.248962%2C1.305406&amp;z=9&amp;l=map"
              >Более подробный маршрут Вы можете просмотреть перейдя по
              ссылке</a
            >
          </td>
        </tr>
      </tbody>
    </table>
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2189.870995096704!2d94.92666831610603!3d56.710828925162645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5cd97b12b1b7eeff%3A0xc8abcb7dfea96ab6!2z0JTQt9C10YDQttC40L3RgdC60LjQuSDQn9GB0LjRhdC-0L3QtdCy0YDQvtC70L7Qs9C40YfQtdGB0LrQuNC5INCY0L3RgtC10YDQvdCw0YI!5e0!3m2!1sru!2sru!4v1653989044258!5m2!1sru!2sru"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contacts",
};
</script>
<style scoped>
.contacts__heading {
  margin-top: 0;
}
</style>

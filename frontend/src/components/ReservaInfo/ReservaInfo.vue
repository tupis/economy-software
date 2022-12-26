<template>
  <div>
    <div>
      <p>Status: {{ reserva.status }}</p>
      <p>Numero de reserva: {{ reserva.numeroreserva }}</p>
      <p>Numero de apartamento: {{ reserva.apartamento }}</p>
      <p>Data de checkin: {{ reserva.datacheckin }}</p>
      <p v-show="reserva.datacheckout">
        Data de checkout: {{ reserva.datacheckout }}
      </p>
    </div>
  </div>
</template>

<script>
class Reserva {
  constructor(
    id,
    idhotel,
    numeroreserva,
    apartamento,
    datacheckin,
    datacheckout,
    status,
    hospedes
  ) {
    this.status = status;
    this.numeroreserva = numeroreserva;
    this.datacheckin = datacheckin;
    this.datacheckout = datacheckout;
    this.apartamento = apartamento;
    this.id = id;
    this.idhotel = idhotel;
    this.hospedes = hospedes;
  }
}

export default {
  name: "ReservaInfo",
  props: {
    reserva: new Reserva(),
  },
};
</script>

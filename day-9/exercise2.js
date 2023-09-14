/** 
2. buat class Train
-masinis duduk di paling depan
-maksimal penumpang 10
-tidak boleh ada penumpang dengan nama yang sama
- penumpang mengisi urutan kursi dari depan terlebih dahulu
-penumpang bisa keluar kereta
-penumpang baru, mengisi kursi kosong terlebi dahulu 
sebelum ke kursi belakang
*/
class Train {
    constructor() {
      this.maxPassengers = 10;
      this.passengers = [];
    }
  
    addPassenger(passengerName) {
      // Cek apakah kereta sudah penuh
      if (this.passengers.length >= this.maxPassengers) {
        console.log(`Kereta sudah penuh. ${passengerName} tidak bisa naik.`);
        return;
      }
  
      // Cek apakah penumpang dengan nama yang sama sudah ada di kereta
      if (this.passengers.includes(passengerName)) {
        console.log(`Penumpang dengan nama ${passengerName} sudah ada di kereta.`);
        return;
      }
  
      // Cari kursi kosong di paling depan
      let seatIndex = 0;
      while (seatIndex < this.passengers.length && this.passengers[seatIndex] === null) {
        seatIndex++;
      }
  
      // Jika semua kursi di depan sudah terisi, penumpang akan ditempatkan di kursi belakang
      if (seatIndex === this.passengers.length) {
        this.passengers.push(passengerName);
      } else {
        // Tambahkan penumpang ke kursi di depan yang kosong
        this.passengers[seatIndex] = passengerName;
      }
  
      console.log(`${passengerName} telah naik ke kereta.`);
    }
  
    removePassenger(passengerName) {
      const passengerIndex = this.passengers.indexOf(passengerName);
      if (passengerIndex === -1) {
        console.log(`${passengerName} tidak ada di kereta.`);
        return;
      }
  
      this.passengers[passengerIndex] = null;
      console.log(`${passengerName} telah turun dari kereta.`);
    }
  
    displayPassengers() {
      console.log('Daftar penumpang di kereta:');
      this.passengers.forEach((passenger, index) => {
        if (passenger !== null) {
          console.log(`${index + 1}. ${passenger}`);
        }
      });
    }
  }
  
  // Contoh penggunaan class Train
  const train = new Train();
  
  train.addPassenger("John");
  train.addPassenger("Alice");
  train.addPassenger("Bob");
  train.addPassenger("Alice"); // Ini akan mencetak pesan bahwa Alice sudah ada di kereta
  train.addPassenger("Charlie");
  train.addPassenger("David");
  train.addPassenger("Eve");
  train.addPassenger("Frank");
  train.addPassenger("Grace");
  train.addPassenger("Hank");
  train.addPassenger("Ivy"); // Ini akan mencetak pesan bahwa kereta sudah penuh
  
  train.displayPassengers();
  
  train.removePassenger("John");
  train.removePassenger("Alice");
  train.displayPassengers();
  
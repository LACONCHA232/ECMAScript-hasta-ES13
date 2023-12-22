
const regex = /\b(Diego)+\b/g;

const nombres = 'Diana, Kiria,Diego,Logan';

for (const match of nombres.matchAll(regex)){
    console.log(match);
}

import expresso from '../assets/coffee/Expresso.svg'
import expressoAmericano from '../assets/coffee/Americano.svg'
import expressoCremoso from '../assets/coffee/Expresso_Cremoso.svg'
import expressoGelado from '../assets/coffee/Café_Gelado.svg'
import cafeLeite from '../assets/coffee/Café_com_Leite.svg'
import latte from '../assets/coffee/Latte.svg'
import capuccino from '../assets/coffee/Capuccino.svg'
import macchiato from '../assets/coffee/Macchiato.svg'
import mocaccino from '../assets/coffee/Mochaccino.svg'
import chocolateQuente from '../assets/coffee/Chocolate_Quente.svg'
import cubano from '../assets/coffee/Cubano.svg'
import havaiano from '../assets/coffee/Havaiano.svg'
import arabe from '../assets/coffee/Árabe.svg'
import irlandes from '../assets/coffee/Irlandês.svg'

export interface Coffee {
  type: string
  tags: string[]
  title: string
  subTitle: string
  price: number
  amount: number
  image: string
}

export const coffeeListData: Coffee[] = [
  {
    type: 'expresso',
    tags: ['TRADICIONAL'],
    title: 'Expresso Tradicional',
    subTitle: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    amount: 0,
    image: expresso,
  },
  {
    type: 'expresso_americano',
    tags: ['TRADICIONAL'],
    title: 'Expresso Americano',
    subTitle: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    amount: 0,
    image: expressoAmericano,
  },
  {
    type: 'expresso_cremoso',
    tags: ['TRADICIONAL'],
    title: 'Expresso Cremoso',
    subTitle: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    amount: 0,
    image: expressoCremoso,
  },
  {
    type: 'expresso_gelado',
    tags: ['TRADICIONAL', 'GELADO'],
    title: 'Expresso Gelado',
    subTitle: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    amount: 0,
    image: expressoGelado,
  },
  {
    type: 'cafe_leite',
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Café com Leite',
    subTitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    amount: 0,
    image: cafeLeite,
  },
  {
    type: 'latte',
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Latte',
    subTitle: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    amount: 0,
    image: latte,
  },
  {
    type: 'capuccino',
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Capuccino',
    subTitle: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    amount: 0,
    image: capuccino,
  },
  {
    type: 'macchiato',
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Macchiato',
    subTitle: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    amount: 0,
    image: macchiato,
  },
  {
    type: 'mocaccino',
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Mocaccino',
    subTitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    amount: 0,
    image: mocaccino,
  },
  {
    type: 'chocolate_quente',
    tags: ['ESPECIAL', 'COM LEITE'],
    title: 'Chocolate Quente',
    subTitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    amount: 0,
    image: chocolateQuente,
  },
  {
    type: 'cubano',
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    title: 'Cubano',
    subTitle: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    amount: 0,
    image: cubano,
  },
  {
    type: 'havaiano',
    tags: ['ESPECIAL'],
    title: 'Havaiano',
    subTitle: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    amount: 0,
    image: havaiano,
  },
  {
    type: 'arabe',
    tags: ['ESPECIAL'],
    title: 'Árabe',
    subTitle: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    amount: 0,
    image: arabe,
  },
  {
    type: 'irlandes',
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    title: 'Irlandês',
    subTitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    amount: 0,
    image: irlandes,
  },
]

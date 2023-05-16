import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from 'phosphor-react'
import cupOfCoffee from '../../assets/cup_coffee.svg'
import expresso from '../../assets/coffee/Type=Expresso.svg'
import {
  CoffeeCard,
  CoffeeList,
  CoffeeListContainer,
  ContainerShortInfos,
  Counter,
  HomeContainer,
  IntroContainer,
  MainText,
  ShortInfo,
  TableInfos,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <div>
          <MainText>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </MainText>
          <TableInfos>
            <ContainerShortInfos>
              <ShortInfo background_color="yellowDark">
                <span>
                  <ShoppingCart weight="fill" />
                </span>
                Compra simples e segura
              </ShortInfo>
              <ShortInfo background_color="gray">
                <span>
                  <Package weight="fill" />
                </span>
                Embalagem mantém o café intacto
              </ShortInfo>
            </ContainerShortInfos>
            <ContainerShortInfos>
              <ShortInfo background_color="yellow">
                <span>
                  <Timer weight="fill" />
                </span>
                Entrega rápida e rastreada
              </ShortInfo>
              <ShortInfo background_color="purple">
                <span>
                  <Coffee weight="fill" />
                </span>
                O café chega fresquinho até você
              </ShortInfo>
            </ContainerShortInfos>
          </TableInfos>
        </div>
        <img src={cupOfCoffee} alt="" />
      </IntroContainer>

      <CoffeeListContainer>
        <h1>Nossos cafés</h1>

        <CoffeeList>
          <CoffeeCard>
            <img src={expresso} alt="" />
            <label>TRADICIONAL</label>
            <h3>Expresso Tradicional</h3>
            <text>O tradicional café feito com água quente e grãos moídos</text>
            <div>
              <span>
                <span>R$ </span>9,90
              </span>
              <Counter>
                <button>
                  <Minus size={14} weight="bold" />
                </button>
                <p>0</p>
                <button>
                  <Plus size={14} weight="bold" />
                </button>
              </Counter>
              <button>
                <ShoppingCart size={22} weight="fill" />
              </button>
            </div>
          </CoffeeCard>
        </CoffeeList>
      </CoffeeListContainer>
    </HomeContainer>
  )
}

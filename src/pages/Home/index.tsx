import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import cupOfCoffee from '../../assets/cup_coffee.svg'
import {
  CoffeeList,
  CoffeeListContainer,
  ContainerShortInfos,
  HomeContainer,
  IntroContainer,
  MainText,
  ShortInfo,
  TableInfos,
} from './styles'
import { CoffeeCard } from './components/CoffeeCard'

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
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </CoffeeList>
      </CoffeeListContainer>
    </HomeContainer>
  )
}

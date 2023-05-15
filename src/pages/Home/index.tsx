import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import cupOfCoffee from '../../assets/cupCoffee.svg'
import {
  ContainerShortInfos,
  HomeContainer,
  MainText,
  ShortInfo,
  TableInfos,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <header>
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
      </header>

      <body></body>
    </HomeContainer>
  )
}

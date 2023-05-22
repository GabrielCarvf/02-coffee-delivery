import { useFormContext } from 'react-hook-form'
import { FlexColumn, FlexRowWrap, FormInputsContainer } from './styles'
import { NewOrderFormData } from '../..'
import InputMask from 'react-input-mask'

export function OrderInformationForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<NewOrderFormData>()

  return (
    <FormInputsContainer>
      <FlexRowWrap>
        <FlexColumn width="35%">
          <InputMask
            mask="99999-999"
            maskChar={null}
            type="text"
            id="zipCode"
            placeholder="CEP"
            {...register('zipCode')}
          />
          {errors?.zipCode && <span>{errors.zipCode.message}</span>}
        </FlexColumn>
      </FlexRowWrap>
      <FlexRowWrap>
        <FlexColumn width="100%">
          <input
            type="text"
            id="address"
            placeholder="Rua"
            {...register('address')}
          />
          {errors?.address && <span>{errors.address.message}</span>}
        </FlexColumn>
      </FlexRowWrap>
      <FlexRowWrap>
        <FlexColumn width="35%">
          <InputMask
            mask="99999"
            maskChar={null}
            type="text"
            id="number"
            placeholder="Número"
            {...register('number')}
          />
          {errors?.number && <span>{errors.number.message}</span>}
        </FlexColumn>
        <FlexColumn width="65%">
          <input
            type="text"
            id="complement"
            placeholder="Complemento"
            {...register('complement')}
          />
          {errors?.complement && <span>{errors.complement.message}</span>}
        </FlexColumn>
      </FlexRowWrap>
      <FlexRowWrap>
        <FlexColumn width="35%">
          <input
            type="text"
            id="district"
            placeholder="Bairro"
            {...register('district')}
          />
          {errors?.district && <span>{errors.district.message}</span>}
        </FlexColumn>
        <FlexColumn width="55%">
          <input
            type="text"
            id="city"
            placeholder="Cidade"
            {...register('city')}
          />
          {errors?.city && <span>{errors.city.message}</span>}
        </FlexColumn>
        <FlexColumn width="10%">
          <InputMask
            mask="aa"
            maskChar={null}
            type="text"
            id="federatedUnit"
            placeholder="UF"
            {...register('federatedUnit')}
          />
          {errors?.federatedUnit && <span>{errors.federatedUnit.message}</span>}
        </FlexColumn>
      </FlexRowWrap>
    </FormInputsContainer>
  )
}

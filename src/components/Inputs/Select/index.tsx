import { GroupBase, StylesConfig } from 'react-select'
import CreateSelect, { CreatableProps } from 'react-select/creatable'

import { BaseInput } from '../styles'
import { ReactNode } from 'react'
import { Field } from './styles'

export function selectStyles<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(): StylesConfig<Option, IsMulti, Group> {
  return {
    indicatorsContainer: () => ({
      display: 'none',
    }),
    container: (base) => ({
      ...base,
      flex: 1,
    }),
    control: (base) => ({
      ...base,
      height: '3rem',
      background: 'transparent',
      color: '#FFF',
      border: 0,
      boxShadow: 'none',
    }),
  }
}

interface SelectProps {
  children?: ReactNode
}

export const Select = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  children,
  ...props
}: CreatableProps<Option, IsMulti, Group> & SelectProps) => {
  return (
    <BaseInput>
      <label htmlFor="productName">Nome do produto</label>

      <Field>
        <CreateSelect
          {...props}
          styles={selectStyles() as StylesConfig<Option, IsMulti, Group>}
        />
        {children}
      </Field>
    </BaseInput>
  )
}

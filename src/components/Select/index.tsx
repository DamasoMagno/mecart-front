import { GroupBase } from 'react-select'
import CreateSelect, { CreatableProps } from 'react-select/creatable'

export const Select = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: CreatableProps<Option, IsMulti, Group>,
) => {
  return (
    <CreateSelect
      {...props}
      styles={{
        indicatorsContainer: () => ({
          display: 'none',
        }),
        control: (base) => ({
          ...base,
          background: '#121214',
          border: 'none',
          color: '#FFF',
          height: '3rem',
        }),
      }}
    />
  )
}

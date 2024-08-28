import Select, { SingleValue } from 'react-select';

type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' }
];

type SelectCompoProps = {
  onChange: (selectedOption: SingleValue<OptionType>) => void;
};

const SelectCompo = ({ onChange }: SelectCompoProps) => {
  return (
    <Select
      options={options}
      onChange={onChange}
    />
  );
}

export default SelectCompo;

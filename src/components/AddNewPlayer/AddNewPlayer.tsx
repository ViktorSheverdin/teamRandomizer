import { OutlinedInput } from '@mui/material';

interface AddNewPlayerProps {
  handleAddName: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
export const AddNewPlayer = (props: AddNewPlayerProps) => {
  const { handleAddName } = props;
  return (
    <>
      <OutlinedInput
        style={{
          marginTop: '20px',
          minHeight: '150px',
          backgroundColor: 'lightgray',
          color: 'black',
        }}
        type='text'
        placeholder='Enter a name'
        onKeyDown={handleAddName}
        multiline
      />
    </>
  );
};

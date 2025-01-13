import { Box, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

interface TeamHeaderProps {
  id: number;
  name: string;
  removeTeam: () => void;
}
export const TeamHeader = (props: TeamHeaderProps) => {
  const { id, name, removeTeam } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '5px',
        color: 'white',
      }}
    >
      <Box
        sx={{
          border: '1px white solid',
          borderRadius: '5px',
          width: '18px',
          height: '18px',
        }}
      >
        <Typography sx={{ fontSize: '13px' }}>{id}</Typography>
      </Box>
      <Typography sx={{ paddingLeft: '10px' }}>{name} </Typography>
      <ClearIcon
        onClick={removeTeam}
        sx={{ 'marginLeft': '25px', ':hover': { cursor: 'pointer' } }}
      />
    </Box>
  );
};

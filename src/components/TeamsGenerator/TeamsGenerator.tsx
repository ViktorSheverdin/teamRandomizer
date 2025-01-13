import React, { useEffect } from 'react';
import { Teams } from '../Teams/Teams';
import { AddNewPlayer } from '../AddNewPlayer/AddNewPlayer';
import { Box, Grid2 } from '@mui/material';

export interface TeamProps {
  id: number;
  name: string;
  members: MemberProps[];
}

export interface MemberProps {
  name: string;
  id: number;
}

export const TeamsGenerator = () => {
  const [teams, setTeams] = React.useState<TeamProps[]>([]);
  console.log(teams);
  useEffect(() => {
    if (teams.length < 1) {
      handleAddTeam();
    }
  }, [teams]);

  const handleAddTeam = () => {
    setTeams((prevTeams) => [
      ...prevTeams,
      {
        id: prevTeams.length + 1,
        name: `Team ${prevTeams.length + 1}`,
        members: [
          { name: 'Player 1', id: 1 },
          { name: 'Player 1', id: 1 },
          { name: 'Player 1', id: 1 },
        ],
      },
    ]);
  };
  const mockTeams = [
    {
      id: 1,
      name: 'Team 1',
      members: [
        { name: 'Player 1', id: 1 },
        { name: 'Player 2', id: 2 },
        { name: 'Player 3', id: 3 },
      ],
    },
    {
      id: 2,
      name: 'Team 2',
      members: [
        { name: 'Player 4', id: 4 },
        { name: 'Player 5', id: 5 },
        { name: 'Player 6', id: 6 },
      ],
    },
    {
      id: 3,
      name: 'Team 3',
      members: [
        { name: 'Player 7', id: 7 },
        { name: 'Player 8', id: 8 },
        { name: 'Player 9', id: 9 },
      ],
    },
  ];

  return (
    <div>
      <h1>Teams Generator</h1>
      <Box sx={{ backgroundColor: 'lightgray', padding: '20px' }}>
        <Grid2
          container
          spacing={2}
        >
          <Grid2 size={4}>
            <AddNewPlayer handleAddName={handleAddTeam} />
          </Grid2>
          <Grid2 size={4}>
            <Box sx={{ backgroundColor: 'white', padding: '20px' }}>
              Controlls
            </Box>
          </Grid2>
          <Grid2 size={4}>
            <Teams teams={mockTeams} />
          </Grid2>
        </Grid2>
      </Box>
    </div>
  );
};

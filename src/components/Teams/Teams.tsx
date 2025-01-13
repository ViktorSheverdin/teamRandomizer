import { Card, Grid2 } from '@mui/material';
import React from 'react';
import { TeamProps } from '../TeamsGenerator/TeamsGenerator';
import { Team } from '../Team/Team';

interface TeamsProps {
  teams: TeamProps[];
}
export const Teams = (props: TeamsProps) => {
  const { teams } = props;
  const [teamscount, setTeamsCount] = React.useState<number>(1);

  const removeTeam = () => {
    if (teamscount === 1) return;
    setTeamsCount((prevCount) => prevCount - 1);
    // TODO redistribute the rest of the names
  };
  return (
    <Card sx={{ overflowY: 'auto' }}>
      <Grid2 container>
        {teams.map((team) => (
          <Grid2 key={team.id}>
            <Team
              id={team.id}
              name={team.name}
              members={team.members}
              removeTeam={removeTeam}
            />
          </Grid2>
        ))}
      </Grid2>
    </Card>
  );
};

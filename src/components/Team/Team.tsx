import { Card } from '@mui/material';
import { TeamHeader } from '../TeamHeader/TeamHeader';
import { MemberProps } from '../TeamsGenerator/TeamsGenerator';

interface TeamProps {
  id: number;
  name: string;
  members: MemberProps[];
  removeTeam: () => void;
}

export const Team = (props: TeamProps) => {
  const { id, name, members, removeTeam } = props;
  return (
    <Card
      sx={{ backgroundColor: 'green', margin: '10px', borderRadius: '10px' }}
    >
      <TeamHeader
        id={id}
        name={name}
        removeTeam={removeTeam}
      />

      <Card sx={{ margin: '2px', borderRadius: '10px' }}>
        {members.map((member) => (
          <div key={member.id}>{member.name} </div>
        ))}
      </Card>
    </Card>
  );
};

import { TouchableOpacity, View, Text } from 'react-native';
import { GameController } from 'phosphor-react-native';

import { DuoInfo } from '../DuoInfo';

import { THEME } from '../../theme';
import { styles } from './styles';

export interface DuoCardProps {
  id: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Name" value={data.name} />
      <DuoInfo
        label="Years Played"
        value={`${data.yearsPlaying} ${
          data.yearsPlaying > 1 ? 'years' : 'year'
        }`}
      />
      <DuoInfo
        label="Availability"
        value={`${data.weekDays.length} ${
          data.weekDays.length > 1 ? 'days' : 'day'
        } \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <DuoInfo
        label="Voice call"
        value={data.useVoiceChannel ? 'Yes' : 'No'}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />

        <Text style={styles.buttonTitle}>Conect</Text>
      </TouchableOpacity>
    </View>
  );
}

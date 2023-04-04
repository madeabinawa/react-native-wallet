import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/routes/routes';

export const useNavigate = () => {
  const navigate =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return navigate;
};

import {useSelector} from 'react-redux';
import {RootState} from 'src/redux';

export const useAuth = () => {
  const {isAuth, user, isLoading, errorMessage} = useSelector(
    (state: RootState) => state.auth,
  );

  return {isAuth, isLoadingAuth: isLoading, errorMessage, ...user};
};

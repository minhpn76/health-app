import {
  Box,
  Container,
  Grid,
  Typography,
  styled,
  svgIconClasses,
} from '@mui/material';
import {MealType} from 'src/@types/models/meal';

import {Knife as KnifeIcon, Cup as CupIcon} from 'src/icons';

type MealFilterProps = {
  onChangeMealType: (type: MealType) => void;
};

const StyledMealFilter = styled(Grid)(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
}));

const StyledFilterItem = styled(Box)(({theme}) => ({
  width: 136,
  height: 136,
  textAlign: 'center',
  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
  background: `linear-gradient(5deg, ${theme.palette.primary[300]} 0%,  ${theme.palette.primary.main} 100%)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  cursor: 'pointer',
  '& p': {
    color: theme.palette.light?.main,
  },
  [`& .${svgIconClasses.root}`]: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    color: theme.palette.light?.main,
  },
}));

const filterMeals = [
  {
    icon: <KnifeIcon viewBox="0 0 56 56" />,
    text: 'Morning',
  },
  {
    icon: <KnifeIcon viewBox="0 0 56 56" />,
    text: 'Lunch',
  },
  {
    icon: <KnifeIcon viewBox="0 0 56 56" />,
    text: 'Dinner',
  },
  {
    icon: <CupIcon viewBox="0 0 56 56" />,
    text: 'Snack',
  },
];

const MealFilter = ({onChangeMealType}: MealFilterProps) => {
  return (
    <Container maxWidth="md">
      <StyledMealFilter>
        {filterMeals.map((meal, idx) => (
          <StyledFilterItem
            key={idx}
            onClick={() => onChangeMealType(meal.text as MealType)}
          >
            {meal.icon}
            <Typography variant="body">{meal.text}</Typography>
          </StyledFilterItem>
        ))}
      </StyledMealFilter>
    </Container>
  );
};

export default MealFilter;

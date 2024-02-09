import ImgMediaCard from "./card";

const HabitList = ({ data }) => {
  return data?.map((habit) => <ImgMediaCard data={habit} />);
};
export default HabitList;

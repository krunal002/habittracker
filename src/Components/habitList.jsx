import ImgMediaCard from "./card";

const HabitList = ({ data }) => {
  return data?.sort((a, b) => new Date(b.timeTag) - new Date(a.timeTag)).map((habit) => <ImgMediaCard data={habit} />);
};
export default HabitList;

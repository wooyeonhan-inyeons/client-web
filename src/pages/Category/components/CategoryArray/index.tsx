import {
  Category,
  CategoryArr,
} from "../../../AddPost/components/CategoryAddPost/type";

export const categoryArr: CategoryArr = [
  {
    id: Category.Daily,
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
  {
    id: Category.Metting,
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
  {
    id: Category.Commercial,
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
  {
    id: Category.Information,
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
  {
    id: Category.Event,
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
  {
    id: Category.Gift,
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
];

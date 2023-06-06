import {
  Category,
  CategoryArr,
} from "../../../AddPost/components/CategoryAddPost/type";

export const categoryArr: CategoryArr = [
  {
    id: Category.DAILY,
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
  {
    id: Category.GROUP,
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
  {
    id: Category.ADS,
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
  {
    id: Category.INFO,
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
  {
    id: Category.EVENT,
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
  {
    id: Category.PRESENT,
    selected: false,
    fn_print: function print() {
      console.log(this.id);
    },
  },
];
